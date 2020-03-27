# SOFTPLAN-UI-REACT

## Installation

1. Install vscode

2. Install node v10.x (recommended)
   `nvm instal 10.16.0`

3. Install dependencies
   `npm install`

4. Run project on develop mode
   `npm run start`

## Use

1. In the search engine search by Hero

2. In the search engine perform empty search get all the Heroes.

3. Click on any card to see details of the Hero.

4. In the edit section, select Hero and edit its name or description.

## Test

-   All tests:
    `npm run test`

-   Update snapshots:
    `npm run test:update`

-   Individual test:
    `npm run test somePattern.test`

## Build

A. `npm run build`
B. `npm run build:monitor` (to open webpack monitor)

Output folder: _dist/_

### Conventions

Look at [conventions.md](./conventions.md)

### Changelog

Look at [changelog.md](./changelog.md)

### Resources Links

[Testing Library API](https://testing-library.com/)
[React Boostrap](https://react-bootstrap.github.io/getting-started/introduction/)
[Jest Expect API](https://jestjs.io/docs/en/expect)
[Marvel API](https://developer.marvel.com/docs#)

## Miscellaneous

In this file [.gitignore](./gitignore) are configure with git repo!

### Recommended dev tooling extensions

##### React Developer Tools

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

### Recommended IDE extensions

#### VS Code

1. [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
2. [TypeScript TSLint Plugin](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

#### The CI/CD GitLab pipeline

2. [GitLab Project Pipeline](https://gitlab.com/angelbrunn/softplan-ui)
