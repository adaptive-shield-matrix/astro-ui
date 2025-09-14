import type { BunCmd } from "./BunCmd"
import { cryAndTryAgainLater } from "./cryAndTryAgainLater"
import { runCmdAsync } from "./runCmdAsync"

export async function runCmdLocally(cmd: string | string[]): Promise<BunCmd> {
  return runCmdAsync(["sh", "-c", Array.isArray(cmd) ? cmd.join(" ") : cmd])
}

export async function runCmdLocallyAndExitOnError(cmd: string | string[]): Promise<BunCmd> {
  const got = await runCmdLocally(cmd)
  if (!got.success) return cryAndTryAgainLater(got)
  return got
}
