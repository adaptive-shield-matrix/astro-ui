import { classArr } from "@/ui_utils/classArr.ts"
import { classMerge } from "@/ui_utils/classMerge.ts"
import { type ButtonVariant, buttonVariant } from "./buttonCva.ts"

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

const buttonIconClasses = {
  // transparent bg
  outline: classesBlackWhite,
  ghost: classesBlackWhite,
  link: classesBlackWhite,
  // filled grayscale
  filled: classesBlackWhite,
  subtle: classesBlackWhite,
  default: classArr(classesTextFillWhite, "dark:text-black dark:fill-black"),
  // filled colors
  primary: classArr(classesTextFillWhite, "dark:text-indigo-100 dark:fill-indigo-100"),
  destructive: classesWhiteWhite,
  warning: classesWhiteWhite,
  success: classesWhiteWhite,
  info: classesWhiteWhite,
  // outlined colors
  error: classArr(
    "text-destructive dark:text-red-700", // text
    "fill-destructive dark:fill-red-700", // fill
  ),
} as const satisfies Record<ButtonVariant, string>

const defaultVariant = buttonVariant.default

export function buttonIconCva(
  variant: ButtonVariant | null = defaultVariant,
  ...customClasses: (string | boolean | undefined | null | 0 | 0n)[]
) {
  return classMerge(baseClasses, buttonIconClasses[variant ?? defaultVariant], customClasses)
}
