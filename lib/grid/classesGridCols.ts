import { classArr } from "~ui/utils/classArr"

export const classesGridCols2ContentFr = "grid grid-cols-[max-content_1fr]"
export const classesGridCols3MaxMinFr = "grid grid-cols-[max-content_min-content_1fr]"

export const classesGridCols2sm = classArr("grid grid-cols-1", "sm:grid-cols-2")

export const classesGridCols2md = classArr("grid grid-cols-1", "md:grid-cols-2")

/**
 * 1280/2 = 640 px = 35.5 rem / col
 */
export const classesGridCols2lg = classArr("grid grid-cols-1", "lg:grid-cols-2")

/**
 * ~600 px (37rem, ~60ch) / col
 */
export const classesGridCols2xl = classArr("grid grid-cols-1", "xl:grid-cols-2")
export const classesGridCols2xl3 = classArr(classesGridCols2xl, "2xl:grid-cols-4", "3xl:grid-cols-6")

/**
 * 1024/3 = 341 px = 19rem / col
 * xl: 1280/340 = 3.75
 * lg: 1024/340 = 3
 * md: 768/340 = 2.26
 * sm: 640/340 = 1.8
 * xs: 400/340 = 1.17
 */
export const classesGridCols3lg = classArr("grid grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3")

/**
 * ~400 px (25rem, ~40ch) / col
 */
export const classesGridCols3xl = classArr("grid grid-cols-1", "md:grid-cols-2", "xl:grid-cols-3")
export const classesGridCols3xl3 = classArr(classesGridCols3xl, "2xl:grid-cols-6", "3xl:grid-cols-9")

/**
 * ~320 px (18rem, ~32ch) / col
 * 4 = 4x1, 2x2
 * xl: 1280/320 = 4
 * lg: 1024/320 = 3.2
 * md: 768/320 = 2.4
 * sm: 640/320 = 2
 * xs: 400/320 = 1.25
 */
export const classesGridCols4xl = classArr("grid grid-cols-1", "sm:grid-cols-2", "md:grid-cols-2", "xl:grid-cols-4")
export const classesGridCols4xl3 = classArr(classesGridCols4xl, "2xl:grid-cols-8", "3xl:grid-cols-12")

/**
 * ~256 px (16rem, ~26ch) / col
 * 5 = 5x1
 * xl: 1280/256 = 5
 * lg: 1024/256 = 4
 * md: 768/256 = 3
 * sm: 640/256 = 2.5
 * xs: 400/256 = 1.56
 */
export const classesGridCols5xl = classArr(
  "grid grid-cols-1",
  "sm:grid-cols-2",
  "md:grid-cols-3",
  "lg:grid-cols-4",
  "xl:grid-cols-5",
)
export const classesGridCols5xl3 = classArr(classesGridCols5xl, "2xl:grid-cols-10", "3xl:grid-cols-15")

/**
 *
 * ~200 px (13rem, ~20ch) / col
 * 6 = 6x1, 3x2, 2x3
 * xl: 1280/200 = 6.4
 * lg: 1024/200 = 5.12
 * md: 768/200 = 3.84
 * sm: 640/200 = 3.2
 * xs: 400/200 = 2
 */
export const classesGridCols6xl = classArr("grid grid-cols-2", "sm:grid-cols-3", "md:grid-cols-4", "xl:grid-cols-6")
export const classesGridCols6xl3 = classArr(classesGridCols6xl, "2xl:grid-cols-12", "3xl:grid-cols-18")

/**
 *
 * ~160 px (9rem, ~16ch) / col
 * 8 = 8x1, 4x2, 2x4
 * xl: 1280/160 = 8
 * lg: 1024/160 = 6.4
 * md: 768/160 = 4.8
 * sm: 640/160 = 4
 * xs: 400/160 = 2.5
 */
export const classesGridCols8xl = classArr(
  "grid grid-cols-3",
  "sm:grid-cols-4",
  "md:grid-cols-5",
  "lg:grid-cols-6",
  "xl:grid-cols-8",
)
export const classesGridCols8xl3 = classArr(classesGridCols8xl, "2xl:grid-cols-16", "3xl:grid-cols-24")

export function classesGridColsByCharacterLength(chars: number): string {
  if (chars < 16) return classesGridCols8xl
  if (chars < 20) return classesGridCols6xl
  if (chars < 32) return classesGridCols4xl
  if (chars < 40) return classesGridCols3xl
  return classesGridCols2xl
}

export function classesGridColsByCharacterLengthMaxLgDialog(chars: number): string {
  if (chars < 20) return "grid " + "grid-cols-2 " + "sm:grid-cols-3 " + "md:grid-cols-4 " + "lg:grid-cols-5 "
  if (chars < 40) return "grid " + "grid-cols-1 " + "md:grid-cols-2 "
  return "grid " + "grid-cols-1 "
}
