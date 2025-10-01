#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status
set -x # Print all executed commands to the terminal

srcDir="node_modules/@adaptive-sm/astro-ui/.roo"
# srcDir="/home/david/Coding/adaptive-astro-ui/.roo/rules-code"
dstDir=".roo"

# create rules dir if missing
mkdir -p "$dstDir"
# copy files
rsync -av "$srcDir/rules-code/" "$dstDir/rules-code/"
rsync -av "$srcDir/rules-ask/" "$dstDir/rules-ask/"
rsync -av "$srcDir/mcp.json" "$dstDir/mcp.json"
