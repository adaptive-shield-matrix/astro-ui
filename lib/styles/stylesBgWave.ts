/* Waves 2 - https://pattern.monster/waves-2/ */

export const stylesBgWave = {
  "background-attachment": "fixed",
  "background-image": `url("data:image/svg+xml,%3Csvg id='patternId' width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' patternUnits='userSpaceOnUse' width='80' height='20' patternTransform='scale(1) rotate(0)'%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='hsla(0, 0%25, 100%25, 0)'/%3E%3Cpath d='M-20.133 4.568C-13.178 4.932-6.452 7.376 0 10c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'  stroke-width='1' stroke='hsla(259, 0%25, 66%25, 0.38)' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='800%25' height='800%25' transform='translate(0,0)' fill='url(%23a)'/%3E%3C/svg%3E")`,
} as const satisfies astroHTML.JSX.CSSProperties
