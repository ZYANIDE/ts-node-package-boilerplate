# TypeScript Node Package Boilerplate

<br/><br/>

<p align="center">
    <img alt="TypeScript Logo" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" height="200px"></img>
    <font size="42">&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;</font>
    <img alt="NPM Logo" src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" height="150px"></img>
</p>

<br/>

<p align="center">
    A <a href="https://github.com/{{github_username}}/{{repository}}">TypeScript Node Package boilerplate</a> for a quick and easy start of a new package
</p>

<p align="center">
    <img alt="GitHub package.json version (branch)" src="https://img.shields.io/github/package-json/v/zyanide/ts-node-package-boilerplate/main">
    <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/zyanide/ts-node-package-boilerplate">
    <img alt="GitHub" src="https://img.shields.io/github/license/zyanide/ts-node-package-boilerplate">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/zyanide/ts-node-package-boilerplate">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/zyanide/ts-node-package-boilerplate">
</p>

## Features

* [Github Action][github-action] NPM-Publish workflow (with [commitizen][commitizen] & [semantic-release][semantic-release])
* [Husky][husky] Git Hooks
  * Auto format/lint
  * Auto-build
  * Autotest
* [README.md][readme], [CONTRIBUTING.md][contribute] and [SECURITY.md][security] templates
* Preconfigured [Jest][jest], [Prettier][prettier] & [ESLint][eslint]
* TypeScript ready
* TypeScript [playground](#usage-playground)

## Table of Contents

* [Getting Started](#getting-started)
* [Usage](#usage)
  * [Playground](#usage-playground)
  * [Commit](#usage-commit)
  * [Releases](#usage-releases)
  * [Scripts](#usage-scripts)
* [License](#license)

## <a name="getting-started"></a> Getting Started

To quickly get started you can go to [Github][github] and create a [new repository][new-repo].

Now clone this project and connect it to your new repository:

```shell
git clone https://github.com/ZYANIDE/ts-node-package-boilerplate.git <new_repository_name>
cd <new_repository_name>
git remote set-url origin <new_repository_clone_url>
```

Now you're ready to install the packages:

```shell
npm ci
```

Now before you push everything to your own repository, you'll need to replace some placeholders inside
[README.md][readme], [CONTRIBUTING.md][contribute], [SECURITY.md][security], [jest.config.ts][jest-config] and [tsconfig.json][tsconfig].<br/>
These placeholders are easily spotted due to their `{{ MUSTACHE }}` notation.<br/>
You'll also need update the `package.json` with the correct values for:
`name`, `version`, `description`, `author`, `private`, `homepage`, `repository`, `bugs`, `keywords` and `license`.

> Note: Also change the `LICENSE` file to the correct license mentioned in the package.json containing the correct copyright **year** and **owner**.

To enable get `semantic-release` working for the auto releases, see their [Getting Started Guide][semantic-release-getting-started].

> Note: Make sure that your repository has **read** and **write** permissions for Github action worksflows.<br/>
> You can change these permissions at your repository `settings` > `actions` > `General` > `Workflow permissions`.

Now you can push your new repository to Github:

```shell
git add .

npm run commit
# Choose the 'feature' commit type from commitizen
# scope: 'project'
# subject: 'initial commit'

git branch -M main
git push -u origin main
```

For best practices, it is recommended to create a second branch called `test` from `main` which will be the repositories default.<br/>
They will both receive branch protection.

Due to the Github Action workflow: `NPM-Publish`, a new release will be automatically created whenever new code is pushed to the main branch and it passes the quality job inside the workflow.

## <a name="usage"></a> Usage

### <a name="usage-playground"></a> Playground

The `playground` folder can be used as playground for testing your package
and due to the package name set in the `tsconfig.json` under `compilerOptions.paths` and `jest.config.ts` under `moduleNameMapper`
you can import the package in the `playground` folder as if it was installed via the npm registry.

The `playground` folder is included in the `.gitignore` file so it won't be pushed to the repository.

To see how run the playground, see [run-playground-scripts](#run-playground-scripts).

### <a name="usage-commit"></a> Commit

To ensure quality in commit messages, there is a Git hook guard to validate that the commit message is a valid format.
There are also pre-commit hooks to ensure the package is formatted, linted and rebuild. This is done with the help of [husky][husky].

You can easily create a valid commit message using the following command which uses [commitizen][commitizen]:

```
npm run commit
```

### <a name="usage-releases"></a> Releases

Releases are automatically generated with the help of the [Github Action][github-action] `NPM-Publish` and [semantic-release][semantic-release].
The only requirement to release a new package is to push to the branch `main`.

Make sure you setup `semantic-release` first with their [Getting Started Guide][semantic-release-getting-started].

> Note: Because all it takes for a new release is a push to the branch `main`, it is recommended that you create a branch called `test` which will be the default branch of the repository so you won't accidentally create a new release.

### <a name="usage-scripts"></a> Scripts

This boilerplate contains 8 predefined scripts with some variations.

#### Prepare script

The [prepare script](https://docs.npmjs.com/cli/v9/using-npm/scripts#prepare-and-prepublish) is a `npm@4.0.0+` feature which will run automatically upon a npm install command.<br/>
This will automatically install [husky][husky].

#### semantic-release script

#### commit script

This script will call [commitizen][commitizen] which will automatically create a valid formatted commit message with the users input.
This will make it easier for the user to create commits.

```shell
npm run commit
```

#### format scripts

This script enforces syntax rules upon the code. This is done with the help of [Prettier][prettier].<br/>
It has two variations: One will correct the syntax errors if any are made.

```shell
npm run format
```

The other will only check if the code adheres to the syntax rules.

```shell
npm run format:check
```

#### lint script

This script enforces code rules. It will check for things like unused variables or variables which could be defined as a constant.
This is done with the help of [ESLint][eslint]

```shell
npm run lint
```

#### build script

This script has multiple subcommands. But the main command is responsible for building the package present in the `src` folder into the `dist` folder.

```shell
npm run build
```

The `package.json` is predefined to set the package entry file to `dist/index.js` for logic and `dist/index.d.ts` for types.
This requires that the user uses the `src/index.ts` file as entry file.
All the exports of the package are automatically generated with the help of [create-ts-index][create-ts-index].

```shell
npm run prebuild      # removes all autogenerated files of the current build
npm run build:export  # generates the 'src/export.ts' file containing all the exports of the package
npm run build:dist    # generates the actual build inside the 'dist' folder
npm run build:stage   # adds the build to the git staging, so it will also be pushed with the srs-code changes
```

#### test scripts

Test scripts are used to test the package. This is done with the help of [jest][jest].

```shell
npm run test
```

There are three variations of this script:

```shell
npm run test:ci     # this test command will be used by the CI pipeline
npm run test:watch  # this will retest your package upon changes in the code/test
npm run test:cov    # this will log and generate a file of the test results (coverage report)
```

#### <a name="run-playground-scripts"></a> run playground scripts

Often when developing packages, you'll need to check if it works as desires.
The _run playground_ scripts are used to run code from the `playground/main.ts` file. Here you can test the package as if in a playground
and due to the package name set in the `tsconfig.json` under `compilerOptions.paths` and `jest.config.ts` under `moduleNameMapper`
you can import the package in the `playground` folder as if it was installed via the npm registry.

This will be run using [ts-node][ts-node] and is watched using [nodemon][nodemon].

```shell
npm run playground       # run the `playground/main.ts` file
npm run playground:watch # run the `playground/main.ts` file and rerun upon code changes
```

## <a name="license"></a> License

`ts-node-package-boilerplate` is **[MIT licensed][license]**.

[new-repo]: https://github.com/new
[github]: https://github.com/
[repo]: https://github.com/ZYANIDE/ts-node-package-boilerplate
[changelog]: CHANGELOG.md
[contribute]: CONTRIBUTING.md
[readme]: README.md
[security]: SECURITY.md
[license]: LICENSE
[jest-config]: jest.config.ts
[tsconfig]: tsconfig.json
[commitizen]: https://www.npmjs.com/package/commitizen
[husky]: https://typicode.github.io/husky/
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[semantic-release]: https://www.npmjs.com/package/semantic-release
[semantic-release-getting-started]: https://github.com/semantic-release/semantic-release/blob/master/docs/usage/getting-started.md#getting-started
[jest]: https://jestjs.io/
[github-action]: https://github.com/features/actions
[create-ts-index]: https://www.npmjs.com/package/create-ts-index
[ts-node]: https://www.npmjs.com/package/ts-node
[nodemon]: https://nodemon.io/