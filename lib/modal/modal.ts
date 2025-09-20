type FocusableElement =
  | HTMLAnchorElement
  | HTMLButtonElement
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement
  | HTMLDetailsElement

export function modal() {
  // variables
  let modals = document.querySelectorAll<HTMLDialogElement>(".modal")

  // abort controllers for global event listeners
  let trapFocusController: AbortController | undefined
  let keydownController: AbortController | undefined

  const getKeyboardFocusableElements = (element: HTMLElement) => {
    return [
      ...element.querySelectorAll<FocusableElement>(
        'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])',
      ),
    ].filter((el) => !el.hasAttribute("disabled"))
  }

  const trapFocus = (event: KeyboardEvent, modal: HTMLDialogElement) => {
    const focusables = getKeyboardFocusableElements(modal)

    // These will not be undefined as a modal always has at least one <button>
    const firstFocusable = focusables[0]!
    const lastFocusable = focusables[focusables.length - 1]!

    if (document.activeElement === lastFocusable && event.key === "Tab" && !event.shiftKey) {
      event.preventDefault()
      firstFocusable.focus()
    }

    if (document.activeElement === firstFocusable && event.key === "Tab" && event.shiftKey) {
      event.preventDefault()
      lastFocusable.focus()
    }
  }

  const openModal = (modal: HTMLDialogElement) => {
    const modalTitle = modal.querySelector("h2")
    const modalContent = modal.querySelector<HTMLDivElement>(".modal-content")

    modal.showModal()
    modalTitle!.focus()

    setAllowBackgroundScrolling(false)

    trapFocusController = new AbortController()
    keydownController = new AbortController()

    document.addEventListener("keydown", (e) => trapFocus(e, modal), { signal: trapFocusController.signal })

    modal.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "Escape") {
          closeSpecificModal(modal)
        }
      },
      { signal: keydownController.signal },
    )

    modal.addEventListener(
      "click",
      () => {
        closeSpecificModal(modal)
      },
      { signal: keydownController.signal },
    )

    modalContent!.addEventListener(
      "click",
      (event) => {
        event.stopPropagation()
      },
      { signal: keydownController.signal },
    )
  }

  const closeSpecificModal = (modal: HTMLDialogElement) => {
    const modalId = modal.getAttribute("aria-labelledby")
    const modalTrigger = document.querySelector(`#${modalId}`) as HTMLButtonElement
    modalTrigger.focus({ preventScroll: true })
    modal.close()

    setAllowBackgroundScrolling(true)

    trapFocusController?.abort()
    keydownController?.abort()
  }

  // execution
  addEventListeners(openModal, closeSpecificModal, modals)

  // Listen for view transitions
  document.addEventListener("astro:after-swap", () => {
    // reset variables
    modals = document.querySelectorAll<HTMLDialogElement>(".modal")
    addEventListeners(openModal, closeSpecificModal, modals)
  })
}

function addEventListeners(
  openModal: (modal: HTMLDialogElement) => void,
  closeModal: (modal: HTMLDialogElement) => void,
  modals = document.querySelectorAll<HTMLDialogElement>(".modal"),
) {
  // execution
  for (const modal of modals) {
    const modalId = modal.getAttribute("aria-labelledby")
    const modalTrigger = document.querySelector(`#${modalId}`)
    if (!modalTrigger) {
      throw new Error(`Trigger element not found. \n
      Did you forget to add a trigger element with id: "${modalId}"?`)
    }
    modalTrigger.addEventListener("click", () => openModal(modal))

    const closeId = `${modalId}-close`
    const modalCloseButton = modal.querySelector(`#${closeId}`)
    if (!modalCloseButton) {
      throw new Error(`Close button not found. Expected id: "${closeId}"?`)
    }
    modalCloseButton.addEventListener("click", () => closeModal(modal))
  }
}

function setAllowBackgroundScrolling(allowed: boolean): void {
  if (allowed) {
    document.body.classList.remove("overflow-hidden")
  } else {
    document.body.classList.add("overflow-hidden")
  }
}
