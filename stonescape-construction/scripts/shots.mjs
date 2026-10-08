import { chromium } from "playwright-core";
import path from "path";

const out = "/workspace/trade-outreach/shots/stonescape-construction";
const url = "http://127.0.0.1:4181/stonescape-construction/";

const browser = await chromium.launch({
  executablePath: "/usr/bin/google-chrome-stable",
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

async function shot(name, viewport) {
  const page = await browser.newPage({ viewport });
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: path.join(out, `${name}-hero.png`),
    fullPage: false,
  });
  await page.locator("#quote").scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(out, `${name}-form.png`),
    fullPage: false,
  });
  if (viewport.width < 500) {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(400);
    await page.locator(".menu-toggle").click();
    await page.waitForTimeout(600);
    await page.screenshot({
      path: path.join(out, `${name}-menu.png`),
      fullPage: false,
    });
  }
  await page.close();
}

await shot("desktop", { width: 1440, height: 900 });
await shot("mobile", { width: 390, height: 844 });
await browser.close();
console.log("screenshots written to", out);
