# Commit Message Standard - Guidelines and Rules

This document outlines the commit message format enforced by `commitlint.config.js`. All commit messages must follow a structured format to ensure consistency, clarity, and traceability.

## Commit Message Format

Each commit message must follow this pattern:

```
<type>: <ticketKey>-<ticketNumber> <description>
```

## Components of the Commit Message:
- **type**: Specifies the purpose of the commit (e.g., feature addition, bug fix, documentation update, etc.)
- **ticketKey**: The type of Jira ticket(uppercase characters, max 7 characters) representing the project key.(e.g., CA, CAA, LOSF, LV, etc.)
- **ticketNumber**: A numeric value representing the ticket number.
- **description**: A brief summary of the change.

## Example Commit Messages:
```
feat: LV-1234 Add OAuth support
fix: LOSF-5678 Resolve navbar rendering issue
```

## Commit Types

Commit types are based on the Conventional Commits specification, which helps maintain a structured and readable commit history. Below is a breakdown of each type and when to use them.

1️⃣ **feat**: 🚀 (Feature)
   - **Purpose**: Introduces a new feature or functionality.
   - **Impact**: If you're using semantic versioning, this will result in a minor version bump (e.g., 1.1.0 → 1.2.0).
   - **Example**:
     ```sh
     git commit -m "feat: CA-1234 Add user authentication with JWT"
     ```

2️⃣ **fix**: 🐛 (Bug Fix)
   - **Purpose**: Fixes a bug in the code.
   - **Impact**: If you're using semantic versioning, this results in a patch version bump (e.g., 1.1.0 → 1.1.1).
   - **Example**:
     ```sh
     git commit -m "fix: LOSF-5678 Resolve login button not working on mobile"
     ```

3️⃣ **chore**: 🛠 (Maintenance Tasks)
   - **Purpose**: Updates dependencies, config files, or other project setup tasks that don’t affect the application logic.
   - **Example**:
     ```sh
     git commit -m "chore: LV-4321 Update dependencies to latest stable versions"
     ```

4️⃣ **build**: 🏗 (Build System Changes)
   - **Purpose**: Changes related to the build system (e.g., webpack, rollup, npm scripts).
   - **Example**:
     ```sh
     git commit -m "build: CA-6789 Update webpack config for production optimization"
     ```

5️⃣ **ci**: 🤖 (Continuous Integration)
   - **Purpose**: Changes to CI/CD configuration (e.g., GitHub Actions, Jenkins, Travis CI).
   - **Example**:
     ```sh
     git commit -m "ci: CA-2222 Add GitHub Actions for automated testing"
     ```

6️⃣ **docs**: 📖 (Documentation)
   - **Purpose**: Changes to documentation only (e.g., README updates, API docs).
   - **Example**:
     ```sh
     git commit -m "docs: LOSF-1357 Update API usage in README"
     ```

7️⃣ **style**: 🎨 (Code Style)
   - **Purpose**: Changes that do not affect functionality (e.g., formatting, linting, spacing, missing semicolons).
   - **Example**:
     ```sh
     git commit -m "style: CAA-9876 Reformat code using Prettier"
     ```

8️⃣ **refactor**: 🔄 (Refactoring Code)
   - **Purpose**: Code changes that improve readability/maintainability but don’t add features or fix bugs.
   - **Example**:
     ```sh
     git commit -m "refactor: CA-7654 Improve function modularity for better reuse"
     ```

9️⃣ **perf**: ⚡ (Performance Improvements)
   - **Purpose**: Code changes that optimize performance.
   - **Example**:
     ```sh
     git commit -m "perf: LV-5432 Optimize database queries for faster page load"
     ```

🔟 **test**: ✅ (Adding or Updating Tests)
   - **Purpose**: Adding new test cases or modifying existing ones (e.g., unit tests, integration tests).
   - **Example**:
     ```sh
     git commit -m "test: CAA-7890 Add unit tests for authentication service"
     ```

🔙 **revert**: ⏪ (Reverting a Commit)
   - **Purpose**: Undoing a previous commit.
   - **Example**:
     ```sh
     git commit -m "revert: CA-1111 Revert commit 123abc due to breaking changes"
     ```

### Summary Table

