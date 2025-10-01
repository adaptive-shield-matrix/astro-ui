## migrate react code

Convert all given React component code into Astro.
Replace "lucide-react" with material design icons from the 'mdi' package.
Use PascalCase for Astro component filenames.
Do not use default exports.
Add ids to html Sections.
Replace `svg` with `Icon1.astro` component.
Replace `Card` with `CardWrapper` component.
Use existing components from the `@adaptive-sm/astro-ui` package that can be imported with the `~` alias.
Convert Reacts `key` prop then mapping over multiple elements into `data-id` property.
