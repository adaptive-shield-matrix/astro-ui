import fs from "fs"
import path from "path"

// Define the source directory for your components
const componentsDir = path.join(process.cwd(), "src", "ui")
// Define the output file for the index
const outputFile = path.join(process.cwd(), "src", "index.js")

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

// Function to generate the index file
function generateIndex() {
  try {
    const files = findComponentFiles(componentsDir)

    if (files.length === 0) {
      console.log("No Astro or TypeScript components found. Skipping index generation.")
      return
    }

    const exports = files
      .map((filePath) => {
        // Get the path relative to the components directory
        const relativePath = path.relative(componentsDir, filePath)
        // Get the component name from the filename (e.g., 'Button' from 'Button.astro' or 'Button.ts')
        const isAstro = filePath.endsWith(".astro")
        const componentName = path.basename(filePath, isAstro ? ".astro" : ".ts")
        // The import path needs to be relative to the src/ directory where index.js resides
        const importPath = `./components/${relativePath}`.replace(/\\/g, "/") // Use forward slashes for imports

        return `export { default as ${componentName} } from '${importPath}';`
      })
      .join("\n")

    fs.writeFileSync(outputFile, exports)

    console.log(`Successfully generated ${outputFile} with ${files.length} component(s).`)
  } catch (err) {
    console.error("Error generating index file:", err)
  }
}

generateIndex()
