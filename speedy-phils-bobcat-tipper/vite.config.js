import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/speedy-phils-bobcat-tipper/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
  },
  preview: {
    port: 4174,
  },
});
