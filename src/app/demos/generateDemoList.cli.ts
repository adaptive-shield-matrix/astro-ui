import { join } from "node:path"
import { generateDemoList } from "~ui/generate_demo_list/generateDemoList"

const searchPath = join(process.cwd(), "src/pages")
const outputPath = join(process.cwd(), "src/app/demos/demoList.ts")

generateDemoList(searchPath, outputPath)
