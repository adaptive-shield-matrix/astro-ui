import { generateReadableId } from "@/utils/ran/generateReadableId"

const gen = generateReadableId(7)

export function generateId7(): string {
  return gen()
}
