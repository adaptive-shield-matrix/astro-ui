import { classArr } from "~ui/utils/classArr"
import { classMerge } from "~ui/utils/classMerge"
import { classesButtonClickAnimation } from "./classesButtonClickAnimation"
import { classesButtonDisabled } from "./classesButtonDisabled"

export type ButtonVariant = keyof typeof buttonVariant
export const buttonVariant = {
  none: "none",
  // transparent bg
  outline: "outline",
  ghost: "ghost",
  link: "link",
  // filled black/white/gray
  filled: "filled",
  subtle: "subtle",
  contrast: "contrast",
  // filled colors
  filledYellow: "filledYellow",
  filledAmber: "filledAmber",
  filledOrange: "filledOrange",
  filledRed: "filledRed",
  filledGreen: "filledGreen",
  filledSky: "filledSky",
  filledIndigo: "filledIndigo",
  // outlined colors
  outlineRed: "outlineRed",
} as const

export type ButtonSize = keyof typeof buttonSize
export const buttonSize = {
  none: "none",
  minimal: "minimal",
  sm: "sm",
  default: "default",
  lg: "lg",
} as const

export type ButtonCvaProps = {
  variant?: ButtonVariant
  size?: ButtonSize
}

const baseClasses = classArr(
  "inline-flex", // layout
  "font-medium", // text
  "items-center justify-center", // layout children
  "rounded-md ring-offset-background", // rounded, rings
  "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", // focus
  "transition-colors", // animation
  "group",
  "cursor-pointer",
)

const variantClasses = {
  //
  // transparent bg
  //
  none: "",
  outline: classArr(
    "bg-transparent dark:bg-transparent",
    "dark:text-slate-100", // text
    "hover:bg-slate-100", // bg hover
    "border border-slate-200 dark:border-slate-700 dark:hover:bg-slate-900", // border
  ),
  ghost: classArr(
    "dark:text-slate-100 dark:hover:text-slate-100", // text
    "bg-transparent dark:bg-transparent", // bg
    "data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent", // bg data
    "hover:bg-slate-100 dark:hover:bg-slate-800", // bg hover
  ),
  link: classArr(
    "text-slate-900 dark:text-slate-100", // text
    "underline-offset-4 hover:underline ", // underline
    "bg-transparent dark:bg-transparent", // bg
    "hover:bg-transparent dark:hover:bg-transparent", // bg hover
  ),
  //
  // filled grayscale
  //
  filled: classArr(
    "dark:text-slate-100", // text
    "bg-white dark:bg-black", // bg
    "hover:bg-slate-50 dark:hover:bg-slate-900", // bg hover
  ),
  subtle: classArr(
    "text-slate-900 dark:text-slate-100", // text
    "bg-slate-100 dark:bg-slate-700", // bg
    "hover:bg-slate-200 dark:hover:bg-slate-600", // bg hover
  ),
  contrast: classArr(
    "text-white dark:text-slate-900 dark:hover:text-slate-900", // text
    "bg-slate-900 dark:bg-slate-50", // bg
    "hover:bg-slate-700 dark:hover:bg-slate-300", // bg hover
  ),
  //
  // filled colors
  //
  filledYellow: classArr(
    "text-white", // text
    "bg-yellow-500 dark:bg-yellow-800 ", // bg
    "hover:bg-yellow-700 dark:hover:bg-yellow-600", // bg hover
    "focus:ring-yellow-400 dark:focus:ring-yellow-400", // focus
  ),
  filledAmber: classArr(
    "text-white", // text
    "bg-amber-500 dark:bg-amber-800 ", // bg
    "hover:bg-amber-700 dark:hover:bg-amber-600", // bg hover
    "focus:ring-amber-400 dark:focus:ring-amber-400", // focus
  ),
  filledOrange: classArr(
    "text-white", // text
    "bg-orange-500 dark:bg-orange-800 ", // bg
    "hover:bg-orange-700 dark:hover:bg-orange-600", // bg hover
    "focus:ring-orange-400 dark:focus:ring-orange-400", // focus
  ),
  filledRed: classArr(
    "text-white", // text
    "bg-red-500 dark:bg-red-700", // bg
    "hover:bg-red-600 dark:hover:bg-red-600", // bg hover
    "focus:ring-red-400 dark:focus:ring-red-400", // focus
  ),
  filledGreen: classArr(
    "text-white", // text
    "bg-green-500 hover:bg-green-700 dark:hover:bg-green-700", // bg
    "focus:ring-green-400 dark:focus:ring-green-400", // focus
  ),
  filledSky: classArr(
    "text-white", // text
    "bg-sky-500 hover:bg-sky-700 dark:hover:bg-sky-700", // bg
    "focus:ring-sky-400 dark:focus:ring-sky-400", // focus
  ),
  filledIndigo: classArr(
    "text-white", // text
    "bg-indigo-500 dark:bg-indigo-800 ", // bg
    "hover:bg-indigo-700 dark:hover:bg-indigo-600", // bg hover
    "focus:ring-indigo-400 dark:focus:ring-indigo-400", // focus
  ),
  //
  // outline toast colors
  //
  outlineRed: classArr(
    "text-red-500 dark:text-red-500", // text
    "border border-red-200 dark:border-red-700", // border
    "bg-transparent", // bg
    "hover:bg-red-100 dark:hover:bg-red-950", // bg hover
    "focus:ring-red-400 dark:focus:ring-red-400", // focus
  ),
} as const satisfies Record<ButtonVariant, string>

const sizeClasses = {
  none: "",
  minimal: "rounded-none",
  sm: "px-3",
  default: "py-2 px-3",
  lg: "px-8 py-4 text-lg",
} as const satisfies Record<ButtonSize, string>

const defaultSize = buttonSize.default

export function buttonCva1(variant: ButtonVariant, ...customClasses: (string | boolean | undefined | null | 0)[]) {
  return buttonCva2(variant, null, ...customClasses)
}

export function buttonCva2(
  variant: ButtonVariant,
  size: ButtonSize | null = defaultSize,
  ...customClasses: (string | boolean | undefined | null | 0)[]
) {
  const v = variant
  const s = size ?? defaultSize
  return classMerge(baseClasses, variantClasses[v], sizeClasses[s], combinedClasses(v, s), customClasses)
}

function combinedClasses(variant: ButtonVariant, size: ButtonSize) {
  const variantGroup1 =
    variant === buttonVariant.outline || variant === buttonVariant.filledYellow || variant === buttonVariant.outlineRed
  if (variantGroup1 && size === buttonSize.lg) {
    return "border-2"
  }
  return null
}

export function buttonCvaIconOnly(
  variant: ButtonVariant,
  isLoading: boolean | undefined,
  isDisabled: boolean | undefined,
  ...customClasses: (string | boolean | undefined | null | 0)[]
) {
  const classes = buttonCva2(
    variant,
    buttonSize.none,
    classesButtonClickAnimation,
    "rounded-full p-2.5",
    (isDisabled || isLoading) && classesButtonDisabled,
    ...customClasses,
  )
  return classes
}
