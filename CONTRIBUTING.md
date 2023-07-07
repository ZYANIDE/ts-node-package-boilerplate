# Contributing to {{packagename}}

* [Question or Problem?](#question)
* [Issues and Bugs](#issue)
* [Feature Requests](#feature)
* [Submission Guidelines](#submit)
* [Development Setup](#development)
* [Coding Rules](#coderules)
* [Commit Message Guidelines](#commit)

## <a name="question"></a> Got a Question or a Problem?

{{ what should users do if they got a question or problem? }}
</br>
{{ when should users reach out and where reach out to? }}

## <a name="issue"></a> Found a bug?

If you find a bug in the source code, you can help us by
[submitting an issue](#submit-issue) to our [GitHub Repository][github]. Even better, you can
[submit a Pull Request](#submit-pr) with a fix.

## <a name="feature"></a> Missing a feature?

You can _request_ a new feature by [submitting an issue](#submit-issue) to our GitHub
Repository. If you would like to _implement_ a new feature, please submit an issue with
a proposal for your work first, to be sure that we can use it.
Please consider what kind of change it is:

## <a name="submit"></a> Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue

Before you submit an issue, please search the issue tracker,
maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it.
In order to reproduce bugs we will systematically ask you to provide a minimal reproduction scenario using a repository or [Gist](https://gist.github.com/).
Having a live, reproducible scenario gives us wealth of important information without going back & forth to you with additional questions like:

Unfortunately, we are not able to investigate / fix bugs without a minimal reproduction,
so if we don't hear back from you we are going to close an issue that doesn't have enough info to be reproduced.

You can file new issues by filling out our [new issue form][new-issue].

### <a name="submit-pr"></a> Submitting a Pull Request (PR)

{{ guidelines to follow when submitting a PR. }}

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

- Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

  ```shell
  git push origin --delete my-fix-branch
  ```

- Check out the master branch:

  ```shell
  git checkout master -f
  ```

- Delete the local branch:

  ```shell
  git branch -D my-fix-branch
  ```

- Update your master with the latest upstream version:

  ```shell
  git pull --ff upstream master
  ```

## <a name="development"></a> Development Setup

{{ Step by step guide on how to setup your development environment }}

## <a name="coderules"></a> Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

- All features or bug fixes **must be tested** by one or more specs (unit-tests).
- We follow [Google's JavaScript Style Guide][js-style-guide].<br/>An automated formatter (`npm run format`) and linter (`npm run lint`) is available .

## <a name="commit"></a> Commit Message Guidelines

We have very precise rules over how out git commit messages can be formatted. This leads to
**more readable messages** that are easy to follow when looking through the **project history**.
But also, we use the git commit messages to **generate the change log**.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer than 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

Footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

### Revert

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit.
In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **chore**: Updating tasks etc; no production code change
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests
- **sample**: A change to the samples

### Scope

The scope should indicate what file or component is affected in one word.

* **{{ scope 1 example }}**: {{ scope 1 reach defined }}
* **{{ scope 2 example }}**: {{ scope 2 reach defined }}
* **{{ scope 3 example }}**: {{ scope 3 reach defined }}

If multiple scopes are needed to specify the affected, seperate the scopes with a comma (e.g. `file,component`).


### Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

[github]: https://github.com/{{github_username}}/{{repository}}
[js-style-guide]: https://google.github.io/styleguide/jsguide.html
[new-issue]: https://github.com/{{github_username}}/{{repository}}/issues/new