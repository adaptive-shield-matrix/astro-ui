import { generateReadableId } from "@/utils/ran/generateReadableId.ts"

const gen = generateReadableId(6)

export function generateId6(): string {
  return gen()
}
