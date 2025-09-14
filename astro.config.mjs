import { defineConfig } from "astro/config"
import remarkToc from "remark-toc"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { visualizer } from "rollup-plugin-visualizer"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  server: {
    allowedHosts: ["astro.localhost"],
    port: 3010,
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
      },
    },
    plugins: [tailwindcss(), visualizer({ filename: "dist/bundle-size.html", gzipSize: true })],
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
