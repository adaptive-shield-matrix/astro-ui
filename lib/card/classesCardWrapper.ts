import { classArr } from "~ui/utils/ui/classArr"

export const classesRoundedShadowLg = "rounded-lg shadow-lg"
export const classesCardWrapperBorderDark = "dark:border dark:border-gray-500"
export const classesCardWrapperBg = "bg-white dark:bg-zinc-800"

export const classesCardWrapper = classArr(
  classesRoundedShadowLg, // card shadows/padding
  classesCardWrapperBg, // bg
  classesCardWrapperBorderDark, // border
)

export const classesPadding4Lg8 = "p-4 lg:p-8"
export const classesPadding4sm8 = "p-4 sm:p-8"
export const classesPadding4sm8md12 = "p-4 sm:p-8 md:p-12"

export const classesCardWrapperP4 = classArr(classesCardWrapper, classesPadding4Lg8)
export const classesCardWrapperP8 = classArr(classesCardWrapper, classesPadding4sm8)

export const classesRoundedShadowXl = "rounded-xl shadow-xl"

export const classesCardWrapperPage = classArr(
  classesRoundedShadowXl, // rounded border + shadow
  classesPadding4sm8md12, // padding
  classesCardWrapperBg, // bg
  classesCardWrapperBorderDark, // border
)
