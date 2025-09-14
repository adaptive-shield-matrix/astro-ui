import { generateReadableId } from "@/utils/ran/generateReadableId.ts"

const gen = generateReadableId(7)

export function generateId7(): string {
  return gen()
}
