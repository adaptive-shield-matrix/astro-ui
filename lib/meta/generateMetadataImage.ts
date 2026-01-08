import type { ImageType } from "~ui/img/ImageType"

export function generateMetadataImage(imageDef: ImageType, imageSrc?: string): Record<string, string> {
  if (!imageDef || !imageSrc) return {}
  return {
    "og:image": imageSrc,
    "og:image:type": imageDef.mimeType ?? "image/png",
    "og:image:alt": imageDef.alt,
    "og:image:width": imageDef.width.toString(),
    "og:image:height": imageDef.height.toString(),
    // twitter
    "twitter:card": "summary_large_image",
  }
}
