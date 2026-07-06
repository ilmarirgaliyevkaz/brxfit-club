import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// TODO: confirm production origin (separate ad-landing domain)
export default defineConfig({
  site: "https://brxfit.club",
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
});
