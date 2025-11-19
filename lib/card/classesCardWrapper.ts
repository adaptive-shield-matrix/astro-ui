import { classArr } from "~ui/utils/ui/classArr"

export const classesRoundedShadowLg = "rounded-lg shadow-lg"
export const classesCardWrapperBoderDark = "dark:border dark:border-gray-500"
export const classesCardWrapperBg = "bg-white dark:bg-zinc-800"

export const classesCardWrapper = classArr(
  classesRoundedShadowLg, // card shadows/padding
  classesCardWrapperBg, // bg
  classesCardWrapperBoderDark, // border
)

export const classesCardWrapperP4 = classArr(classesCardWrapper, "p-4 lg:p-8")
export const classesCardWrapperP8 = classArr(classesCardWrapper, "p-4 sm:p-8")

export const classesRoundedShadowXl = "rounded-xl shadow-xl"

export const classesCardWrapperPage = classArr(
  classesRoundedShadowXl, // rounded border + shadow
  "p-4 sm:p-8 md:p-12", // padding
  // "sm:mx-auto", // center
  classesCardWrapperBg, // bg
  classesCardWrapperBoderDark, // border
)
