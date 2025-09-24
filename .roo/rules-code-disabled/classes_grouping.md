
## classMerge and classArr

- **Standardize class organization** in Astro components using `classMerge` and `classArr` utility functions
- **Always use `classMerge`** instead of template strings
- **Group classes** by functional category:
  ```tsx
  ;[
    "flex flex-col items-center justify-center", // layout
    "min-h-screen", // sizing
    "bg-gray-50 dark:bg-gray-900", // background
    "p-4", // spacing
  ]
  ```
- **Comment each group** with its purpose
- **Order groups logically**:
  - Layout/Positioning
  - Sizing/Dimensions
  - Backgrounds
  - Borders/Shadows
  - Typography
  - Spacing/Margin/Padding
  - Transitions/Animations
  - State modifiers (hover/focus)
- **Place props.class last** to enable proper override
- Prefer `classArr` for static class lists without dynamic props
- Use `classMerge` when dynamic class props are needed


Incorrect Approach (String Templates):

```tsx
// ErrorPage.tsx
<div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
```

Correct Approach (ClassMerge + Grouped Arrays):

```tsx
import { classMerge } from "@/ui/utils/classMerge"

<div class={classMerge(
  "flex flex-col items-center justify-center", // layout
  "min-h-screen", // sizing
  "bg-gray-50 dark:bg-gray-900", // background
  "p-4", // spacing
  props.class,
)}>
```
