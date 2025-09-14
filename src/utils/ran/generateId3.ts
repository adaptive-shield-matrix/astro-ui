import { generateReadableId } from "@/utils/ran/generateReadableId.ts"

const gen = generateReadableId(3)

export function generateId3(): string {
  return gen()
}
