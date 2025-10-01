#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status
set -x # Print all executed commands to the terminal

scriptDir="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
# libDir="lib"
libDir="$scriptDir/../"
localRulesDir=".roo/rules-code"
localMdFile=$(readlink -f $localRulesDir/astro_lib.md)

mkdir -p "$localRulesDir"

if [ ! -d "$libDir" ]; then
    echo "Error: Directory $libDir does not exist." >&2
    exit 1
fi

cat > "$localMdFile" << EOF
# Available Astro UI Components and utility functions

These components from @adaptive-sm/astro-ui can be imported using the \`~/\` alias.
Generated at: $(date +"%Y-%m-%d %H:%M")

EOF

foundFiles=$(find "$libDir" \( -name "*.astro" -o -name "*.ts" -o -name "*.tsx" \) -printf "%P\n")
if [ -z "$foundFiles" ]; then
    echo "Error: No .astro, .ts, or .tsx files found in $libDir" >&2
    rm -f "$localMdFile"
    exit 1
fi
echo "$foundFiles" | sed 's#^#- ~/#' >> "$localMdFile"
# echo "Found $(echo "$foundFiles" | wc -l) files."
