import { generateReadableId } from "@/utils/ran/generateReadableId.ts"

const gen = generateReadableId(4)

export function generateId4(): string {
  return gen()
}
