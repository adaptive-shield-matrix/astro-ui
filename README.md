# Adaptive Astro UI

A library of reusable UI components for Astro projects. Built with TypeScript, Tailwind CSS, and Astro in static output mode. Components are designed to be accessible, customizable, and easy to integrate.

Quick link

- code - https://github.com/adaptive-shield-matrix/astro-ui
- npm - https://www.npmjs.com/package/@adaptive-sm/astro-ui
- component demo - https://adaptive-astro-ui.pages.dev/

## Installation

Install the package using Bun:

```bash
bun add @adaptive-sm/astro-ui
```

## Tailwind CSS Configuration

To ensure Tailwind scans the library's source files for classes (since components are published as source without a build step), add the following `@source` directive to your project's `src/layouts/global.css` (or equivalent global stylesheet):

```css
@source '/node_modules/@adaptive-sm/astro-ui/lib/**/*.{astro,html,md,mdx,ts,tsx}';
```

This tells Tailwind to include classes from the library's `.astro`, `.ts`, and other relevant files in the purge process, preventing unused classes from being purged during the build. Without it, Tailwind might not detect classes used in imported components, leading to missing styles.

## Option configuration: import alias

### Typescript

In your `tsconfig.json`, set up the `~` alias to point to the library:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "~ui/*": ["node_modules/@adaptive-sm/astro-ui/lib/*"]
    }
  }
}
```

### Astro

In your `astro.config.mjs`, set up the `~` alias to point to the library:

```js
import { defineConfig } from "astro/config"

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "~": new URL("./node_modules/@adaptive-sm/astro-ui/lib", import.meta.url).pathname,
      },
    },
  },
})
```

## Usage

### No Build Step Required

This library ships source `.astro` and `.ts` files directly—no pre-build needed. Benefits include:

- **Smaller size**: No bundled or compiled files.
- **Full compatibility**: Your Astro project compiles components using its own Astro, Vite, and Tailwind setup.
- **Better DX**: Preserves TypeScript types and IntelliSense.
- **Easier updates**: Consumers get changes immediately, with no build artifacts to manage.

Just set up your alias - Astro handles the rest automatically.

Import and use components directly in your Astro files. For example:

### Button Component

```astro
---
import { Button } from "~ui/button/Button.astro"
---

<Button variant="primary">Click me</Button>
```

### Card Component

```astro
---
import { CardWrapper } from "~ui/card/CardWrapper.astro"
---

<CardWrapper> Card content here. </CardWrapper>
```

### Image Component

```astro
---
import { Img } from "~ui/img/Img.astro"
---

<Img src="/path/to/image.jpg" alt="Description" />
```

Refer to individual component documentation in the source code for props and variants.

## Components

### Buttons

- [Button.astro](lib/button/Button.astro)
- Button variants and animations via CVAs in `buttonCva.ts`, `buttonIconCva.ts`

### Cards

- [CardWrapper.astro](lib/card/CardWrapper.astro)

### Details

- [Details.astro](lib/details/Details.astro)

### Forms

- [Fieldset.astro](lib/form/Fieldset.astro)

### Icons

- [Icon1.astro](lib/icon/Icon1.astro) (replaces SVG icons)

usage:

- Choose from over 7000 icons: https://pictogrammers.com/library/mdi/
- Import name from "@mdi/js" library
- Passed on as `path` prop

### Images

- [Img.astro](lib/img/Img.astro)

  A small wrapper setting loading lazy and decoding to async.

- [TypedImg.astro](lib/img/TypedImg.astro)

  An image with given width and height to prevent layout shifts.

  Generate types using `lib/generate_image_list/generateImageList.ts`

### Layouts

- [MinimalLayout.astro](lib/layouts/MinimalLayout.astro)
- [MarkdownPageWrapper.astro](lib/layouts/MarkdownPageWrapper.astro)

### Navigation bar

- [ThemeToggle.astro](lib/layouts/parts/ThemeToggle.astro)

### Links

- [LinkText.astro](lib/link/LinkText.astro)
- [LinkButton.astro](lib/link/LinkButton.astro)

### Lists

- [BlackBulletPoints.astro](lib/list/BlackBulletPoints.astro)
- [CheckPoints.astro](lib/list/CheckPoints.astro)
- [NumberedList.astro](lib/list/NumberedList.astro)

### Modals

- [ModalButton.astro](lib/modal/ModalButton.astro)

### Pages

- [PageCentered.astro](lib/page/PageCentered.astro)
- [PageCenteredCard.astro](lib/page/PageCenteredCard.astro)

### Popovers

- [Popover1.astro](lib/popover/Popover1.astro)

### Selects

- [Select.astro](lib/select/Select.astro)

### Table

- [Table.astro](lib/table/Table.astro)

## Demos

Explore component demos at:
[https://adaptive-astro-ui.pages.dev/](https://adaptive-astro-ui.pages.dev/)

## Development

### Building the Library

```bash
bun run build
```

### Running Demos

```bash
bun run dev
```

### Linting and Formatting

Uses Biome for linting and formatting:

```bash
bun run biome check .
bun run biome format --write .
```

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Add or update components in `lib/`.
4. Update demos in `src/pages/demos/`.
5. Ensure tests pass and run `bun run build`.
6. Submit a pull request.

Follow the coding rules in `.roo/rules-code/` for style and best practices.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built on top of [Astro](https://astro.build).
- Styled with [Tailwind CSS](https://tailwindcss.com/).
- Icons from [MDI](https://pictogrammers.com/library/mdi/).

For more information, visit the [GitHub repository](https://github.com/adaptive-shield-matrix/astro-ui).
