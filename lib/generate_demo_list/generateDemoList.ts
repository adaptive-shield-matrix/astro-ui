import { readdir, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { runCmdAsync } from "~ui/utils/bun/runCmdAsync"
import type { DemoListType } from "./DemoListType"

export async function generateDemoList(demosPath: string, outputPath: string) {
  const categories = await readdir(demosPath, { withFileTypes: true })

  const demoPageList: DemoListType = {}

  for (const category of categories) {
    if (category.isDirectory()) {
      const categoryPath = join(demosPath, category.name)
      const demoFiles = await readdir(categoryPath)
      const files = demoFiles.filter(isDemoFile).map((file) => file.replace(/\.astro$/, ""))
      if (files.length > 0) {
        demoPageList[category.name] = files
      }
    }
  }
  sortDemoPageList(demoPageList)

  const outputContent = `import type { DemoListType } from "~ui/generate_demo_list/DemoListType"

export const demoList = ${JSON.stringify(demoPageList, null, 2)} satisfies DemoListType;
`

  await writeFile(outputPath, outputContent, "utf-8")
  await formatGeneratedCodeFile(outputPath)
}

function isDemoFile(file: string) {
  if (!file.endsWith(".astro")) return false
  if (!file.startsWith("demo")) return false
  return true
}

function sortDemoPageList(demoPageList: DemoListType) {
  for (const list of Object.values(demoPageList)) {
    sortStringsByLengthThenByCharactersInPlace(list)
  }
}

function sortStringsByLengthThenByCharactersInPlace(arr: string[]): string[] {
  return arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
}

function sortStringsByLengthThenByCharacters(arr: string[]): string[] {
  return sortStringsByLengthThenByCharactersInPlace([...arr])
}

async function formatGeneratedCodeFile(outputPath: string) {
  const cmd = `bun run biome check --write ${outputPath}`.split(" ")
  runCmdAsync(cmd)
}
