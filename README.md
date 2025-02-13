# Commit Message Standard - Guidelines and Rules

This document outlines the commit message format enforced by `commitlint.config.js`. All commit messages must follow a structured format to ensure consistency, clarity, and traceability.

## Commit Message Format

Each commit message must follow this pattern:

```
<type>-<ticketKey>-<ticketNumber>(<moduleName>): <description>
```

## Components of the Commit Message:
- **type**: Specifies the purpose of the commit (e.g., feature addition, bug fix, documentation update, etc.)
- **ticketKey**: The type of Jira ticket(uppercase characters, max 7 characters) representing the project key.(e.g., CA, CAA, LOSF, LV, etc.)
- **ticketNumber**: A numeric value representing the ticket number.
- **moduleName**: A lowercase string representing the module affected by the change.
- **description**: A brief summary of the change.

## Example Commit Messages:
```
feat-LV-1234(sprd): Add OAuth support
fix-LOSF-5678(loan): Resolve navbar rendering issue
```

## moduleName shorthands:

##### 1. Admin : admn
##### 2. Approval : 
##### 3. Audit : 
##### 4. Auth : 
##### 5. Auto Decision : 
##### 6. Collateral : coll
##### 7. Covenant : cove
##### 8. Credit Availability : 
##### 9. Customer Portal : custp
##### 10. Dashboard : dash
##### 11. Exception : exce
##### 12. Exposure : expo
##### 13. File Manager : file
##### 14. File Mapping : 
##### 15. Flexi Form : flex
##### 16. Form Template : 
##### 17. Loan Auto Decision : 
##### 18. Loan Pipeline : 
##### 19. Loan : loan
##### 20. Relationship : reln
##### 21. Risk Rating : rskr
##### 22. Search : 
##### 23. Spreading : sprd
##### 24. Support : 


## Commit Types

Commit types are based on the Conventional Commits specification, which helps maintain a structured and readable commit history. Below is a breakdown of each type and when to use them.

1️⃣ **feat**: 🚀 (Feature)
   - **Purpose**: Introduces a new feature or functionality.
   - **Impact**: If you're using semantic versioning, this will result in a minor version bump (e.g., 1.1.0 → 1.2.0).
   - **Example**:
     ```sh
     git commit -m "feat-CA-1234(file): Add user authentication with JWT"
     ```

2️⃣ **fix**: 🐛 (Bug Fix)
   - **Purpose**: Fixes a bug in the code.
   - **Impact**: If you're using semantic versioning, this results in a patch version bump (e.g., 1.1.0 → 1.1.1).
   - **Example**:
     ```sh
     git commit -m "fix-LOSF-5678(admn): Resolve login button not working on mobile"
     ```

3️⃣ **chore**: 🛠 (Maintenance Tasks)
   - **Purpose**: Updates dependencies, config files, or other project setup tasks that don’t affect the application logic.
   - **Example**:
     ```sh
     git commit -m "chore-LV-4321(othr): Update dependencies to latest stable versions"
     ```

4️⃣ **build**: 🏗 (Build System Changes)
   - **Purpose**: Changes related to the build system (e.g., webpack, rollup, npm scripts).
   - **Example**:
     ```sh
     git commit -m "build-CA-6789(othr): Update webpack config for production optimization"
     ```

5️⃣ **ci**: 🤖 (Continuous Integration)
   - **Purpose**: Changes to CI/CD configuration (e.g., GitHub Actions, Jenkins, Travis CI).
   - **Example**:
     ```sh
     git commit -m "ci-CA-2222(othr): Add GitHub Actions for automated testing"
     ```

6️⃣ **docs**: 📖 (Documentation)
   - **Purpose**: Changes to documentation only (e.g., README updates, API docs).
   - **Example**:
     ```sh
     git commit -m "docs-LOSF-1357(othr): Update API usage in README"
     ```

7️⃣ **style**: 🎨 (Code Style)
   - **Purpose**: Changes that do not affect functionality (e.g., formatting, linting, spacing, missing semicolons).
   - **Example**:
     ```sh
     git commit -m "style-CAA-9876(custp): Reformat code using Prettier"
     ```

8️⃣ **refactor**: 🔄 (Refactoring Code)
   - **Purpose**: Code changes that improve readability/maintainability but don’t add features or fix bugs.
   - **Example**:
     ```sh
     git commit -m "refactor-CA-7654(sprd): Improve function modularity for better reuse"
     ```

9️⃣ **perf**: ⚡ (Performance Improvements)
   - **Purpose**: Code changes that optimize performance.
   - **Example**:
     ```sh
     git commit -m "perf-LV-5432(memo): Optimize database queries for faster page load"
     ```

🔟 **test**: ✅ (Adding or Updating Tests)
   - **Purpose**: Adding new test cases or modifying existing ones (e.g., unit tests, integration tests).
   - **Example**:
     ```sh
     git commit -m "test-CAA-7890(rskr): Add unit tests for authentication service"
     ```

🔙 **revert**: ⏪ (Reverting a Commit)
   - **Purpose**: Undoing a previous commit.
   - **Example**:
     ```sh
     git commit -m "revert-CA-1111(expo): Revert commit 123abc due to breaking changes"
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
- Expected pattern: `<type>-<ticketKey>-<ticketNumber>(<moduleName>): <description>`
- Example of incorrect format:
  - `fix: resolve login issue` ❌
  - `feat-LV-1234-sprd Add new feature` ❌

##### 5. Type Rules
###### a) Type Required (`type-empty`)
- The `type` field is mandatory.
- Example of incorrect format:
  - `-LOSF-1234(cove): Fix issue` ❌

###### b) Type Enumeration (`type-enum`)
- Allowed types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `revert`.
- Example of incorrect format:
  - `update-PROJ-1234(exce): Improve functionality` ❌ (Invalid type `update`)

##### 6. Ticket Key Rules (`ticket-key-format`)
- Must be uppercase letters only.
- Cannot exceed 7 characters.
- Example of incorrect format:
  - `fix-losf-1234(loan): Fix bug` ❌ (Lowercase `losf`)
  - `feat-COMMONACTIVITIES-1234(sprd): Add feature` ❌ (More than 7 characters)

##### 7. Ticket Number Rules (`ticket-number-format`)
- Must be numeric only.
- Example of incorrect format:
  - `fix-LOSF-ABC(auth): Fix issue` ❌ (Non-numeric ticket number)

##### 8. Module Name Rules (`moduleName-format`)
- Must be lowercase letters only.
- Allowed module names: `admn`, `coll`, `cove`, `exce`, `expo`, `file`, `flex`, `memo`, `onbd`, `rskr`, `sprd`, `test`.
- Example of incorrect format:
  - `feat-LOSF-1234(ADMN): Add authentication` ❌ (Uppercase `ADMN`)
  - `feat-LOSF-1234(authx): Add authentication` ❌ (`authx` is not in the allowed list)

##### 9. Description Rules
###### a) Minimum Length (`description-min-length`)
- Must be at least 10 characters long.
- Example of incorrect format:
  - `fix-LOSF-1234(sprd): Short` ❌

###### b) Maximum Length (`description-max-length`)
- Must be no longer than 50 characters.
- Example of incorrect format:
  - `feat-LOSF-1234(loan): This is an extremely long commit message description that exceeds the limit` ❌

### Summary
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

## ✅ Best Practices

- **Always use lowercase types:**  
  ✅ `feat-CAA-9876(sprd): add dark mode`  
  ❌ `Feat-CAA-9876(sprd): Add Dark Mode`
- **Keep commit messages short and descriptive.**
- **Separate multiple changes into separate commits.**