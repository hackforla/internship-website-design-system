
# How to contribute

<!-- Explain the different ways people can contribute. For example: -->

- This is a project of _Hack for LA_, please [join here](https://www.hackforla.org/join)
- Join the team on Slack in the [#internship](https://hackforla.slack.com/archives/C01VAUPU788) channel

## **Table of Contents**
- [**Setting up the development environment**](#setting-up-the-development-environment)
   - [**Prerequisites**](#prerequisites)
   - [**Setup Instructions**](#setup-instructions)
      - [1. Fork and Clone this repository](#1-fork-and-clone-this-repository)
      - [2. Install Dependencies](#2-install-dependencies)
      - [3. Docker Setup](#3-docker-setup)
      - [4. Starting Docker](#4-starting-docker)
      - [5. Stopping Docker](#5-stopping-docker)
      - [Docker Notes](#docker-notes)
- [**Working on issues**](#working-on-issues)
   - [**Branch Workflow**](#branch-workflow)
- [**Create an issue**](#create-an-issue)
- [**Working with pull requests and reviews**](#working-with-pull-requests-and-reviews)
- [**Testing**](#testing)
   - [**Automated Accessibility Testing**](#automated-accessibility-testing)
      - [Bypassing Pre-Commit Hooks](#bypassing-pre-commit-hooks)
   - [**Running Accessibility Check Manually**](#running-accessibility-checks-manually)
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

#### 2. **Install Dependencies**
- In your terminal, run:
   ```bash
   npm install
   ```

#### 3. **Docker Setup**
- #### **Enter repo directory:**
   ```bash 
   cd internship-website-design-system
   ```
- #### **Run the following to pull down the Python base image:**
   ```bash 
   docker pull python:3.8-slim
   ```
- #### **Build the Docker image:** 
   ```bash 
   docker build -t mkdocs-site .
   ```
   This command builds a Docker image named `mkdocs-site` from the Dockerfile in the current directory.
   Note: If you have a permissions error run `sudo docker build -t mkdocs-site .` and enter your machines password.
   
#### 4. **Starting Docker**
**IMPORTANT:** Please make sure the `Docker Desktop` application is **running on your computer** before you run the bash commands below.
- #### Run the Docker container.
   ```bash
   docker run -p 8000:8000 -v ${PWD}:/app mkdocs-site
   ```
   This command runs the `mkdocs-site` image as a container and maps the container's port 8000 to port 8000 on your host machine, allowing you to access the          MkDocs server. View the site by navigating to `http://localhost:8000` in your web browser. You should see your MkDocs site being served from the Docker           container.
   
#### 5. **Stopping Docker**
Simply press `CTRL + C` in the terminal where the container is running. This sends a SIGINT signal, initiating a graceful shutdown of the container. If it doesn't stop, pressing `CTRL + C` again forces a more abrupt termination.
   
#### Docker Notes:

- Changes to any files will automatically be displayed in your browser if the Docker image is ran with `docker run -p 8000:8000 -v ${PWD}:/app mkdocs-site` as previously mentioned.
- If the default port (8000) is already in use on your machine, you can map the container's port to a different port on your host machine by changing the first   `8000` in the `docker run` command to a free port, e.g., `docker run -p 8001:8000 mkdocs-site`.
- If you get an `ERROR [internal] load metadata for docker.io/library/python:3.8-slim ` error, run `docker pull python:3.8-slim`

## Working on issues

<!-- - Explain how to submit a bug.
- Explain how to submit a feature request.
- Explain how to contribute to an existing issue. -->

To create a new issue, please use the blank issue template (available when you click "New Issue"). If you want to create an issue for other projects to use, please create the issue in your own repository and send a Slack message to one of your hack night hosts with the link.

## Create an issue
Create an issue using one of the templates found [here](https://github.com/hackforla/internship/blob/main/.github/ISSUE_TEMPLATE/dev--create-design-system-microsite-component.md)

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

- Run and view the site locally. See [Starting Docker](#3-starting-docker)
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

### Running Accessibility Checks Manually

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

