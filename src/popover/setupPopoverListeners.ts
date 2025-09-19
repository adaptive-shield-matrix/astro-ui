const classPopoverSelector = ".popover-details"

export function setupPopoverListeners() {
  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      const detailsElements = document.querySelectorAll(classPopoverSelector) as NodeListOf<HTMLDetailsElement>
      detailsElements.forEach((details) => {
        if (details.open) {
          details.open = false
        }
      })
    }
  })
  document.addEventListener("click", (e: MouseEvent) => {
    const detailsElements = document.querySelectorAll(classPopoverSelector) as NodeListOf<HTMLDetailsElement>
    detailsElements.forEach((details) => {
      if (details.open && !details.contains(e.target as Node)) {
        details.open = false
      }
    })
  })
}
