
# How to Contribute
The following is a set of guidelines for contributing to the **Tech Work Experience (TWE) Design System** respository, hosted on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in the form of a pull request.

*The guide below assumes that you have completed the onboarding process, including: joining the Hack for LA Slack, GitHub, and Google Drive; as well as having been matched with the TWE team. If you have not been onboarded, please refer to the [Getting Started Page](https://www.hackforla.org/getting-started).*

If you need a text editor to work on code, VS Code is recommended by the team, but feel free to use a text editor of your choice.

**If you have any other questions about contributing, feel free to reach out to the team in the [#internship](https://hackforla.slack.com/archives/C01VAUPU788) Slack channel.**

## **Table of Contents**
- [How to Contribute](#how-to-contribute)
  - [**Table of Contents**](#table-of-contents)
  - [Setting up the development environment](#setting-up-the-development-environment)
    - [Prerequisites](#prerequisites)
      - [**1. Join the repository team**](#1-join-the-repository-team)
      - [**2. Installing Git**](#2-installing-git)
      - [**3. Installing Docker**](#3-installing-docker)
        - [**Docker installation troubleshooting**](#docker-installation-troubleshooting)
    - [**Setup instructions**](#setup-instructions)
      - [1. **Fork and Clone this repository**](#1-fork-and-clone-this-repository)
      - [2. **Starting the Development Environment**](#2-starting-the-development-environment)
      - [3. **Stopping Docker**](#3-stopping-docker)
      - [4. **Development Workflow**](#4-development-workflow)
      - [Docker Development Notes:](#docker-development-notes)
  - [Working on issues](#working-on-issues)
  - [Create an issue](#create-an-issue)
  - [Branch Workflow](#branch-workflow)
  - [Working with pull requests and reviews](#working-with-pull-requests-and-reviews)
  - [Testing](#testing)
    - [Automated Accessibility Testing](#automated-accessibility-testing)
      - [Viewing Pa11y Test Results](#viewing-pa11y-test-results)
      - [Instructions to View the CSV File with Excel Viewer by GrapeCity:](#instructions-to-view-the-csv-file-with-excel-viewer-by-grapecity)
      - [Bypassing Pre-Commit Hooks](#bypassing-pre-commit-hooks)
    - [Running Accessibility Test Manually](#running-accessibility-test-manually)
  - [Resources](#resources)



## Setting up the development environment
### Prerequisites
#### **1. Join the repository team**
In the `#internship` Slack channel, send an introductory message with your GitHub handle/username asking to be added to the Hack for LA website GitHub repository (this repository).

NOTE: Once you have accepted the GitHub invite (comes via email or in your GitHub notifications), please do the following:
**NOTE:** Once you have accepted the GitHub invite (comes via email or in your GitHub notifications), **please do the following**:

1. Make your own Hack for LA GitHub organization membership public by following this [guide](https://help.github.com/en/articles/publicizing-or-hiding-organization-membership#changing-the-visibility-of-your-organization-membership).
2. Set up two-factor authentication on your account by following this [guide](https://docs.github.com/en/github/authenticating-to-github/configuring-two-factor-authentication).

<sub>[Back to Table of Contents](#table-of-contents)</sub>
***
#### **2. Installing Git**
Before cloning your forked repository to your local machine, you must have Git installed. You can find instructions for installing Git for your operating system [**here**](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). 

Please note that if you have a Mac the page offers several options (see other option, if you need to conserve hard drive space) including:

- an “easiest” option (this version is fine for use at hackforla): This option would take just over 4GB.
- a “more up to date” option (not required but optional if you want it): This option prompts you to go to install an 8GB package manager called Homebrew.
- Other option: If your computer is low on space, you can use this [tutorial](https://www.datacamp.com/community/tutorials/homebrew-install-use) to install XCode Command Tools and a lighter version of Homebrew and then install Git using this command: ```$ brew install git```  which in total only uses 300MB.

<sub>[Back to Table of Contents](#table-of-contents)</sub>
***
#### **3. Installing Docker**
Docker is the recommended approach to quickly getting started with local development. Docker helps create a local/offline version of the design system repo on your computer so you can test out your code before submitting a pull request.

The recommended installation method for your operating system can be found [here](https://docs.docker.com/install/). <strong><em>Feel free to reach out in the [Hack for LA Slack channel](https://hackforla.slack.com/archives/C4UM52W93/) if you have trouble installing docker on your system</em></strong>

More on using Docker and the concepts of containerization:

* [Get started with Docker](https://docs.docker.com/get-started/)

##### **Docker installation troubleshooting**

If you are on Windows and get 'You are not allowed to use Docker, you must be in the "docker-users" group' as an error message, the following wiki page is a guide for solving the issue: [Windows docker-users group error guide](https://github.com/hackforla/website/wiki/Add-local-user-accounts-to-the-docker-users-group-on-Windows-10).

If you are using [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install-win10) and finding a permission error when running `docker-compose up`, the issue might be caused by a version of Docker that relies on a buggy version of Go. In your terminal, run `docker version` to see which `Go version` is listed. Any version less than `go1.20.0` has a problem and indicates that your Docker needs to be updated.

<sub>[Back to Table of Contents](#table-of-contents)</sub>
***
### **Setup instructions**

#### 1. **Fork and Clone this repository**
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

   To synchronize your local repository with the original project repository, it's essential to track changes made to the main project. Achieve this by adding an "upstream" remote, which points to the main project's repository. Execute the command below to add the upstream remote URL. Following that, update your local repository with the         latest changes from the `hackforla` project repository:

   ```bash
   git remote add upstream https://github.com/hackforla/internship-website-design-system
   git fetch upstream
   ```
   Now, verify that your local repo contains both `origin` and `upstream` remote URLs with `git remote -v`. You should see:

   ```bash
   origin  https://github.com/{YOUR-GITHUB-HANDLE}/internship-website-design-system.git (fetch)
   origin  https://github.com/{YOUR-GITHUB-HANDLE}/internship-website-design-system.git (push)
   upstream        https://github.com/hackforla/internship-website-design-system.git (fetch)
   upstream        https://github.com/hackforla/internship-website-design-system.git (push)
   ```

#### 2. **Starting the Development Environment**

**IMPORTANT:** Make sure **Docker Desktop** is running on your computer before executing the commands below.

- #### **Navigate to the project directory:**
   ```bash 
   cd internship-website-design-system
   ```

- #### **Start the development environment:**
   ```bash
   docker compose up
   ```
   This command will:
   - Build the Docker image automatically
   - Install all npm dependencies
   - Compile Sass files initially
   - Start the Sass watcher for live CSS compilation
   - Start MkDocs server with live reload
   - Set up file watching for automatic updates

- #### **View the site:**
   Open your browser and navigate to: **http://localhost:8000**
   
   Both Sass changes and documentation changes will automatically reload in your browser.

- #### **Alternative Docker Commands:**
   ```bash
   # Start in background (detached mode)
   docker compose up -d
   
   # Build fresh and start
   docker compose up --build
   
   # View logs while running in background
   docker compose logs -f
   
   # Check container status
   docker compose ps
   ```
   
#### 3. **Stopping Docker**
- **If running in foreground:** Press `Ctrl + C` in the terminal
- **If running in background:** Run `docker compose down`
   
#### 4. **Development Workflow**

1. **Edit Sass files** in `docs/components/sass/`
2. **Changes auto-compile** and browser refreshes automatically
3. **Edit documentation** in `docs/*.md` files  
4. **Changes auto-reload** in the browser

#### Docker Development Notes:

- **Live reload works for both CSS and documentation** - no manual refresh needed
- **File changes are instant** - the container watches your local files
- **Port 8000** serves the MkDocs site, **port 35729** handles live reload
- **If port 8000 is busy:** Stop other services using that port or change the port mapping in `docker-compose.yml`
- **Container commands:** If you need to run commands inside the container:
  ```bash
  # Access container shell
  docker compose exec mkdocs sh
  
  # Inside container you can run:
  npm run dev          # Start only Sass watcher
  npm run build-sass   # Build Sass once
  npm run clean        # Clean compiled CSS
  ```

## Working on issues

<!-- - Explain how to submit a bug.
- Explain how to submit a feature request.
- Explain how to contribute to an existing issue. -->

To create a new issue, please use the blank issue template (available when you click "New Issue"). If you want to create an issue for other projects to use, please create the issue in your own repository and send a Slack message to one of your hack night hosts with the link.

## Create an issue
Create an issue using the template found [here](https://github.com/hackforla/internship/blob/main/.github/ISSUE_TEMPLATE/dev--create-design-system-microsite-component.md)

## Branch Workflow

- **Branches**: a separate line of development created to work on new features or fixes independently from the main codebase.  Unless specified in your issue, you can name your branch anything you want.  Just be aware that name is visable to other people and is permanently attached to the PR (so please don't use swear words, etc.)

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

- **Add** `git add <file_name>`, **Commit** `git commit -m "{message}"`, and **Push** `git push -u origin new-feat-branch` changes when ready.

For more information please refer to ["Git feature branch workflow"](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow#:~:text=The%20core%20idea%20behind%20the,without%20disturbing%20the%20main%20codebase).

## Working with pull requests and reviews

- Branches facilitate **code reviews** through **pull requests** (PRs).

After pushing your branch to your fork, navigate to the [original repository](https://github.com/hackforla/internship-website-design-system) on GitHub. You'll see an option to **"Compare & pull request"** for the branch you've just updated. Follow the prompts to submit your pull request for review.
<!-- TODO -->

## Testing
<!-- Talk about Accessibility Testing -->

- Run and view the site locally. See [Starting the Development Environment](#2-starting-the-development-environment)
- Observe visual changes for desktop-sized screens as well as mobile.
  
### Automated Accessibility Testing

Before any code is committed, an automated [Pa11y](https://pa11y.org/) accessibility test runs via a pre-commit hook. This helps us maintain a high level of accessibility across the entire project. The test results are saved in a CSV file located in the `/output` folder at the root of the repository.

#### Viewing Pa11y Test Results

To view the Pa11y test results, you can easily open the CSV file within your IDE. We recommend using the [Excel Viewer by GrapeCity](https://marketplace.visualstudio.com/items?itemName=GrapeCity.gc-excelviewer) for a smooth experience. Excel Viewer also supports organizing and filtering the values within the CSV file, making it easy to filter by accessibility error or see errors for a specific microsite page.

#### Instructions to View the CSV File with Excel Viewer by GrapeCity:

1. **Install the Extension:**
   - Search for "Excel Viewer" by GrapeCity in your IDE’s extension marketplace and install it.

2. **Open the CSV File:**
   - Navigate to the `/output` folder in the root of the repository.
   - Right-click on the `pa11y-results.csv` file.
   - Click `Open With`.
   - Select `CSV Editor`.

#### Bypassing Pre-Commit Hooks

We use [Husky](https://typicode.github.io/husky/) to enforce a pre-commit hook that runs the Pa11y accessibility test. In certain situations, you might want to bypass these hooks (like when working on something not directly related to the pages of the microsite). You can do this by:
   - #### Using ` HUSKY=0 `
      Example: `HUSKY=0 git commit -m 'message'`
   - #### Using ` -n ` after your Git command
      Example: `git commit -m 'message' -n`

### Running Accessibility Test Manually

In addition to the automated pre-commit accessibility check, you can run the Pa11y accessibility test manually at any time. This is useful if you want to monitor accessibility errors as you work.

To run the Pa11y accessibility check manually, use the following command:

```bash
npm run pa11y
```
This will output the results in the same `pa11y-results.csv` file located in the `/output` folder. Note that this file will be overwritten the next time the pre-commit hook runs when you commit and push changes.

## Resources
- [Hack for LA's Internship Wiki]()
- [Snippets](SNIPPETS.md)
- [Excel Viewer by GrapeCity](https://marketplace.visualstudio.com/items?itemName=GrapeCity.gc-excelviewer)
- [Husky](https://typicode.github.io/husky/)

