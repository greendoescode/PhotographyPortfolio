import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
defineConfig({ plugins: [tailwindcss()] });

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
};

export default config;
