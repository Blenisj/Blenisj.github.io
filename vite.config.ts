import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Root path because the site deploys to the Blenisj.github.io user site.
export default defineConfig({ base: "/", plugins: [react()] });
