import { defineConfig } from "astro/config"
import remarkToc from "remark-toc"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  server: {
    allowedHosts: ["astro-ui.com", "astro-ui.localhost"],
    port: 3030,
  },
  cacheDir: "./astro/cache",
  output: "static",
  outDir: "./dist",
  devToolbar: {
    enabled: false,
  },
  prefetch: {
    prefetchAll: true,
  },
  vite: {
    resolve: {
      alias: {
        "@": new URL("src", import.meta.url).pathname,
        "~": new URL("lib", import.meta.url).pathname,
      },
    },
    plugins: [tailwindcss()],
  },
  markdown: {
    // https://github.com/remarkjs/remark-toc
    remarkPlugins: [[remarkToc, { heading: "Table of Contents" }]],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "append" }]],
  },
  build: {
    outDir: "dist",
    assets: "assets",
  },
})
