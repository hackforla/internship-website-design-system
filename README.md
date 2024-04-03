# Internship Design System

This design system is a project of _Hack for LA_. It helps teams customize and develop their websites and applications. This design system is meant to provide necessary web components and make them easy to customize.

### Technology used

- [GitHub Pages](https://pages.github.com/)
- [Jekyll](https://jekyllrb.com/docs/)
- [MK Docs](https://www.mkdocs.org/)
- [Material for MK Docs](https://squidfunk.github.io/mkdocs-material/)
- [SASS](https://sass-lang.com/)

# How to contribute

<!-- Explain the different ways people can contribute. For example: -->

- This is a project of _Hack for LA_, please [Join here](https://www.hackforla.org/join)
- Join the team on Slack on [#internship](https://hackforla.slack.com/archives/C01VAUPU788)

## Installation instructions

### Prerequisites

- Install [Docker](https://www.docker.com/get-started) on your machine.

### Setting up the development environment

1. Fork and Clone this Repository (see **Working with forks and branches** below)
   `git clone <your-forked-repository-url>`
   `cd <repository-name>`
2. Build the Docker image. `docker build -t mkdocs-site .`
   This command builds a Docker image named `mkdocs-site` from the Dockerfile in the current directory.
3. Run the Docker container.
   `docker run -p 8000:8000 mkdocs-site`
   This command runs the `mkdocs-site` image as a container and maps the container's port 8000 to port 8000 on your host machine, allowing you to access the MkDocs server.

4. View the site by navigating to `http://localhost:8000` in your web browser.

You should see your MkDocs site being served from the Docker container.

### Notes

- If you make changes to the documentation source files, you will need to rebuild the Docker image to see the changes.
- If the default port (8000) is already in use on your machine, you can map the container's port to a different port on your host machine by changing the first `8000` in the `docker run` command to a free port, e.g., `docker run -p 8001:8000 mkdocs-site`.
  -If you get a `ERROR [internal] load metadata for docker.io/library/python:3.8-slim ` error run `docker pull python:3.8-slim`

### Working with issues

<!-- - Explain how to submit a bug.
- Explain how to submit a feature request.
- Explain how to contribute to an existing issue. -->

To create a new issue, please use the blank issue template (available when you click "New Issue"). If you want to create an issue for other projects to use, please create the issue in your own repository and send a slack message to one of your hack night hosts with the link.

### Working with forks and branches

- **Forks**: Personal copies of other repositories.

To fork this repository, click the "Fork" button at the top of the repository. Then, clone your fork in the desired directory on your machine with:

```bash
git clone https://github.com/{YOUR-GITHUB-HANDLE}/internship-website-design-system.git
```

After you've cloned your fork onto your local machine, it's important to check that the local repository is correctly linked to your fork on GitHub. This means verifying the `origin` URL points to your forked repository. Follow these steps to ensure your setup is correct:

```bash
git remote -v
```

You should see `fetch` and `push` URLs with links to your forked repository under your account.

To synchronize your local repository with the original project repository, it's essential to track changes made to the main project. Achieve this by adding an "upstream" remote, which points to the main project's repository. Execute the command below to add the upstream remote URL. Following that, update your local repository with the latest changes from the `hackforla` project repository:

```bash
git remote add upstream https://github.com/hackforla/internship-website-design-system
git fetch upstream
```

Now, verify that your local repo contains both **origin** and **upstream** remote URLs with `git remote -v`. You should see:

```bash
origin  https://github.com/{YOUR-GITHUB-HANDLE}/internship-website-design-system.git (fetch)
origin  https://github.com/{YOUR-GITHUB-HANDLE}/internship-website-design-system.git (push)
upstream        https://github.com/hackforla/internship-website-design-system.git (fetch)
upstream        https://github.com/hackforla/internship-website-design-system.git (push)
```

- **Branches**: a separate line of development created to work on new features or fixes independently from the main codebase.

When working in your fork, feature development/fixes should occur in dedicated branches rather than the `main` branch.

Once you have a feature/issue that you understand and are ready to work on:

- Ensure your fork remains current by updating it with the latest changes from the original repository (the **upstream**).

  ```bash
  git pull upstream main
  ```

- Create a new branch

  ```bash
  git checkout -b new-feat-branch
  ```

- Make changes and review changed files with

  ```bash
  git status
  ```

- Add `git add <file_name>`, Commit `git commit -m "{message}"`, and Push `git push -u origin new-feat-branch` changes when ready.

For more information please refer to ["Git feature branch workflow"](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow#:~:text=The%20core%20idea%20behind%20the,without%20disturbing%20the%20main%20codebase).

### Working with pull requests and reviews

- Branches make **code reviews** possible through **pull requests** (PR).

After pushing your branch to the fork, navigate to the [original repository](https://github.com/hackforla/internship-website-design-system) on GitHub. You'll see an option to **"Compare & pull request"** for the branch you've just updated. Follow the prompts to submit your pull request for review.

### Testing

- Run the site locally with `mkdocs serve` and navigate to `http://localhost:8000` in your web browser.
- Observe visual changes for desktop sized screens as well as mobile.

# Contact info

- Message the team on Slack: [#internship](https://hackforla.slack.com/archives/C01VAUPU788)

### Licensing

Include details about the project's open source status.

_this readme file sourced from [Jessica Sand](http://jessicasand.com/other-stuff/just-enough-docs/)_
