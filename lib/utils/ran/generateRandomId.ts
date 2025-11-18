/**
 * Generates a random alphanumeric string ID
 *
 * Uses Math.random() converted to base-36 to create a string of letters and numbers.
 * The substring(2, 11) removes the "0." prefix and takes 9 characters for a good balance
 * of uniqueness and brevity (approximately 10^36 possible combinations).
 *
 * @returns {string} A 9-character random alphanumeric string
 */
export function generateRandomId(): string {
  return Math.random().toString(36).substring(2, 11)
}
