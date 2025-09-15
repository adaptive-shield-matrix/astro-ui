import { urlAlphabet32 } from "./urlAlphabet32"

/**
 * * works in browser
 * * completely random, not sequential as a feature
 * * 32 chars: url friendly, readable, not disambiguate
 * * variable length
 * * uses secure crypto/web-crypto/node:crypto api
 * * generates in batches of 4 for better perf
 * @param len - character amount
 */
export function generateReadableId(len: number = 16): () => string {
  const arr = new Uint16Array(Math.ceil(len / 4))
  return () => {
    crypto.getRandomValues(arr)
    let r = ""
    for (const a of arr) {
      const n1 = (a >> 9) % 32
      r += urlAlphabet32[n1]!
      if (r.length >= len) return r

      const n2 = (a >> 6) % 32
      r += urlAlphabet32[n2]!

      if (r.length >= len) return r
      const n3 = (a >> 3) % 32
      r += urlAlphabet32[n3]!

      if (r.length >= len) return r
      const n4 = a % 32
      r += urlAlphabet32[n4]!
    }
    return r
  }
}
