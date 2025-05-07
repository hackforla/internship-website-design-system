---
hide:
  - toc
---
# **Accordion**
## Guidelines
The Desktop Accordion Component for FAQ sections organizes frequently asked questions into collapsible sections. Each section to reveal the answer when clicked, providing users with an efficient way to access information without overwhelming the interface.
## Class
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
            <div class="accordion mobile">
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
                <div class="accordion mobile">
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
                <div class="accordion mobile">
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
