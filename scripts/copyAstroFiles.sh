#!/bin/sh
set -e
set -x
# Copy Astro and CSS files from src to dist preserving structure

find src -name "*.astro" -o -name "*.css" | while read file; do
  dir=$(dirname "$file")
  rel_dir=${dir#src/}
  mkdir -p "dist/$rel_dir"
  cp "$file" "dist/$rel_dir/"
done
