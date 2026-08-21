import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this branch's /docs folder, so build output goes there.
export default defineConfig({
  plugins: [react()],
  build: { outDir: "docs", emptyOutDir: true },
});
