import { classArr } from "~ui/utils/classArr"
import { classMerge } from "~ui/utils/classMerge"

export type BadgeVariant = keyof typeof badgeVariant

export const badgeVariant = {
  base: "base",
  contrast: "contrast",
  outline: "outline",
} as const

export const classesBadgeBase = classArr(
  "inline-flex items-center", // layout
  "text-sm", // text
  "px-2.5 py-0.5 rounded-full", // padding
  "flex gap-2", // layout children
)

export const classesBadgeContrast = classArr(
  classesBadgeBase,
  "text-white dark:text-slate-900 dark:hover:text-slate-900", // text
  "bg-slate-900 dark:bg-slate-50", // bg
)

export const classesBadgeOutline = classArr(
  classesBadgeBase,
  "border border-gray-400 dark:border-gray-500", // border
)

export const classesBadgeVariant = {
  base: classesBadgeBase,
  contrast: classesBadgeContrast,
  outline: classesBadgeOutline,
} as const satisfies Record<BadgeVariant, string>

export function badgeCva(v: BadgeVariant, classes?: string): string {
  return classMerge(classesBadgeVariant[v ?? badgeVariant.base], classes)
}

const classesTextFillBlack = "text-black fill-black"
const classesTextFillWhite = "text-white fill-white"

const classesBlackWhite = classArr(
  classesTextFillBlack,
  "dark:text-white", // dark text
  "dark:fill-white", // dark fill
)

const classesWhiteWhite = classArr(
  classesTextFillWhite,
  "dark:text-white", // dark text
  "dark:fill-white", // dark fill
)

const baseClasses = classArr(
  "size-6", // size
)

const badgeIconClasses = {
  base: classesBlackWhite,
  outline: classesBlackWhite,
  contrast: classArr(classesTextFillWhite, "dark:text-black dark:fill-black"),
} as const satisfies Record<BadgeVariant, string>

export function badgeIconCva(variant: BadgeVariant, classes?: string) {
  return classMerge(baseClasses, badgeIconClasses[variant], classes)
}
