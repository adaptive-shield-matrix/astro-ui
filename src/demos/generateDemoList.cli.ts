import { join } from "node:path"
import { generateDemoList } from "~/generate_demo_list/generateDemoList"

const searchPath = join(process.cwd(), "src/pages/demos")
const outputPath = join(process.cwd(), "src/pages/demos/demoList.ts")

generateDemoList(searchPath, outputPath)
