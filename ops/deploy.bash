#!/bin/bash
set -e

bun run build
rsync -av --delete public-images/ dist/images/
bun run upload
git branch -f deployed
