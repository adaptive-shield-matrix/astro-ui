/**
 * - calculate strength - https://zelark.github.io/nano-id-cc/
 * - remove 0, O, i, l for better readability and no disambiguity
 * - 32 length = 10 (numbers) - 1 (no zero) + 26 (alphabet) - 3 (i,l,o)
 * - ignores casing
 * - Crockford's Base32 - https://www.crockford.com/base32.html
 */
export const urlAlphabet32 = "123456789abcdefghjkmnpqrstuvwxyz"
