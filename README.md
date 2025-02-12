# Commit Message Standard - Guidelines and Rules

This document outlines the commit message format enforced by `commitlint.config.js`. All commit messages must follow a structured format to ensure consistency, clarity, and traceability.

## Commit Message Format

Each commit message must follow this pattern:

```
<type>-<ticketKey>-<ticketNumber>(<moduleName>): <description>
```

### Components of the Commit Message:
- **type**: Specifies the purpose of the commit (e.g., feature addition, bug fix, documentation update, etc.)
- **ticketKey**: The type of Jira ticket(uppercase characters, max 7 characters) representing the project key.(e.g., CA, CAA, LOSF, LV, etc.)
- **ticketNumber**: A numeric value representing the ticket number.
- **moduleName**: A lowercase string representing the module affected by the change.
- **description**: A brief summary of the change.

### Example Commit Messages:
```
feat-PROJ-1234(auth): Add OAuth support
fix-BUGFIX-5678(ui): Resolve navbar rendering issue
```

## Enforced Rules

### 1. Header Format (`header-format`)
- Ensures the commit message adheres to the required format.
- Expected pattern: `<type>-<ticketKey>-<ticketNumber>(<moduleName>): <description>`
- Example of incorrect format:
  - `fix: resolve login issue` ❌
  - `feat-PROJ-1234-Auth Add new feature` ❌

### 2. Type Rules
#### a) Type Required (`type-empty`)
- The `type` field is mandatory.
- Example of incorrect format:
  - `-PROJ-1234(auth): Fix issue` ❌

#### b) Type Enumeration (`type-enum`)
- Allowed types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `revert`.
- Example of incorrect format:
  - `update-PROJ-1234(auth): Improve functionality` ❌ (Invalid type `update`)

### 3. Ticket Key Rules (`ticket-key-format`)
- Must be uppercase letters only.
- Cannot exceed 7 characters.
- Example of incorrect format:
  - `fix-proj-1234(auth): Fix bug` ❌ (Lowercase `proj`)
  - `feat-PROJECTNAME-1234(auth): Add feature` ❌ (More than 7 characters)

### 4. Ticket Number Rules (`ticket-number-format`)
- Must be numeric only.
- Example of incorrect format:
  - `fix-PROJ-ABC(auth): Fix issue` ❌ (Non-numeric ticket number)

### 5. Module Name Rules (`moduleName-format`)
- Must be lowercase letters only.
- Allowed module names: `admn`, `coll`, `cove`, `exce`, `expo`, `file`, `flex`, `memo`, `onbd`, `rskr`, `sprd`, `test`.
- Example of incorrect format:
  - `feat-PROJ-1234(AUTH): Add authentication` ❌ (Uppercase `AUTH`)
  - `feat-PROJ-1234(authx): Add authentication` ❌ (`authx` is not in the allowed list)

### 6. Description Rules
#### a) Minimum Length (`description-min-length`)
- Must be at least 10 characters long.
- Example of incorrect format:
  - `fix-PROJ-1234(auth): Short` ❌

#### b) Maximum Length (`description-max-length`)
- Must be no longer than 30 characters.
- Example of incorrect format:
  - `feat-PROJ-1234(auth): This is an extremely long commit message description that exceeds the limit` ❌

## Summary
| Rule | Description | Example of Incorrect Format |
|------|------------|----------------------------|
| `header-format` | Enforces the commit message pattern | `fix: resolve login issue` |
| `type-empty` | Ensures `type` is not empty | `-PROJ-1234(auth): Fix issue` |
| `type-enum` | Restricts `type` to allowed values | `update-PROJ-1234(auth): Improve functionality` |
| `ticket-key-format` | Ensures `ticketKey` is uppercase (max 7 chars) | `fix-proj-1234(auth): Fix bug` |
| `ticket-number-format` | Ensures `ticketNumber` is numeric only | `fix-PROJ-ABC(auth): Fix issue` |
| `moduleName-format` | Ensures `moduleName` is lowercase and valid | `feat-PROJ-1234(AUTH): Add authentication` |
| `description-min-length` | Minimum 10 characters for `description` | `fix-PROJ-1234(auth): Short` |
| `description-max-length` | Maximum 30 characters for `description` | `feat-PROJ-1234(auth): Very long description exceeding limit` |

By following these rules, we ensure that commit messages are structured, readable, and maintainable. 🚀

