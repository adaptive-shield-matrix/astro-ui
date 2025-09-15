import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * https://github.com/dcastil/tailwind-merge
 * @param inputs
 */
export function classMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
