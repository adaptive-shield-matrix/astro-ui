import { classArr } from "~ui/utils/classArr"
import { classMerge } from "~ui/utils/classMerge"
import { type ButtonVariant } from "./buttonCva"

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
  none: "",
  // transparent bg
  outline: classesBlackWhite,
  ghost: classesBlackWhite,
  link: classesBlackWhite,
  // filled grayscale
  filled: classesBlackWhite,
  subtle: classesBlackWhite,
  contrast: classArr(classesTextFillWhite, "dark:text-black dark:fill-black"),
  // filled colors
  filledYellow: classArr(classesTextFillWhite, "dark:text-yellow-100 dark:fill-yellow-100"),
  filledOrange: classArr(classesTextFillWhite, "dark:text-orange-100 dark:fill-orange-100"),
  filledAmber: classArr(classesTextFillWhite, "dark:text-amber-100 dark:fill-amber-100"),
  filledRed: classArr(classesTextFillWhite, "dark:text-red-100 dark:fill-red-100"),

  filledGreen: classesWhiteWhite,
  filledBlue: classArr(classesTextFillWhite, "dark:text-blue-100 dark:fill-blue-100"),
  filledIndigo: classArr(classesTextFillWhite, "dark:text-indigo-100 dark:fill-indigo-100"),
  // outlineRed: classesWhiteWhite,
  filledSky: classesWhiteWhite,
  // outlined colors
  outlineRed: classArr("text-red-500 fill-red-500 dark:text-red-700 dark:fill-red-700"),
} as const satisfies Record<ButtonVariant, string>

export function buttonIconCva(
  variant: ButtonVariant,
  ...customClasses: (string | boolean | undefined | null | 0 | 0n)[]
) {
  return classMerge(baseClasses, buttonIconClasses[variant], customClasses)
}
