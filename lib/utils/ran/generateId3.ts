import { generateReadableId } from "~ui/utils/ran/generateReadableId"

const gen = generateReadableId(3)

export function generateId3(): string {
  return gen()
}
