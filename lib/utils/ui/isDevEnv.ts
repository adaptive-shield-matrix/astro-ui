export function isDevEnv() {
  return import.meta.env.DEV
}

export function isProdEnv() {
  return !isDevEnv()
}
