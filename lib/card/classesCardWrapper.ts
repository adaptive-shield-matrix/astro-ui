import { classArr } from "~ui/utils/ui/classArr"

export const classesCardWrapperBoderDark = "dark:border dark:border-gray-500"
export const classesCardWrapperBg = "bg-white dark:bg-zinc-800"

export const classesCardWrapper = classArr(
  "rounded-lg shadow-lg", // card shadows/padding
  classesCardWrapperBg, // bg
  classesCardWrapperBoderDark, // border
)

export const classesCardWrapperP4 = classArr(classesCardWrapper, "p-4 lg:p-8")
export const classesCardWrapperP8 = classArr(classesCardWrapper, "p-4 sm:p-8")

export const classesCardWrapperPage = classArr(
  "rounded-xl shadow-xl", // rounded border + shadow
  "p-4 sm:p-8 md:p-12", // padding
  // "sm:mx-auto", // center
  "bg-white dark:bg-gray-900", // bg
)
