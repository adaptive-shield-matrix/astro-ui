export type TailwindBreakpoint = keyof typeof tailwindBreakpoint

/**
 * https://tailwindcss.com/docs/responsive-design
 */
export const tailwindBreakpoint = {
  // sm - 640px = 40rem
  sm: "sm",

  // md - 768px = 48rem
  md: "md",

  // lg - 1024px = 64rem
  lg: "lg",

  // xl - 1280px = 80rem
  xl: "xl",

  // 2xl - 2560px = 160rem
  "2xl": "2xl",

  // 3xl - 3840px = 240rem
  "3xl": "3xl",
} as const

export const tailwindBreakpointW = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
  "2xl": "160rem",
  "3xl": "240rem",
} as const satisfies Record<TailwindBreakpoint, string>

export const tailwindBreakpointWidthClass = {
  sm: "xl",
  md: "3xl",
  lg: "5xl",
  xl: "7xl",
  "2xl": "",
  "3xl": "",
} as const satisfies Record<TailwindBreakpoint, string>

/**
 * assume: 1 column = 200px
 * xs ~= 400-500
 * sm - 640px = 40rem -> 4 columns
 * md - 768px = 48rem -> 5 columns
 * lg - 1024px = 64rem -> 6 columns
 * xl - 1280px = 80rem -> 7 columns
 * https://tailwindcss.com/docs/responsive-design
 * @param columns - amount of columns
 * @param sm - amount of columns fit inside tailwind xs/sm (640px)
 * @param columnsStepSize - amount of columns fit inside an increase in tailwind breakpoint (around 200px)
 */
export function tableColumnAmountToTailwindBreakpoint(
  columns: number,
  sm = 3,
  columnsStepSize = 1,
): TailwindBreakpoint {
  const v = columns - sm
  if (v === columnsStepSize) return tailwindBreakpoint.md
  if (v === columnsStepSize * 2) return tailwindBreakpoint.lg
  if (v >= columnsStepSize * 3) return tailwindBreakpoint.xl
  return tailwindBreakpoint.sm
}

// max-w-3xs - 16rem - 256px
// max-w-2xs - 18rem - 288px
// max-w-xs - 20rem - 320px
// max-w-sm - 24rem - 384px
// max-w-md - 28rem - 448px
// max-w-lg - 32rem - 512px
// max-w-xl - 36rem - 576px
// max-w-2xl - 42rem - 672px
// max-w-3xl - 48rem - 768px
// max-w-4xl - 56rem - 896px
// max-w-5xl - 64rem - 1024px
// max-w-6xl - 72rem - 1152px
// max-w-7xl - 80rem - 1280px
// max-w-min
// max-w-max
// max-w-fit
