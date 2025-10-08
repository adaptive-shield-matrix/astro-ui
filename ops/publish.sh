#!/bin/bash
set -x # Print all executed commands to the terminal
set -e # Exit immediately if a command exits with a non-zero status

# --- Configuration ---
CHANGELOGS_DIR="changelogs"
REPO_URL=$(git remote get-url origin | sed 's/\.git$//')
PACKAGE_JSON="package.json"

# --- Helper: get current version from package.json ---
CURRENT_VERSION=$(jq -r '.version' "$PACKAGE_JSON")

# --- Step 1: Generate changelog draft using git-cliff ---
echo "📝 Generating changelog since last release..."
CHANGELOG_BODY=$(git cliff --unreleased --strip all)

if [[ -z "$CHANGELOG_BODY" || "$CHANGELOG_BODY" == *"No commits found"* ]]; then
  echo "⚠️ No new commits since last release. Exiting."
  exit 1
fi

echo "📄 Preview of release notes:"
echo "----------------------------------------"
echo "$CHANGELOG_BODY"
echo "----------------------------------------"
echo "📦 Current version: $CURRENT_VERSION"

# --- Step 2: Prompt for new version ---
read -p "🔖 Enter new version (e.g., 1.2.4): " NEW_VERSION

if [[ -z "$NEW_VERSION" ]]; then
  echo "❌ Version is required. Aborting."
  exit 1
fi

# Validate semver-ish format (basic check)
if ! [[ "$NEW_VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+(-.*)?$ ]]; then
  echo "❌ Invalid version format. Must be like 1.2.3 or 1.2.3-beta.1"
  exit 1
fi

# --- Step 3: Update package.json ---
echo "🔄 Updating $PACKAGE_JSON to v$NEW_VERSION..."
jq --arg v "$NEW_VERSION" '.version = $v' "$PACKAGE_JSON" > tmp.$$.json && mv tmp.$$.json "$PACKAGE_JSON"

# --- Step 4: Commit and tag ---
echo "💾 Committing version bump..."
git add "$PACKAGE_JSON"
git commit -m "chore(release): prepare for v$NEW_VERSION"

TAG="v$NEW_VERSION"
git tag -a "$TAG" -m "Release v$NEW_VERSION"

# --- Step 5: Generate full changelog file ---
DATE=$(date +%Y-%m-%d)
CHANGELOG_FILE="$CHANGELOGS_DIR/${DATE}_v${NEW_VERSION}.md"

mkdir -p "$CHANGELOGS_DIR"

# Re-run git-cliff for this specific tag range (from previous tag to now)
# But since we just tagged, we can use --tag $TAG
FULL_CHANGELOG=$(git cliff --tag "$TAG" --strip all)

echo "$FULL_CHANGELOG" > "$CHANGELOG_FILE"
echo "📄 Changelog saved to: $CHANGELOG_FILE"

# --- Step 6: Push to remote (required for GitHub release) ---
echo "🚀 Pushing commit and tag..."
git push origin main
git push origin "$TAG"

# --- Step 7: Publish to npm ---
echo "📦 Publishing to npm..."
npm publish

# --- Step 8: Create GitHub release ---
echo "☁️ Creating GitHub release..."

# Escape newlines for gh CLI (use file to avoid quoting issues)
TEMP_NOTES=$(mktemp)
echo "$FULL_CHANGELOG" > "$TEMP_NOTES"

gh release create "$TAG" \
  --title "v$NEW_VERSION" \
  --notes-file "$TEMP_NOTES" \
  --repo "$(basename "$REPO_URL")"

rm -f "$TEMP_NOTES"

echo "✅ Release v$NEW_VERSION complete!"
echo "📄 Changelog: $CHANGELOG_FILE"
echo "🔗 GitHub: https://github.com$(echo "$REPO_URL" | sed 's/.*github.com//')/releases/tag/$TAG"
