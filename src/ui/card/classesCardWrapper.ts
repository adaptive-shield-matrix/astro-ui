import { classArr } from "@/ui/utils/classArr"

export const classesCardWrapper = classArr(
  "rounded-lg shadow-lg", // card shadows/padding
  "bg-white dark:bg-gray-900", // bg
)

export const classesCardWrapperP4 = classArr(classesCardWrapper, "p-4 lg:p-8")
export const classesCardWrapperP8 = classArr(classesCardWrapper, "p-4 sm:p-8")

export const classesCardWrapperPage = classArr(
  "rounded-xl shadow-xl", // rounded border + shadow
  "p-4 sm:p-8 md:p-12", // padding
  // "sm:mx-auto", // center
  "bg-white dark:bg-gray-900", // bg
)
