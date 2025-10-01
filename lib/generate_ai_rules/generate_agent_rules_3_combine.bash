#!/usr/bin/env bash
set -x # Print all executed commands to the terminal
set -e # Exit immediately if a command exits with a non-zero status

shopt -s nullglob          # glob returns nothing if no matches

srcDir="./.roo/rules-code"

# combine md files into AGENTS.md
outfile="AGENTS.md"
sep=$'\n\n---\n\n'

# Start with a fresh output file
: > "$outfile"

first=true
for md in $srcDir/*.md; do
    if [[ -f "$md" ]]; then
        # Only prepend the separator *between* files, not before the first one
        if [[ "$first" == true ]]; then
            first=false
        else
            printf %s "$sep" >> "$outfile"
        fi
        cat "$md" >> "$outfile"
    fi
done

# Count and print the total number of lines in the resulting file
total_lines=$(wc -l < "$outfile")
echo "$outfile: $total_lines lines"
