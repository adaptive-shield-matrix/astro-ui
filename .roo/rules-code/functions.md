# Function Modularization

- Prefer `function` over `const` for functions
- Prefer early `if(!matching) return` over `if (matching)` checks
- Prefer early `if(!matching) continue` over `if (matching)` checks in for loops
- Break large functions into smaller, focused functions
- Break functions if using try catch
- Each function should have a single responsibility
- Name functions clearly based on their purpose
- Keep functions pure when possible (no side effects)
- Avoid else statements where possible
- Do not use const arrow function to define functions
- Always separate `fetch` calls into a separate function
