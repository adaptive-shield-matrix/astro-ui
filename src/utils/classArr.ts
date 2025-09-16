export function classArr(...list: (false | null | undefined | string | 0)[]): string {
  return list.filter(Boolean).join(" ")
}
