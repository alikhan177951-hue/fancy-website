/**
 * Prove hero hero MOVES: single video, src fixed, currentTime advances a lot on scroll.
 */
import { chromium } from "playwright";
import path from "path";
import { promises as fs } from "fs";

const OUT = "/opt/cursor/artifacts";
const URL = "http://127.0.0.1:4176/northwest-mowing/";
const EXPECT = "/northwest-mowing/videos/hero-14383-scrub.mp4";

await fs.mkdir(`${OUT}/screenshots`, { recursive: true });
await fs.mkdir("/tmp/pw-scrub-fix", { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  recordVideo: { dir: "/tmp/pw-scrub-fix", size: { width: 1280, height: 800 } },
});
const page = await context.newPage();

await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector("video.hero-video__clip", { timeout: 15000 });
await page.waitForFunction(
  () => {
    const v = document.querySelector("video.hero-video__clip");
    return v && v.readyState >= 1 && Number.isFinite(v.duration) && v.duration > 1;
  },
  { timeout: 20000 },
);
await page.waitForTimeout(800);

const track = await page.locator(".hero-scroll").boundingBox();
const range = Math.max((track?.height ?? 2500) - 800, 1);

const samples = [];
for (const p of [0, 0.2, 0.4, 0.6, 0.8, 1]) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), range * p);
  await page.waitForTimeout(500);
  const row = await page.evaluate(() => {
    const v = document.querySelector("video.hero-video__clip");
    return {
      src: v?.currentSrc || v?.getAttribute("src"),
      t: v?.currentTime ?? -1,
      dur: v?.duration ?? -1,
      ready: v?.readyState ?? 0,
      count: document.querySelectorAll("video").length,
    };
  });
  samples.push({ p, ...row });
  await page.screenshot({
    path: path.join(OUT, "screenshots", `scrubfix-p${String(p).replace(".", "")}.png`),
  });
}

const sameSrc = samples.every((s) => (s.src || "").includes("hero-14383-scrub.mp4"));
const oneVideo = samples.every((s) => s.count === 1);
const mono = samples.every((s, i) => i === 0 || s.t >= samples[i - 1].t - 0.1);
const moved = samples[samples.length - 1].t - samples[0].t > 20; // must jump ~20s+ across scrub

console.log(JSON.stringify({ samples, sameSrc, oneVideo, mono, moved, expect: EXPECT }, null, 2));

// Demo scroll
await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
await page.waitForTimeout(300);
for (let y = 0; y <= range; y += 35) {
  await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: "instant" }), y);
  await page.waitForTimeout(24);
}
await page.waitForTimeout(600);

await context.close();
await browser.close();

for (const f of await fs.readdir("/tmp/pw-scrub-fix")) {
  const full = path.join("/tmp/pw-scrub-fix", f);
  const st = await fs.stat(full);
  if (st.size > 10000) {
    await fs.copyFile(full, path.join(OUT, "hero-moves-on-scroll.webm"));
    console.log("demo", st.size);
  }
}

if (!sameSrc || !oneVideo || !mono || !moved) {
  console.error("FAIL — hero did not scrub");
  process.exitCode = 1;
} else {
  console.log("PASS — hero currentTime advances on scroll");
}
