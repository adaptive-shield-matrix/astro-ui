import { classMerge } from "@/utils/classMerge"
import type { TailwindBreakpoint } from "@/utils/tailwindBreakpoint"
import { tailwindBreakpoint } from "@/utils/tailwindBreakpoint"

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
