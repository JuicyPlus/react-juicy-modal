# Contribution guidelines

### When reporting a bug, please be sure to include the following:

- [ ] A descriptive title
- [ ] What version of `react-juicy-modal` you're using
- [ ] What packages or other dependencies you're using
- [ ] The behavior you expect to see, and the actual behavior

### When you open an issue for a feature request, please add as much detail as possible:

- [ ] A descriptive title
- [ ] A description of the problem you're trying to solve, including _why_ you think this is a problem
- [ ] An overview of the suggested solution
- [ ] If the feature changes current behavior, reasons why your solution is better

### Please note by far the quickest way to get a new feature is to file a Pull Request.

### Commit

If your patch changes the API or fixes a bug please use one of the following prefixes in your commit subject:

- `fix: ...`
- `feat: ...`
- `remove: ...`

Describe the work that was done, not what problem there is.

- `fix:close button is not working`(X)
- `fix:rename close button’s prop name` (O)

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

### Branch

Use the main / feature branches.
For the feature branch, use an English lowercase name with hyphens (-) for specific expression.

Example: feature/what-is-this-branch

(Hyphens are based on spaces in the description.)

Consider the need for development and hotfix branches later.

### Suggestions

The team's contribution guide might not be perfect yet.
Please feel free to suggest improvements via ISSUES :)
