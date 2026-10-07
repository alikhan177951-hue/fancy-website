/**
 * Verifies tipper stays visible through hero scrub (no all-zero opacity / blue void).
 */
import { chromium } from "playwright";
import path from "path";
import { promises as fs } from "fs";

const OUT = "/opt/cursor/artifacts";
const URL = "http://127.0.0.1:4173/bobcatbob/";

await fs.mkdir(`${OUT}/screenshots`, { recursive: true });
await fs.mkdir("/tmp/pw-hero-fix", { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  recordVideo: { dir: "/tmp/pw-hero-fix", size: { width: 1280, height: 800 } },
});
const page = await context.newPage();

await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector("video.hero-video__clip", { timeout: 15000 });
await page.waitForTimeout(2500);

// Confirm video src paths use /bobcatbob/
const srcs = await page.$$eval("video.hero-video__clip", (els) =>
  els.map((e) => e.getAttribute("src")),
);
const badSrc = srcs.filter((s) => !s?.startsWith("/bobcatbob/videos/"));
if (badSrc.length) {
  console.error("BAD VIDEO PATHS", badSrc);
  process.exitCode = 1;
}

const track = await page.locator(".hero-scroll").boundingBox();
const range = Math.max((track?.height ?? 2400) - 800, 1);

const samples = [];
for (let i = 0; i <= 20; i++) {
  const p = i / 20;
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), range * p);
  await page.waitForTimeout(120);
  const ops = await page.evaluate(() => {
    const clips = [...document.querySelectorAll("video.hero-video__clip")];
    const posters = [...document.querySelectorAll(".hero-video__poster")];
    const clipOps = clips.map((el) => Number(getComputedStyle(el).opacity));
    const posterOps = posters.map((el) => Number(getComputedStyle(el).opacity));
    return {
      clipOps,
      posterOps,
      clipMax: Math.max(0, ...clipOps),
      posterMax: Math.max(0, ...posterOps),
      anyVisible: Math.max(0, ...clipOps, ...posterOps),
    };
  });
  samples.push({ p, ...ops });
  if (i === 0 || i === 5 || i === 10 || i === 15 || i === 20) {
    await page.screenshot({
      path: path.join(OUT, "screenshots", `fix-p${String(p).replace(".", "")}.png`),
    });
  }
}

const voids = samples.filter((s) => s.anyVisible < 0.4);
console.log(
  JSON.stringify(
    {
      srcs,
      trackHeight: track?.height,
      voidCount: voids.length,
      voids: voids.slice(0, 5),
      sampleMid: samples[10],
      sampleEnd: samples[20],
    },
    null,
    2,
  ),
);

// Smooth scrub for demo video
await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
await page.waitForTimeout(300);
for (let y = 0; y <= range; y += 50) {
  await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: "instant" }), y);
  await page.waitForTimeout(30);
}
await page.waitForTimeout(500);

await context.close();
await browser.close();

const vids = await fs.readdir("/tmp/pw-hero-fix");
for (const f of vids) {
  const full = path.join("/tmp/pw-hero-fix", f);
  const st = await fs.stat(full);
  if (st.size > 10000) {
    await fs.copyFile(full, path.join(OUT, "hero-scrub-fix.webm"));
    console.log("demo", st.size);
  }
}

if (voids.length) {
  console.error("FAIL: blue-void opacity gaps detected");
  process.exitCode = 1;
} else {
  console.log("PASS: tipper layer visible across full scrub");
}
