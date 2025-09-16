
# How to contribute

<!-- Explain the different ways people can contribute. For example: -->

- This is a project of _Hack for LA_, please [join here](https://www.hackforla.org/join)
- Join the team on Slack in the [#internship](https://hackforla.slack.com/archives/C01VAUPU788) channel

## **Table of Contents**
- [**Setting up the development environment**](#setting-up-the-development-environment)
   - [**Prerequisites**](#prerequisites)
   - [**Setup Instructions**](#setup-instructions)
      - [1. Fork and Clone this repository](#1-fork-and-clone-this-repository)
      - [2. Starting the Development Environment](#2-starting-the-development-environment)
      - [3. Stopping Docker](#3-stopping-docker)
      - [4. Development Workflow](#4-development-workflow)
      - [Docker Development Notes](#docker-development-notes)
- [**Working on issues**](#working-on-issues)
   - [**Branch Workflow**](#branch-workflow)
- [**Create an issue**](#create-an-issue)
- [**Working with pull requests and reviews**](#working-with-pull-requests-and-reviews)
- [**Testing**](#testing)
   - [**Automated Accessibility Testing**](#automated-accessibility-testing)
      - [Bypassing Pre-Commit Hooks](#bypassing-pre-commit-hooks)
   - [**Running Accessibility Test Manually**](#running-accessibility-test-manually)
- [**Resources**](#resources)



## Setting up the development environment

### **Prerequisites**
- Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on your machine.
- Install [Docker](https://www.docker.com/get-started) on your machine.

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

