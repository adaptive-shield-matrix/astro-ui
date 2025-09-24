#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status
set -x # Print all executed commands to the terminal

# Copy rules from astro-ui lib
LIB_RULES_DIR="node_modules/@adaptive-sm/astro-ui/.roo/rules-code"
LOCAL_RULES_DIR=".roo/rules-code"
mkdir -p "$LOCAL_RULES_DIR"

echo "Copying rules from $LIB_RULES_DIR to $LOCAL_RULES_DIR"
rsync -av "$LIB_RULES_DIR/" "$LOCAL_RULES_DIR/"

echo "Rules copied successfully"

# Run update astro ui rules
echo "Running update_rules_astro_ui.bash"

scriptDir="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
bash "$scriptDir"/update_rules_astro_ui.bash

echo "Update astro ui rules completed"

echo "Update rules process finished"
