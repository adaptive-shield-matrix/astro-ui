export const stylesBgGridBlueprint = {
  "background-image": `
        linear-gradient(to bottom, #aeaeae34 2px, transparent 2px),
        linear-gradient(to right, #aeaeae34 2px, transparent 2px),
        linear-gradient(to bottom, #aeaeae42 1px, transparent 1px),
        linear-gradient(to right, #aeaeae42 1px, transparent 1px)`,
  "background-size": "100px 100px, 100px 100px, 20px 20px, 20px 20px",
  "background-position": "-1px -1px",
} as const satisfies astroHTML.JSX.CSSProperties
