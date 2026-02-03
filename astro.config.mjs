// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	site: "https://potch.org.za",
	trailingSlash: "always",
	integrations: [sitemap(), mdx()],
});
