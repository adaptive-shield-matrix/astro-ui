import { classMerge } from "@/ui_utils/classMerge.ts"
import type { TailwindBreakpoint } from "@/ui_utils/TailwindBreakpoint.ts"
import { tailwindBreakpoint } from "@/ui_utils/TailwindBreakpoint.ts"

function tableDesktopClassName(b: TailwindBreakpoint) {
  const tb = tailwindBreakpoint
  return classMerge(
    "hidden",
    b === tb.sm && "sm:table",
    b === tb.md && "md:table",
    b === tb.lg && "lg:table",
    b === tb.xl && "xl:table",
  )
}
function tableMobileClassName(b: TailwindBreakpoint) {
  const tb = tailwindBreakpoint
  return classMerge(
    "w-full",
    b === tb.sm && "sm:hidden",
    b === tb.md && "md:hidden",
    b === tb.lg && "lg:hidden",
    b === tb.xl && "xl:hidden",
  )
}
export const tableVisibilityClasses = {
  desktop: tableDesktopClassName,
  mobile: tableMobileClassName,
}
