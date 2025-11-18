import imageSize from "image-size"
import { promises as fs } from "node:fs"
import path from "node:path"
import type { ImageType } from "~ui/img/ImageType"
import { runCmdAsync } from "~utils/bun/runCmdAsync"

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif", ".tiff", ".svg"])

function getMimeType(ext: string): string {
  switch (ext) {
    case ".jpg":
    case ".jpeg":
      return "image/jpeg"
    case ".png":
      return "image/png"
    case ".gif":
      return "image/gif"
    case ".webp":
      return "image/webp"
    case ".avif":
      return "image/avif"
    case ".tiff":
      return "image/tiff"
    case ".svg":
      return "image/svg+xml"
    default:
      return "application/octet-stream"
  }
}

export async function generateImageList(
  imageDirectory: string,
  existingImages: Record<string, ImageType>,
  outputPath: string,
) {
  // console.log("found", existingImages.length, "existing images")
  const imageMap = await processImageFiles(imageDirectory, existingImages)
  const sorted = sortImageMap(imageMap)
  await writeGeneratedImagesFile(sorted, outputPath)
  await formatGeneratedImagesCodeFile(outputPath)
}

async function writeGeneratedImagesFile(imageMap: Record<string, ImageType>, outputPath: string): Promise<void> {
  const outputContent = `
  import type { ImageType } from "~ui/img/ImageType"
  // Auto-generated, manual changes will be lost
export const imageList = ${JSON.stringify(imageMap, null, 2)} as const satisfies Record<string, ImageType>;
`
  await Bun.write(outputPath, outputContent)
  console.log(`Generated ${Object.keys(imageMap).length} images to ${outputPath}`)
}

async function processImageFiles(
  directory: string,
  existingImages: Record<string, any>,
): Promise<Record<string, ImageType>> {
  const imageMap: Record<string, ImageType> = {}

  for await (const filePath of walkDirectory(directory)) {
    const ext = path.extname(filePath).toLowerCase()
    if (!IMAGE_EXTENSIONS.has(ext)) {
      console.log("ignoring " + ext, filePath)
      continue
    }

    try {
      const buffer = await fs.readFile(filePath)
      const dimensions = imageSize(buffer)
      if (!dimensions.width || !dimensions.height) continue

      const relativePath = path.relative(directory, filePath)
      const fileName = path.basename(filePath, ext)
      let key = fileName.replace(/-/g, "_")
      if (/^\d/.test(fileName)) {
        key = "i" + key
      }

      const prevAlt = existingImages[key]?.alt
      const alt = prevAlt || fileName.replace(/[-_]/g, " ")
      const mimeType = getMimeType(ext)

      imageMap[key] = {
        path: relativePath,
        width: dimensions.width,
        height: dimensions.height,
        alt,
        mimeType,
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error)
    }
  }

  return imageMap
}

async function* walkDirectory(dir: string): AsyncGenerator<string> {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walkDirectory(fullPath)
    } else if (entry.isFile()) {
      yield fullPath
    }
  }
}

function sortImageMap(m: Record<string, ImageType>): Record<string, ImageType> {
  return Object.keys(m)
    .sort()
    .reduce(
      (sorted, key) => {
        // We know key exists in m since we're iterating its keys
        sorted[key] = m[key]!
        return sorted
      },
      {} as Record<string, ImageType>,
    )
}

async function formatGeneratedImagesCodeFile(outputPath: string) {
  const cmd = `bun run biome check --write ${outputPath}`.split(" ")
  runCmdAsync(cmd)
}
