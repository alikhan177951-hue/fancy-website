/**
 * Path A verify: single 10327 video, src never swaps, currentTime advances with scroll.
 */
import { chromium } from "playwright";
import path from "path";
import { promises as fs } from "fs";

const OUT = "/opt/cursor/artifacts";
const URL = "http://127.0.0.1:4173/bobcatbob/";
const EXPECT = "/bobcatbob/videos/unload-dump-10327.mp4";

await fs.mkdir(`${OUT}/screenshots`, { recursive: true });
await fs.mkdir("/tmp/pw-10327", { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  recordVideo: { dir: "/tmp/pw-10327", size: { width: 1280, height: 800 } },
});
const page = await context.newPage();

await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector("video.hero-video__clip", { timeout: 15000 });
await page.waitForTimeout(2800);

const meta = await page.evaluate(() => {
  const vids = [...document.querySelectorAll("video")];
  const hero = document.querySelector("video.hero-video__clip");
  return {
    videoCount: vids.length,
    src: hero?.getAttribute("src"),
    opacity: hero ? Number(getComputedStyle(hero).opacity) : 0,
  };
});

if (meta.videoCount !== 1 || meta.src !== EXPECT || meta.opacity < 0.99) {
  console.error("FAIL meta", meta);
  process.exitCode = 1;
}

const track = await page.locator(".hero-scroll").boundingBox();
const range = Math.max((track?.height ?? 2200) - 800, 1);

const samples = [];
for (const p of [0, 0.15, 0.45, 0.75, 1]) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), range * p);
  await page.waitForTimeout(450);
  const row = await page.evaluate(() => {
    const v = document.querySelector("video.hero-video__clip");
    return {
      src: v?.getAttribute("src"),
      t: v?.currentTime ?? -1,
      op: Number(getComputedStyle(v).opacity),
    };
  });
  samples.push({ p, ...row });
  await page.screenshot({
    path: path.join(OUT, "screenshots", `a10327-p${String(p).replace(".", "")}.png`),
  });
}

const sameSrc = samples.every((s) => s.src === EXPECT);
const mono = samples.every((s, i) => i === 0 || s.t >= samples[i - 1].t - 0.08);
const opaque = samples.every((s) => s.op >= 0.99);

console.log(JSON.stringify({ meta, samples, sameSrc, mono, opaque }, null, 2));

await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
await page.waitForTimeout(250);
for (let y = 0; y <= range; y += 40) {
  await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: "instant" }), y);
  await page.waitForTimeout(26);
}
await page.waitForTimeout(500);

await context.close();
await browser.close();

for (const f of await fs.readdir("/tmp/pw-10327")) {
  const full = path.join("/tmp/pw-10327", f);
  const st = await fs.stat(full);
  if (st.size > 10000) {
    await fs.copyFile(full, path.join(OUT, "path-a-10327-scroll-demo.webm"));
    console.log("demo", st.size);
  }
}

if (!sameSrc || !mono || !opaque || process.exitCode) {
  console.error("FAIL Path A verify");
  process.exitCode = 1;
} else {
  console.log("PASS: single 10327 scrub, continuous tip");
}
