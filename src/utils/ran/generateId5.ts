import { generateReadableId } from "./generateReadableId.ts"

const gen = generateReadableId(5)

export function generateId5(): string {
  return gen()
}
