import { generateReadableId } from "./generateReadableId"

const gen = generateReadableId(5)

export function generateId5(): string {
  return gen()
}
