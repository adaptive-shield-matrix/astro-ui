# Import Management Guidelines

Do NOT add import statements before using the corresponding symbols in the code.
Reason: vscode auto optimizes them away on file save because they are unused.

Example:

```typescript
// First, write code that uses the import
const result = someFunction();

// Then, add the import right before usage
import { someFunction } from './library';
```
