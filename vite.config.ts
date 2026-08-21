import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Must match the GitHub Pages repo name, otherwise built asset URLs 404.
export default defineConfig({ base: "/Portfolio/", plugins: [react()] });
