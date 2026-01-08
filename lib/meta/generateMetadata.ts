export function generateMetadata(
  lang: string,
  domain: string,
  title: string,
  description?: string,
): Record<string, string> {
  const meta: Record<string, string> = {
    // text
    "og:title": title,
    "og:locale": lang,
    "og:type": "website",
    "og:site_name": title,
    "og:url": domain,
  }
  if (description) {
    meta["og:description"] = description
  }
  return meta
}
