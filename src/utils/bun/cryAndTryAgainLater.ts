import process from "node:process"

export function cryAndTryAgainLater<T>(t: T): T {
  process.exit(1)
  return t
}
