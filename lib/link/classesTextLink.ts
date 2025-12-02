import { classArr } from "../utils/classArr"

export const classesTextLink = classArr(
  "text-blue-600 hover:text-black", // light
  "dark:text-orange-600 dark:hover:text-orange-400", // dark
  "transition-colors", // animation
)

export const classesTextLinkGroupHover = classArr(
  "group-hover:text-blue-600", // light
  "dark:group-hover:text-orange-400", // dark
  "transition-colors", // animation
)
