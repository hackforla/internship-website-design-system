---
hide:
  - toc
---
# **Accordion**
## Guidelines
The Accordion for Filtering Content with Checkboxes List Item is a user interface element designed to streamline content navigation and selection. It presents a list of checkboxes within collapsible sections, allowing users to filter content based on their preferences.
## Class
=== "Filter"
    <div class="btn-grid-1">
        <div class="grid-items"> 
        </div>
    </div>
    <br>
    # **States**
    === "Collapsed"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="accordion">
                    <button class="accordion-button">
                        <span class='accordion-title'>Accordion Title</span>
                        :material-chevron-up:{ .open }
                        :material-chevron-down:{ .close }
                    </button>
                    <div class="panel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    === "Expanded"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="accordion">
                    <button class="accordion-button active">
                        <span class='accordion-title'>Accordion Title</span>
                        :material-chevron-up:{ .open }
                        :material-chevron-down:{ .close }
                    </button>
                    <div class="panel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    <br>

    === "HTML"

        ``` html
        <a href="#" class="btn-sm">Button</a>

        <a href="#" class="btn-sm hover">Button</a>

        <a href="#" class="btn-sm focus">Button</a>

        <a href="#" class="btn-sm disabled">Button</a>
        
        ```

    === "CSS"

        ``` css
        --8<-- "_buttons.scss:btn"
        --8<-- "_buttons.scss:btnSm"
        ```
=== "FAQ/Desktop"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <div class="accordion">
                <button class="accordion-button">
                    <span class='accordion-title'>Accordion Title</span>
                    :material-chevron-up:{ .open }
                    :material-chevron-down:{ .close }
                </button>
                <div class="panel">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div class="accordion">
                <button class="accordion-button">
                    <span class='accordion-title'>Accordion Title</span>
                    :material-chevron-up:{ .open }
                    :material-chevron-down:{ .close }
                </button>
                <div class="panel">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div class="accordion">
                <button class="accordion-button">
                    <span class='accordion-title'>Accordion Title</span>
                    :material-chevron-up:{ .open }
                    :material-chevron-down:{ .close }
                </button>
                <div class="panel">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </div>
    <br>
    # **States**
    === "Collapsed"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="accordion">
                    <button class="accordion-button">
                        <span class='accordion-title'>Accordion Title</span>
                        :material-chevron-up:{ .open }
                        :material-chevron-down:{ .close }
                    </button>
                    <div class="panel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    === "Expanded"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="accordion">
                    <button class="accordion-button active">
                        <span class='accordion-title'>Accordion Title</span>
                        :material-chevron-up:{ .open }
                        :material-chevron-down:{ .close }
                    </button>
                    <div class="panel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    <br>
    # **Code**
    === "CSS"

        ``` css
            --8<-- "components/sass/components/_accordion.scss:accordion-desktop"
        ```

    === "HTML"

        ``` html
        <div class="accordion">
            <button class="accordion-button">
                <span class='accordion-title'>Accordion Title</span>
                :material-chevron-up:{ .open }
                :material-chevron-down:{ .close }
            </button>
            <div class="panel">
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
        </div>
        ```
=== "FAQ/Mobile"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <div class="accordion">
                    <button class="accordion-button">
                        <span class='accordion-title'>Accordion Title</span>
                        :material-chevron-up:{ .open }
                        :material-chevron-down:{ .close }
                    </button>
                    <div class="panel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
        </div>
    </div>
    <br>
    # **States**
    === "Collapsed"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="accordion">
                    <button class="accordion-button">
                        <span class='accordion-title'>Accordion Title</span>
                        :material-chevron-up:{ .open }
                        :material-chevron-down:{ .close }
                    </button>
                    <div class="panel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    === "Expanded"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="accordion">
                    <button class="accordion-button active">
                        <span class='accordion-title'>Accordion Title</span>
                        :material-chevron-up:{ .open }
                        :material-chevron-down:{ .close }
                    </button>
                    <div class="panel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    <br>
    === "CSS"

        ``` css
        
        ```

    === "HTML"

        ``` html
        <div class="accordion">
            <button class="accordion-button">
                <span class='accordion-title'>Accordion Title</span>
                :material-chevron-up:{ .open }
                :material-chevron-down:{ .close }
            </button>
            <div class="panel">
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
        </div>
        ```



