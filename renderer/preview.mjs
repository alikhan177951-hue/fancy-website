import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { BASE } from "./data.mjs";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..", "dist");
const prefix = BASE;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
};

const server = createServer((req, res) => {
  const url = new URL(req.url || "/", "http://127.0.0.1");
  let path = url.pathname;
  if (path === "/") {
    res.writeHead(302, { Location: prefix + "/" });
    res.end();
    return;
  }
  if (!path.startsWith(prefix)) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  path = path.slice(prefix.length) || "/";
  if (path.endsWith("/")) path += "index.html";
  const file = normalize(join(root, path.replace(/^\/+/, "")));
  if (!file.startsWith(root) || !existsSync(file) || statSync(file).isDirectory()) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  res.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream" });
  createReadStream(file).pipe(res);
});

const port = Number(process.env.PORT || 4173);
server.listen(port, "127.0.0.1", () => {
  console.log(`Preview http://127.0.0.1:${port}${prefix}/`);
});
