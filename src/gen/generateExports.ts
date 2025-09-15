import fs from "fs"
import path from "path"

// Define the source directory for your components
const componentsDir = path.join(process.cwd(), "src", "ui")
// Define the package.json file path
const packageJsonPath = path.join(process.cwd(), "package.json")

// Recursive function to find all Astro and TypeScript files
function findComponentFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir, { withFileTypes: true })
  files.forEach((dirent) => {
    const fullPath = path.join(dir, dirent.name)
    if (dirent.isDirectory()) {
      findComponentFiles(fullPath, fileList)
    } else if (dirent.isFile() && (dirent.name.endsWith(".astro") || dirent.name.endsWith(".ts"))) {
      fileList.push(fullPath)
    }
  })
  return fileList
}

// Function to generate granular exports in package.json
function generateExports() {
  try {
    const files = findComponentFiles(componentsDir)

    if (files.length === 0) {
      console.log("No Astro or TypeScript components found. Skipping exports generation.")
      return
    }

    // Read package.json
    const packageJsonContent = fs.readFileSync(packageJsonPath, "utf-8")
    const packageJson = JSON.parse(packageJsonContent)

    // Initialize exports if not present
    if (!packageJson.exports) {
      packageJson.exports = {}
    }

    // Generate exports
    files.forEach((filePath) => {
      // Get the path relative to the components directory
      const relativePath = path.relative(componentsDir, filePath).replace(/\\/g, "/")
      const isAstro = relativePath.endsWith('.astro');
      const exportPath = isAstro ? relativePath : relativePath.replace(/\.ts$/, '.js');
      // Remove extension for the export key
      const exportKey = `./ui/${relativePath.replace(/\.(astro|ts)$/, "")}`
      // Value is the full relative path from root
      const exportValue = `./dist/ui/${exportPath}`

      packageJson.exports[exportKey] = exportValue
    })

    // Write back to package.json
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))

    console.log(`Successfully updated package.json with ${files.length} granular export(s).`)
  } catch (err) {
    console.error("Error generating exports:", err)
  }
}

generateExports()