
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
  - [Code Standards](#code-standards)
  - [How the Internship Team works with GitHub Issues](#how-the-internship-team-works-with-github-issues)
    - [Hack for LA Contributor Expectations](#hack-for-la-contributor-expectations)
    - [Where can I find GitHub issues to work on?](#where-can-i-find-github-issues-to-work-on)
      - [**Available issues for new members**](#available-issues-for-new-members)
      - [**Available issues for returning members**](#available-issues-for-returning-members)
    - [Claiming an Issue](#claiming-an-issue)
      - [**Assign \& Unassign yourself to this issue**](#assign--unassign-yourself-to-this-issue)
        - [**If you want to self assign an issue:**](#if-you-want-to-self-assign-an-issue)
        - [**If you want to remove yourself from an issue:**](#if-you-want-to-remove-yourself-from-an-issue)
      - [**Move this issue from the ‘Prioritized Backlog’ to the ‘In progress’ \& back**](#move-this-issue-from-the-prioritized-backlog-to-the-in-progress--back)
        - [**After you claim an issue:**](#after-you-claim-an-issue)
        - [**After you unassign yourself from an issue:**](#after-you-unassign-yourself-from-an-issue)
    - [Create an issue](#create-an-issue)
    - [Working on an issue](#working-on-an-issue)
      - [**Verify current branch is main**](#verify-current-branch-is-main)
      - [**Creating your issue branch and testing your code changes**](#creating-your-issue-branch-and-testing-your-code-changes)
        - [**Creating your issue branch**](#creating-your-issue-branch)
        - [**Testing your code changes**](#testing-your-code-changes)
      - [**Prepare your changes to push to your repository**](#prepare-your-changes-to-push-to-your-repository)
        - [**Use the `git add` command to stage your changes.**](#use-the-git-add-command-to-stage-your-changes)
        - [**Use the `git status` command to see what files are staged.**](#use-the-git-status-command-to-see-what-files-are-staged)
        - [**Use the `git reset HEAD` command to remove a staged file.**](#use-the-git-reset-head-command-to-remove-a-staged-file)
        - [**Use the `git commit` command**](#use-the-git-commit-command)
      - [**Pulling from upstream before you push**](#pulling-from-upstream-before-you-push)
        - [**If there are no changes in the upstream repository**](#if-there-are-no-changes-in-the-upstream-repository)
        - [**If there are conflicting changes in the upstream repository**](#if-there-are-conflicting-changes-in-the-upstream-repository)
      - [**Incorporating changes from upstream**](#incorporating-changes-from-upstream)
        - [**Incorporating changes into your topic branch**](#incorporating-changes-into-your-topic-branch)
  - [Pull Requests](#pull-requests)
    - [How to make a pull request](#how-to-make-a-pull-request)
      - [**Push all changes to your issue branch**](#push-all-changes-to-your-issue-branch)
      - [**Complete pull request on HackforLA repo**](#complete-pull-request-on-hackforla-repo)
        - [**Update pull request title**](#update-pull-request-title)
        - [**Add issue number to pull request**](#add-issue-number-to-pull-request)
        - [**Explain the changes you made, and why these changes were needed.**](#explain-the-changes-you-made-and-why-these-changes-were-needed)
        - [**Include images (if available)**](#include-images-if-available)
    - [Screenshots of Proposed Changes Of The Website (if any, please do not include screenshots of code changes)](#screenshots-of-proposed-changes-of-the-website-if-any-please-do-not-include-screenshots-of-code-changes)
        - [**How to add a pull request to the project board**](#how-to-add-a-pull-request-to-the-project-board)
        - [**After pull request is submitted/merged**](#after-pull-request-is-submittedmerged)
      - [**Editing a submitted pull request**](#editing-a-submitted-pull-request)
      - [**Dealing with merge conflicts**](#dealing-with-merge-conflicts)
  - [Additional Testing](#additional-testing)
    - [Automated Accessibility Testing](#automated-accessibility-testing)
      - [Viewing Pa11y Test Results](#viewing-pa11y-test-results)
      - [Instructions to View the CSV File with Excel Viewer by GrapeCity:](#instructions-to-view-the-csv-file-with-excel-viewer-by-grapecity)
      - [Bypassing Pre-Commit Hooks](#bypassing-pre-commit-hooks)
    - [Running Accessibility Test Manually](#running-accessibility-test-manually)
  - [Resources and Documentation](#resources-and-documentation)
    - [What do I do if I need help?](#what-do-i-do-if-i-need-help)
    - [TWE Resources](#twe-resources)



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
<!-- TODO consider adding local codebase spell checker>-->
<sub>[Back to Table of Contents](#table-of-contents)</sub>
***

## Code Standards

This section explains the standard process for building new components in the
TWE Design System. Material 3 is used as a visual reference, while all tokens,
styles, and implementation details are defined and maintained in this repository.

### Design Reference (Figma)
- Material 3 Design Kit (Figma) is used to understand:
  - Review component structure
  - Understand states, classes and other variants
  - Variants and behavior

Link : https://www.figma.com/community/file/1035203688168086460/material-3-design-kit

- The Figma Material Theme Builder is used to:
  - Preview themes and color systems
  - Export reference values for inspection

Link : https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder

- The exported JSON is used only as a reference and is not directly consumed by the codebase.

### Token workflow
- All design tokens live in `docs/components/sass/abstracts/`.
- Tokens are defined in `tokens.scss`.
- Tokens represent component-level values, not raw design values.
- Tokens may reference existing values from `variables.scss` where appropriate.
- New components should define tokens instead of hardcoding values in component SCSS.

Example:
```scss
[data-theme="material"] {
  --checkbox-unchecked-outline-color: var(--color-outline);
  --checkbox-checked-fill-color: var(--color-primary);
}
```

### How Tokens work

Tokens act as a semantic layer between raw design values (`variables.scss`)
and component implementation (`components/*.scss`).

They exist to answer the question:
**“What does this value mean in the UI?”**, not **“What is the value?”**

Rules:
- Tokens describe intent (e.g. `--token-button-filled-bg`)
- Variables describe raw values (e.g. `--color-primary`)
- Components MUST consume tokens, never raw variables

### When to create a new token vs reuse an existing one

- Create a new token when:
  - A visual value has component-specific meaning
  - The behavior differs between components
  - The value may evolve independently in the future

- Reuse an existing token when:
  - The behavior is shared across multiple components
  - The interaction pattern is identical (e.g. hover state layers)

Tokens should not be reused if doing so would limit future flexibility.

### SCSS structure

- **abstracts**
  - `variables.scss`  
    Global, low-level values (colors, spacing, typography).
  - `tokens.scss`  
    Semantic, component-level design tokens.

- **components**
  - One SCSS file per component.
  - Components consume tokens via CSS custom properties (CSS variables).

- `main.scss`
  - Imports all component styles.

### Building a new component

1. Review the component in the **Material 3 Figma design kit**
2. Identify component states, variants, and required tokens
3. Define component tokens in `tokens.scss`
4. Implement component styles using tokens
5. Add or update the component documentation page (`docs/component.md`)
6. Include HTML, CSS, and JS snippets demonstrating usage

Material is used as a **design reference**, while all implementation details,
tokens, and styling decisions live within this repository.

***

## How the Internship Team works with GitHub Issues

### Hack for LA Contributor Expectations
In order to work on a `Complexity: Small`/`Complexity: Medium`/`Complexity: Large` label issue within this repo, it's recommended you complete the following:
1. good first issue
   - Self-assign an issue with the `good first issue` label.
   - Complete steps in [Working on an issue](#working-on-an-issue) to create a solution for the issue
   - Complete steps in [How to make a pull request](#how-to-make-a-pull-request) to get your solution reviewed by the website-merge team.
   - Once your pull request is merged, you can work on your next issue.
2. Repeat #1 with a new good first issue

Progress through issues with increasing complexity in the following order:

1. Good first issue (x2)
2. Small
3. Medium
4. Large
5. Extra Large

The reasons for this progression are:

- The issues start out as being prescriptive and become less so as you gain more experience by working through increasingly complex issues.
- We are trying to teach you the team methodology through the issues themselves.
- It ensures you understand what we expect and the quality of contributions.

All TWE team members are required to attend at least 1 team meeting in a week (held on Wednesdays and Thursdays). In case, you are unable in any given week, you should reach out to the tech leadership team. Exceptions to this requirement may be provided on a case-by-case basis.

All TWE team members are expected to devote a minimum of 6 hours per week while working on various assignments during their entire tenure on the internship team (excluding week offs and vacations).

Also, please let the tech leadership team know (through a Slack message in the `internship` channel as well as an @ mention in a comment of the issue that you would be working on) if you are planning to take a week off or a longer vacation.

<!-- - Explain how to submit a bug.
- Explain how to submit a feature request.
- Explain how to contribute to an existing issue. -->
<sub>[Back to Table of Contents](#table-of-contents)</sub>
***
### Where can I find GitHub issues to work on?

The best way to view the issues available is our [GitHub Project Board](https://github.com/orgs/hackforla/projects/64/views/4)


For the purpose of finding issues to work on, developers should focus exclusively on the `Prioritized Backlog` column, which contains all the available issues that have been approved and prioritized. 
**Note:** The column is filtered so the first (top) issue has the highest priority and should be worked on next.

#### **Available issues for new members**

Use the link [`good first issues`](https://github.com/orgs/hackforla/projects/64/views/4) to display "good first issues" (for both front end and back end roles) in the Prioritized Backlog column.  

**Note:** The column is filtered so the first (top) issue has the highest priority and should be worked on next.

#### **Available issues for returning members**

* `Prioritized Backlog` column in the [filtered Project Board - **complexity: Small** label](https://github.com/orgs/hackforla/projects/64/views/4)
* `Prioritized Backlog` column in the [filtered Project Board - **complexity: Medium** label](https://github.com/orgs/hackforla/projects/64/views/4)
* `Prioritized Backlog` column in the [filtered Project Board - **complexity: Large and XLarge** label](https://github.com/orgs/hackforla/projects/64/views/4)

<sub>[Back to Table of Contents](#table-of-contents)</sub>
***

### Claiming an Issue
Once you find an issue you want to work on, you need to self-assign to claim it and then move the issue from the `Prioritized Backlog` to  `In progress`. Both of these tasks can be accomplished within the issue. Please see the examples below. (Note: Any issue that you are working on besides the pre-work issue should remain in the `In progress` column and stay open. Once a tech lead merges your pull request associated with that issue, there is automation through GitHub Actions that will take care of moving the issue to a different column and closing the issue.)

#### **Assign & Unassign yourself to this issue**
<details>
  <summary><strong>Click here</strong> to see how you assign & unassign yourself to an issue</summary>
  <p><strong>Assign/Unassign demo</strong></p>
  <img src="https://user-images.githubusercontent.com/21162229/137636320-e96ef70d-3c85-405e-90d2-ee7b3bba071f.gif">
</details>

##### **If you want to self assign an issue:**
* Go to the issue you want to work on
* Go to the right hand menu under `Assignees`
   *  Click the `assign yourself` link

##### **If you want to remove yourself from an issue:**
* Go to the issue you are assigned to
* Go to the right hand menu and click on the gear wheel (:gear:) to the right of `Assignees`
  * Click on the `X clear assignees` link
####  **Move this issue from the ‘Prioritized Backlog’ to the ‘In progress’ & back**
<details>
  <summary><strong>Click here</strong> to see how to move an issue from the ‘Prioritized Backlog’ to the ‘In progress (actively working)’ & back</summary>
  <p><strong>Project Board column demo</strong></p>
  <img src="https://user-images.githubusercontent.com/21162229/137693338-97fe5f6c-820d-41c9-8e93-57b70827e0cf.gif">
</details>

##### **After you claim an issue:**
* Click on the dropdown menu within the `Projects` section of the right-hand menu (value will show `Prioritized Backlog` if unclaimed)
  * Select `In progress (actively working)`

##### **After you unassign yourself from an issue:**
* Click on the dropdown menu within the `Projects` section of the right-hand menu (value will show `In progress (actively working)` if unclaimed)
  * Select `Prioritized Backlog`

<sub>[Back to Table of Contents](#table-of-contents)</sub>
***
### Create an issue
To create a new issue, please use the blank issue template (available when you click "New Issue"). If you want to create an issue for other projects to use, please create the issue in your own repository and send a Slack message to one of your hack night hosts with the link.

Create an issue using the template found [here](https://github.com/hackforla/internship/blob/main/.github/ISSUE_TEMPLATE/dev--create-design-system-microsite-component.md)

<sub>[Back to Table of Contents](#table-of-contents)</sub>
***

### Working on an issue
#### **Verify current branch is main**
The `git branch` command will let you know what branch you are in, and what branch names are already in use.

```bash
git branch
```

You will see a list of all of your branches. There will be a star (`*`) next to the branch that you are currently in. By default you should start on the `main` branch.

**Note:** When you work on future issues, you must always be in the `main` branch when creating a new branch.

If you are not currently in the `main` branch, run the following command to return to it:

```bash
git checkout main
```

Update your main branch with upstream changes:

```bash
git pull upstream main
```

<sub>[Back to Table of Contents](#table-of-contents)</sub>

#### **Creating your issue branch and testing your code changes**
##### **Creating your issue branch**

If you have not already done so, run `git checkout main` to switch the working directory to the `main` branch and then update `main` with upstream changes as described [above](#verify-current-branch-is-main). 

Using the `-b` flag you can also use the `git checkout` command to create a new branch and immediately switch into it.  

For example, if you create a new issue branch for [Create Pagination](https://github.com/hackforla/internship/issues/753):

```bash
git checkout -b pagination
```

 The text after the `-b`, in the example `pagination`, will be the name of your new branch.

 **Note:** Choose a branch name that:
 * matches the name in your issue, if specified; *OR*
 * relates to the issue (No spaces!)

**Note:** The format should look like the scheme above where the words are a brief description of the issue that will make sense at a glance to someone unfamiliar with the issue.

We urge developers to be cautious using `git add`. In general it is not advisable to use `git add -all` or `git add .`. Rather, run `git status`, examine the output carefully, and then add only those files specifically related to the current issue. This will ensure that no extraneous files are included in the subsequent commit.  

When you've finished working on your issue, follow the steps below to prepare your changes to push to your repository.

##### **Testing your code changes**

Testing is a fundamental step to ensure quality of code and that code changes are functioning as expected. We don't want to debug or find solutions for features while the code is already in a production environment in real time. For some it's not the most engaging step and skip it, others simply have not done it before, and some may see it as unecessary time consuming step.

When testing, run your local microsite and view it in the [browser](http://localhost:8000). You will also want to open the [main microsite](https://hackforla.github.io/internship-website-design-system/) in a new tab. Locate your changes on both sites and consider whether these changes address the issue. Some important questions to ask are:

1. Are the changes applicable to the issue?
2. Are there changes beyond those applicable to the issue?
3. Does the microsite appear less user-friendly?
4. Do the links and components on the page still work as intended?

In addition to viewing changes on your desktop browser, you must also assess these changes in multiple viewports (such as mobile or tablet), through your browser's developer mode.

<details>
   <summary> An example of developer mode in Microsoft Edge (90.0.818.51)</summary>
   <img src=https://github.com/hackforla/website/wiki/images/how-to-review-pull-requests/step3-devmode-edge.png>
</details>

- Make sure to comment on your issue if you aren't sure how to test something, and then to put it in the **Questions / In Review column** and add the `ready for dev lead` label. Paste a link to your comments in the #hfla-site Slack channel asking peers for help.

<sub>[Back to Table of Contents](#table-of-contents)</sub>
***

#### **Prepare your changes to push to your repository**
Once you are done with the work on your issue you will push it to your repository.  Before you can push your work to your repository, you will stage and commit your changes.  These two commands are similar to the save command that you have used to in other programs.

**Note:** If you are using Visual studios code you can use the Git graphical user interface to stage your changes. For instructions check out the [Git Gui Wiki](https://github.com/hackforla/website/wiki/How-to-Use-Git-GUI-(Graphical-user-Interface)-in-Visual-Studios-Code)

##### **Use the `git add` command to stage your changes.**

This command prepares your changes before you commit them. You can stage files one at a time using the filename.

Run this command if you want to **add changes from a specific file(s) to your commit record**:
```bash
git add “filename.ext”
```
##### **Use the `git status` command to see what files are staged.**

This command will list the files that have been staged.  These are the files that will be committed (saved) when you run the next command, `git commit`. Please be sure all your staged changes are relevant to the issue you are working on. If you accidentally included unrelated changes, please unstage them before making this commit, and then make a new commit for the unrelated changes. (The commands for unstaging commits are provided in the output of your `git status` command.)

```bash
git status
```
##### **Use the `git reset HEAD` command to remove a staged file.**

This command will remove a file that has been staged.  This file will not be committed (saved) when you run the next command, `git commit`. This only works if the wrong files were added, but they were not yet committed. The file will be removed from the staging area, but not actually deleted:

```bash
git reset HEAD “filename.ext”
```

##### **Use the `git commit` command**

This command saves your work, and prepares it to push to your repository.  Use the `-m` flag to quickly add a message to your commit. Your message should be a short description of the issue you are working.  It will be extremely helpful if other people can understand your message, so try to resist the temptation to be overly cryptic.

To commit your changes with a message, run:

```bash
git commit -m “insert message here”
```

<sub>[Back to Table of Contents](#table-of-contents)</sub>

#### **Pulling from upstream before you push**
**IMPORTANT:** Before you push your local commits to your repository, sync your fork to the main Hack For LA website repository. You can sync your fork directly on GitHub by clicking "Sync Fork" at the right of the screen and then clicking "Update Branch":

<details>
  <summary><strong>Click here</strong> to see how to sync the fork on GitHub</summary>
  <img src="https://raw.githubusercontent.com/wiki/hackforla/website/images/how-to-review-pull-requests/step3-sync-demo.gif">
</details>

Next, bring upstream changes into your topic branch. With your topic branch checked out, run: 

```bash
git pull upstream main
```


##### **If there are no changes in the upstream repository**

If you do not see any output, there have not been any changes in the main repository since the last time you checked. So it is safe to push your local commits to your fork.

If you just type `git push` you will be prompted to create a new branch in your GitHub repository. The more complete command below will create a new branch on your copy of the website repository, and then push your local branch there. The name at the end of this command should be the same as the name of the local branch that you created back in step 3, as in the example below:

```bash
git push --set-upstream origin pagination
```

##### **If there are conflicting changes in the upstream repository**

When you check the upstream repository, you may see output like this:

```bash
Fetching upstream
remote: Enumerating objects: 11, done.
remote: Counting objects: 100% (11/11), done.
remote: Compressing objects: 100% (7/7), done.
remote: Total 11 (delta 5), reused 7 (delta 4), pack-reused 0
Unpacking objects: 100% (11/11), 8.25 KiB | 402.00 KiB/s, done.
From https://github.com/hackforla/internship-website-design-system/
+ 770d667...14f9f46 Zeven     -> hackforla/Zeven  (forced update)
* [new branch]      Zeven     -> hackforla/Zeven
5773ebe..0c86ecd    main      -> main
```


**Note:** You can safely ignore changes in other issue branches, such as `Zeven` above. But if you see changes in main, as in `5773ebe..0c86ecd  main -> hackforla/main`, you should incorporate those changes into your repository before merging or rebasing your issue branch. Use the [instructions below](#incorporating-changes-from-upstream) to bring your fork up to date with the main repository.

<sub>[Back to Table of Contents](#table-of-contents)</sub>

#### **Incorporating changes from upstream**

Your fork of this repository on GitHub, and your local clone of that fork, will get out of sync with this (upstream) repository from time to time. (That's what has happened when you see something like "This branch is 1 commit behind hackforla:main" on the GitHub website version of your repository.)

One way to keep your fork up to date with this repository is to follow these instruction: [Syncing your fork to the original repository via the browser](https://github.com/KirstieJane/STEMMRoleModels/wiki/Syncing-your-fork-to-the-original-repository-via-the-browser)

You can also update your fork via the local clone of your fork, using these instructions. Assuming you have a local clone with remotes `upstream` (this repo) and `origin` (your GitHub fork of this repo):

* First, you will need to create a local branch which tracks upstream/gh-pages.  You will only need to do this once; you do not need to do this every time you want to incorporate upstream changes.

Run the following two commands:

```bash
git fetch upstream
git checkout -b upstream-main --track upstream/main
```

If you have already created the branch upstream-main, the following commands will incorporate upstream changes:

1. Move to the branch you want to merge with.
```bash
git checkout upstream-main
```

1. Update your tracking branch with the latest changes from the `main` branch in this repository
```bash
git pull  
```

1. Move back to your main branch
```bash
git checkout main
```

1. Merge your changes back into your `main` branch.
```bash
git merge upstream-main
```
If you do all your work on topic branches (as suggested above) and keep gh-pages free of local modifications, this merge should apply cleanly.

Then push the merge changes to your GitHub fork:

```bash
git push
```

If you go to your online GitHub repository this should remove the message "This branch is x commit behind hackforla:main".

##### **Incorporating changes into your topic branch**

To incorporate these updates from the main GitHub repository into your topic branch, you can 'rebase' your branch onto your updated gh-pages branch. NOTE you should only rebase if you have never pushed your topic branch to GitHub (or shared it with another collaborator).

```bash
git checkout pagination
git rebase main
```

If you receive warnings about conflicts, abort the rebase with `git rebase --abort` and instead merge gh-pages into your branch.

```bash
git checkout pagination
git merge main
```
<sub>[Back to Table of Contents](#table-of-contents)</sub>
***

## Pull Requests
### How to make a pull request
#### **Push all changes to your issue branch**
Once you are satisfied with your changes, push them to the feature branch you made within your remote repository.

```bash
git push --set-upstream origin pagination
```

**Note:** We will use the pull request [Pagination #19](https://github.com/hackforla/internship-website-design-system/pull/19) as an example. This is tied to issue [#753 Create Pagination](https://github.com/hackforla/internship/issues/753).

<sub>[Back to Table of Contents](#table-of-contents)</sub>
***

#### **Complete pull request on HackforLA repo**
<details>
  <summary><strong>Click here</strong> to see a notification for a pull request</summary>
  <img src="https://user-images.githubusercontent.com/21162229/137709888-77ccfd63-3921-4978-9fc0-6fbd703683b8.jpg">
</details>
<br>
<details>
  <summary><strong>Click here</strong> to see pull request markdown template</summary>

  ```
  <!--  Important! Add the number of the issue you worked on  --> 
  Fixes #replace_this_text_with_the_issue_number

  ### What changes did you make?
  <!--  Note: add lines if needed, and remove any unused lines  -->  
    - 
    - 
    - 

  ### Why did you make the changes (we will use this info to test)?
  <!--  Note: add lines if needed, and remove any unused lines  -->  
    - 
    - 
    - 

  ### Screenshots of Proposed Changes To The Website (if any, please do not include screenshots of code changes)
  <!--  Notes: 
    - If there are no visual changes to the website, delete all of the script below and replace with "- No visual changes to the website"
    - If there are visual changes to the website, include the 'before' and 'after' screenshots below. 
    - If your images are too big, use the <img src="" width="" length="" />  syntax instead of ![image](link) to format the images
    - If images are not loading properly, you might need to double check the syntax or add a newline after the closing </summary> tag 
  --> 

  <details>
    <summary>Visuals before changes are applied</summary>

    ![image](Paste_Your_Image_Link_Here_After_Attaching_Files)

  </details>

  <details>
    <summary>Visuals after changes are applied</summary>

    ![image](Paste_Your_Image_Link_Here_After_Attaching_Files)

  </details>
  ```
</details>
<br>

##### **Update pull request title**
* When the pull request is opened, the cursor will be located in the title input box, and the default title will be your last commit message from your branch.
* Change the title to a short summary of what you did on the issue: 
  * **Advice:** Provide a 4-12 word description of your resolution to the issue
  * Unlike our example, this would be an ideal version:

      `Created Pagination component page`

  * **Note:** Upon creation, the pull request number will be appended to the title automatically. To avoid confusion, please **do not include** the issue number like our example in the title. 
  
##### **Add issue number to pull request**
We have a GitHub action that automatically closes all issues connected to a pull request. So for our example we need to make the following changes:

**From**
```
Fixes #replace_this_text_with_the_issue_number
```
**To**
```
Fixes #753
```

**Note:** This will now connect the issue and pull request both close when the pull request is successfully merged.

##### **Explain the changes you made, and why these changes were needed.**
In bullet point form, explain the changes you made in order to complete the action items within your issue and why. [@zvidmarb](https://github.com/zvidmarb) provided the following summary in PR [Pagination #19](https://github.com/hackforla/internship-website-design-system/pull/19):

```
What changes did you make?
- Implemented a pagination component with functional nav buttons that iterate between active pages
- Page and Control buttons are complete with proper sizing, positioning, and states matching design system
- Added a proper documentation page demonstrating component and presenting HTML, CSS, JS code
- Diverged from design system slightly with opacity values, added variables to more closely match design system color names
- Removed inline style tag hack (pagination.scss) for working around ongoing live-reload issues

Why did you make the changes (we will use this info to test)?
- Pagination was unimplemented; added all functionality possible with current scope
- Page, Control, and More buttons within pagination component have overlapping states, so Control and More are variants of a primary page button styling
- Ready for Dev design page (Resource 1.01) is slightly outdated, kept microsite page consistent with other pages
- Opacities were requiring too much variety to variables... see Buttons #10 for an alternate implementation with similar opacity values as variables?

```

**Note:** All the bullet points addressed the action items within that issue.

##### **Include images (if available)**
In the example above, changes are shown by adding images within the `<details>/<summary>` tags like so:
### Screenshots of Proposed Changes Of The Website (if any, please do not include screenshots of code changes)
```
<!--  Notes: 
  - If there are no visual changes to the website, delete all of the script below and replace with "- No visual changes to the website"
  - If there are visual changes to the website, include the 'before' and 'after' screenshots below. 
  - If your images are too big, use the <img src="" width="" length="" />  syntax instead of ![image](link) to format the images
  - If images are not loading properly, you might need to double check the syntax or add a newline after the closing </summary> tag 
 --> 

<details>
  <summary>Visuals before changes are applied</summary>

  ![image](https://user-images.githubusercontent.com/77212035/130176122-aca18c1a-c883-48b3-987d-06342835017c.png)

</details>

<details>
  <summary>Visuals after changes are applied</summary>

  ![image](https://user-images.githubusercontent.com/77212035/130176069-9c1cc306-f930-43a5-9f93-1249466c81dc.png)

</details>
```
**Note:** Not all pull requests will make visual changes to our website. **Please do not include screenshots from VSCode / other IDE.** If your pull request does not make visual changes to our website, please remove the entire `<details>/<summary>` section and replace it with a brief summary stating that there are no visual changes, for example:

```
### Screenshots of Proposed Changes Of The Website  (if any, please do not screen shot code changes)

Moving files to another directory. No visual changes to the website.
```

##### **How to add a pull request to the project board**
**NOTE:** There is an automation for adding newly created pull requests to the Project Board. However, it still should be manually checked to make sure the pull request has been placed on the Project Board in case automation breaks.

After you have submitted your pull request, add it to the project board by clicking the gear icon on the right under Projects and selecting 'Project Board.'

<details>
  <summary><strong>Click here</strong> to see how to add a pull request to the project board</summary>
  <h4>Our GitHub project board</h4>
  <img src="https://user-images.githubusercontent.com/81049661/161181526-23ae511c-e991-4cc6-a0a4-d8db19dd69ca.png">
</details>

##### **After pull request is submitted/merged**

**NOTE:** After completing your assignment and committing all of the changes, you must leave your current branch and return to the `main` branch.

Run the following command to return to the main branch:
```
git checkout main
```
Once your pull request is merged you can delete your branch with the following command:
```
git branch -d pagination
```
Now you are all set to work on a new PR. Start over at [Where can I find GitHub issues to work on?](#where-can-i-find-github-issues-to-work-on) and repeat completing parts 2 and 3.

<sub>[Back to Table of Contents](#table-of-contents)</sub>
***

#### **Editing a submitted pull request**
If you find an error in your code or your reviewer asks you to make a change, please avoid editing your code directly from the pull request. Instead update it in your local branch first and then push it to your origin remote. This will update the original pull request.

<sub>[Back to Table of Contents](#table-of-contents)</sub>
***

#### **Dealing with merge conflicts**
Merge conflicts occur when two or more branches of code have been modified in conflicting ways, making it difficult for the version control system to automatically merge the changes together. This often happens when two developers modify the same line of code, when one developer deletes a file that another has modified, or when one developer renames a file while another is still working on it.

Resolving merge conflicts typically involves reviewing the changes made in each branch, deciding which changes to keep, and manually editing the code to resolve the conflict.

Please check out this [documentation from VSCode](https://code.visualstudio.com/docs/sourcecontrol/overview#_merge-conflicts) for more information on handling merge conflicts.

<sub>[Back to Table of Contents](#table-of-contents)</sub>
***

## Additional Testing
For help on testing with your issues, see [Testing your Code Changes](#testing-your-code-changes).

We also have a number of automated testing actions that apply when pull requesting and pushing changes. *As of Jan 2026, these actions are temporarily disabled. Below is the previous documentation for future reference.*
  
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

<sub>[Back to Table of Contents](#table-of-contents)</sub>
***

### Running Accessibility Test Manually

In addition to the automated pre-commit accessibility check, you can run the Pa11y accessibility test manually at any time. This is useful if you want to monitor accessibility errors as you work.

To run the Pa11y accessibility check manually, use the following command:

```bash
npm run pa11y
```
This will output the results in the same `pa11y-results.csv` file located in the `/output` folder. Note that this file will be overwritten the next time the pre-commit hook runs when you commit and push changes.

<sub>[Back to Table of Contents](#table-of-contents)</sub>
***

## Resources and Documentation
### What do I do if I need help?
The best way to ask for help and provide as much information to the team is to do the following:
<details>
  <summary><strong>Click here</strong> for visual comment example</summary>
  <img src="https://user-images.githubusercontent.com/21162229/137784250-96281332-9231-4c5d-aba2-0d4c36521b82.jpg" alt="Making a comment visual example">
</details>
1. Write down your blocker as a comment within your issue
    * Describe the blocker and your approach to resolve the action items within the issue.
2. Note which branch you are working on and make sure it has the changes you are referring to.

<details>
  <summary><strong>Click here</strong> to see how to copy a link that goes to an issue comment</summary>
  <img src="https://user-images.githubusercontent.com/21162229/137784791-30871703-48de-4836-91ef-1268d86662a4.jpg" alt="Visual example of how to copy the comment link">
</details>

1. Click on the ellipsis (...) at the top right of the comment box
2. Click on `Copy Link`
3. Now paste that link in the [`hfla-site` Slack channel](https://hackforla.slack.com/archives/C4UM52W93)
4. The Website Leadership/Merge Team will do its best to help resolve any blockers and provide guidance.

<sub>[Back to Table of Contents](#table-of-contents)</sub>
***

### TWE Resources
- [Hack for LA Website Contribution file](https://github.com/zvidmarb/HackforLA-Website/blob/gh-pages/CONTRIBUTING.md)
- Wiki Resources 
  - [Homepage](https://github.com/hackforla/website/wiki)
  - [Being a Part of the Hack For LA Team](https://github.com/hackforla/website/wiki/Being-a-Part-of-the-Hack-For-LA-Team)
  - [How to review pull requests](https://github.com/hackforla/website/wiki/How-to-Review-Pull-Requests)
  - [How to Create Issues](https://github.com/hackforla/website/wiki/How-to-create-issues)
  - [How to read and interpret issue labels](https://github.com/hackforla/website/wiki/How-to-read-and-interpret-labels)
  - [How to Create a Design System Microsite Page using Snippets](https://github.com/hackforla/internship/wiki/How-to-Create-a-Design-System-Microsite-Page-using-Snippets)
- Design References
  - [Figma - Design Systems](https://www.figma.com/file/TTRS2FWXsrymHYpPJL1IdH/Internship-Team-Main-file?type=design&node-id=2%3A45&mode=design&t=jgMN8QdoLnh9F7MT-1)
  - [Figma - Microsite pages](https://www.figma.com/design/TTRS2FWXsrymHYpPJL1IdH/Internship-Team-Main-file?node-id=2-54&p=f&t=d9p36VpyFreC0BBo-0)
- Tools and Extensions
  - [Github Pages](https://pages.github.com/)
  - [Jekyll](https://jekyllrb.com/docs/)
  - [Liquid Documentation](https://shopify.github.io/liquid/)
  - [Snippets](SNIPPETS.md)
  - [Excel Viewer by GrapeCity](https://marketplace.visualstudio.com/items?itemName=GrapeCity.gc-excelviewer)
  - [Husky](https://typicode.github.io/husky/)
  - [Docker](https://docs.docker.com/get-started/)
    - [Docker Compose](https://docs.docker.com/compose/gettingstarted/)
    - [Docker Desktop](https://docs.docker.com/install/) 

<sub>[Back to Table of Contents](#table-of-contents)</sub>
***