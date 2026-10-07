import { defineConfig } from "vite";

/** Live host: https://kaamtasker.com/bobcatbob/ — never assume site-root `/`. */
export default defineConfig({
  base: "/bobcatbob/",
  publicDir: "public",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    sourcemap: false,
  },
  server: {
    port: 5173,
    strictPort: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
});
