import console from "node:console"
import type { BunCmd } from "./BunCmd"
import { logBunCmd } from "./logBunCmd"

export async function runCmdAsync(cmd: string[]): Promise<BunCmd> {
  const startedAt = performance.now()
  if (logBunCmd) {
    console.log({ cmd })
  }
  const process = Bun.spawn(cmd, {
    stdout: "pipe",
    stderr: "pipe",
  })
  const exitCode = await process.exited
  const output = await Bun.readableStreamToText(process.stdout)
  const error = await Bun.readableStreamToText(process.stderr)
  const outputLines = output.split("\n").filter((s) => s.length > 0)
  const errorLines = error.split("\n").filter((s) => s.length > 0)
  const lines = [...outputLines, ...errorLines]
  const endedAt = performance.now()
  const ms = Math.round(endedAt - startedAt)
  const r: BunCmd = {
    cmd,
    success: exitCode === 0,
    exitCode,
    lines,
    ms,
  }
  if (logBunCmd) {
    if (lines.length < 8) {
      console.log(r)
    } else {
      const l: Omit<BunCmd, "lines"> = {
        cmd,
        success: exitCode === 0,
        exitCode,
        ms,
      }
      console.log(l)
      console.log(JSON.stringify(lines, null, 2))
    }
  }
  return r
}
