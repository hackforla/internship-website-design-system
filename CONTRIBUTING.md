
# How to contribute

<!-- Explain the different ways people can contribute. For example: -->

- This is a project of _Hack for LA_, please [join here](https://www.hackforla.org/join)
- Join the team on Slack in the [#internship](https://hackforla.slack.com/archives/C01VAUPU788) channel

## **Table of Contents**
- [**Setting up the development environment**](#setting-up-the-development-environment)
   - [**Prerequisites**](#prerequisites)
   - [**Setup Instructions**](#setup-instructions)
        - [1. Fork and Clone this repository](#1-fork-and-clone-this-repository)
        - [2. Docker Setup](#2-docker-setup)
        - [3. Starting Docker](#3-starting-docker)
        - [4. Stopping Docker](#4-stopping-docker)
        - [Docker Notes](#docker-notes)
- [**Working on issues**](#working-on-issues)
   - [**Branch Workflow**](#branch-workflow)
- [**Create an issue**](#create-an-issue)
- [**Working with pull requests and reviews**](#working-with-pull-requests-and-reviews)
- [**Testing**](#testing)
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

#### 2. **Docker Setup**
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
   
#### 3. **Starting Docker**
- #### Run the Docker container.
   ```bash
   docker run -p 8000:8000 -v ${PWD}:/app mkdocs-site
   ```
   This command runs the `mkdocs-site` image as a container and maps the container's port 8000 to port 8000 on your host machine, allowing you to access the          MkDocs server. View the site by navigating to `http://localhost:8000` in your web browser. You should see your MkDocs site being served from the Docker           container.
   
#### 4. **Stopping Docker**
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. 
   
#### Docker Notes:

- If you make changes to the documentation source files, you will need to rebuild the Docker image to see the changes.
- If the default port (8000) is already in use on your machine, you can map the container's port to a different port on your host machine by changing the first   `8000` in the `docker run` command to a free port, e.g., `docker run -p 8001:8000 mkdocs-site`.
- If you get an `ERROR [internal] load metadata for docker.io/library/python:3.8-slim ` error, run `docker pull python:3.8-slim`

## Working on issues

<!-- - Explain how to submit a bug.
- Explain how to submit a feature request.
- Explain how to contribute to an existing issue. -->

To create a new issue, please use the blank issue template (available when you click "New Issue"). If you want to create an issue for other projects to use, please create the issue in your own repository and send a Slack message to one of your hack night hosts with the link.

## Create an issue

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

- Branches make **code reviews** possible through **pull requests** (PR).

After pushing your branch to the fork, navigate to the [original repository](https://github.com/hackforla/internship-website-design-system) on GitHub. You'll see an option to **"Compare & pull request"** for the branch you've just updated. Follow the prompts to submit your pull request for review.

## Testing
<!-- Talk about Accessibility Testing -->

- Run and view the site locally. See [Starting Docker](#starting-docker)
- Observe visual changes for desktop-sized screens as well as mobile.

## Resources
- [Hack for LA's Internship Wiki]()
- [Snippets](SNIPPETS.md)