| Type      | Purpose                                      |
|-----------|----------------------------------------------|
| `feat:`   | Add a new feature                           |
| `fix:`    | Fix a bug                                  |
| `chore:`  | Maintenance, dependencies, no code changes |
| `build:`  | Changes to the build system (e.g., webpack, npm) |
| `ci:`     | CI/CD automation (e.g., GitHub Actions, Travis CI) |
| `docs:`   | Documentation updates only                 |
| `style:`  | Code formatting, linting, no logic changes |
| `refactor:` | Code restructuring, improving readability |
| `perf:`   | Performance optimization                   |
| `test:`   | Adding or updating tests                   |
| `revert:` | Undoing a commit                           |

### 🎯 Why Use These Types?

- **Consistent commit history** → Easier to understand past changes.
- **Semantic versioning compatibility** → Helps automate version bumps (`feat` → minor, `fix` → patch).
- **Better collaboration** → Team members instantly understand the type of change.

## Enforced Rules
##### 1. All components of the commit message are mandatory.

##### 2. Any component should not contain any whitespace characters before or after.

##### 3. A description MUST immediately follow the colon and space after the (moduleName).

##### 4. Header Format (`header-format`)
- Ensures the commit message adheres to the required format.
- Expected pattern: `<type>: <ticketKey>-<ticketNumber> <description>`
- Example of incorrect format:
  - `fix: resolve login issue` ❌
  - `feat-LV-1234 Add new feature` ❌

##### 5. Type Rules
###### a) Type Required (`type-empty`)
- The `type` field is mandatory.
- Example of incorrect format:
  - `-LOSF-1234 Fix issue` ❌

###### b) Type Enumeration (`type-enum`)
- Allowed types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `revert`.
- Example of incorrect format:
  - `update-LOSF-1234 Improve functionality` ❌ (Invalid type `update`)

##### 6. Ticket Key Rules (`ticket-key-format`)
- Must be uppercase letters only.
- Cannot exceed 7 characters.
- Example of incorrect format:
  - `fix: losf-1234 Fix bug` ❌ (Lowercase `losf`)
  - `feat: COMMONACTIVITIES-1234 Add feature` ❌ (More than 7 characters)

##### 7. Ticket Number Rules (`ticket-number-format`)
- Must be numeric only.
- Example of incorrect format:
  - `fix: LOSF-ABC Fix issue` ❌ (Non-numeric ticket number)

##### 8. Description Rules
###### a) Minimum Length (`description-min-length`)
- Must be at least 10 characters long.
- Example of incorrect format:
  - `fix: LOSF-1234 Short` ❌

###### b) Maximum Length (`description-max-length`)
- Must be no longer than 50 characters.
- Example of incorrect format:
  - `feat: LOSF-1234 This is an extremely long commit message description that exceeds the limit` ❌

###### c) Multiple Spaces (`description-no-multiple-spaces`)
- Ensure only single spaces between words in the description.
- Example of incorrect format:
  - `fix: LOSF-1234 Multiple  spaces  in  between  words.` ❌

### Summary
| Rule | Description | Example of Incorrect Format |
|------|------------|----------------------------|
| `header-format` | Enforces the commit message pattern | `fix: resolve login issue` |
| `type-empty` | Ensures `type` is not empty | `: LOSF-1234 Fix issue` |
| `type-enum` | Restricts `type` to allowed values | `update: LOSF-1234 Improve functionality` |
| `ticket-key-format` | Ensures `ticketKey` is uppercase (max 7 chars) | `fix: losf-1234 Fix bug` |
| `ticket-number-format` | Ensures `ticketNumber` is numeric only | `fix: LOSF-ABC Fix issue` |
| `moduleName-format` | Ensures `moduleName` is lowercase and valid | `feat: LOSF-1234 Add authentication` |
| `description-min-length` | Minimum 10 characters for `description` | `fix: LOSF-1234 Short` |
| `description-max-length` | Maximum 30 characters for `description` | `feat: LOSF-1234 Very long description exceeding limit` |
| `description-no-multiple-spaces` | Restricts multiple spaces in between words for `description` | `fix: LOSF-1234 Multiple  spaces  in  between  words.` |

By following these rules, we ensure that commit messages are structured, readable, and maintainable. 🚀

## ✅ Best Practices

- **Always use lowercase types:**  
  ✅ `feat: LV-9876 add dark mode`  
  ❌ `Feat: CAA-9876 Add Dark Mode`
- **Keep commit messages short and descriptive.**
- **Separate multiple changes into separate commits.**
