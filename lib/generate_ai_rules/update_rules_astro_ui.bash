#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status
set -x # Print all executed commands to the terminal

DIR=".roo/rules-code"
mkdir -p "$DIR"

MD_FILE="$DIR/astro_ui_lib.md"

LIB_DIR="node_modules/@adaptive-sm/astro-ui/lib"

if [ ! -d "$LIB_DIR" ]; then
    echo "Error: Directory $LIB_DIR does not exist." >&2
    exit 1
fi

cat > "$MD_FILE" << 'EOF'
# Available Astro UI Components and utility functions

These components from @adaptive-sm/astro-ui can be imported using the `~/` alias, assuming the alias is configured in astro.config.mjs to point to this lib directory.

## Content

EOF

FILES=$(find "$LIB_DIR" \( -name "*.astro" -o -name "*.ts" \) -printf "%P\n")
echo "Found $(echo "$FILES" | wc -l) files."
echo "$FILES" | sed 's#^#- ~/#' >> "$MD_FILE"
