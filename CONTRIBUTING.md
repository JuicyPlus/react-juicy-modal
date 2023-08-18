# Contribution guidelines

You can also become a contributor to our project.🙂</br>
Please follow the instructions below.

### 🍏 Steps to write a commit message.

If your patch changes the API or fixes a bug please use one of the following prefixes in your commit subject:

- `fix: ...`
- `feat: ...`
- `remove: ...`

Describe the work that was done, not what problem there is.

- `fix: close button is not working`(X)
- `fix: rename close button’s prop name`(O)

Follow the rules presented in 🔗Conventional Commits:

- Commits of the type fix patch a bug in the codebase (related to [PATCH](http://semver.org/#summary) in semantic versioning).
- Commits of the type feat: introduce a new feature to the codebase ([MINOR](http://semver.org/#summary) in semantic versioning).
- Commits with BREAKING CHANGE: introduce changes that break the API ([MAJOR](http://semver.org/#summary) in semantic versioning).

  - By adding ! after type/scope
  - Or including BREAKING CHANGE: in the footer.
  - Examples:

    ```
    feat!: send an email to the customer when a product is shipped
    ```

    ```
    feat: allow provided config object to extend other configs

    BREAKING CHANGE: `extends` key in config file is now used for extending other config files
    ```

- Besides fix:feat:, you can use build:, chore:, ci:, docs:, style:, refactor:, perf:, test: (See @commitlint/config-conventional and Angular guidelines)
- The footer can provide additional information, and follows a rule similar to git trailer format.
  - A scope may be provided to give additional context and is enclosed in parentheses.
  - Example: feat(parser): add ability to parse arrays

### 🍉 Template

- [ISSUES](.github/ISSUE_TEMPLATE/bug_report.md)
- [PULL REQUEST](.github/PULL_REQUEST_TEMPLATE.md)

### 🍅 Branch

Use the main / feature branches.</br>
For the feature branch, use an English lowercase name with hyphens (-) for specific expression.

Example: feature/what-is-this-branch

(Hyphens are based on spaces in the description.)

Consider the need for development and hotfix branches later.

### 🍇 Suggestions

The team's contribution guide might not be perfect yet.
Please feel free to suggest improvements via ISSUES :)
