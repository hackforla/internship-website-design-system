---
hide:
  - toc
---
# **Accordion**
## Guidelines
The Desktop Accordion Component for FAQ sections organizes frequently asked questions into collapsible sections. Each section to reveal the answer when clicked, providing users with an efficient way to access information without overwhelming the interface.
## Class
=== "FAQ/Desktop"
    <div class="btn-grid-1" data-theme>
        <div class="grid-items">
            <div style="display:flex; flex-direction: column;"> 
                <details class="accordion -desktop" name="desktop">
                    <summary class="summary">
                        <h4 class='title'>Accordion Title</h4>
                        <span class="icon">expand_more</span>
                    </summary>
                    <p class="description">Only one accordion can be opened at a time! Expand the other accordion and this accordion will collapse. </p>
                </details> 
                <details class="accordion -desktop" name="desktop">
                    <summary class="summary">
                        <h4 class='title'>Accordion Title</h4>
                        <span class="icon">expand_more</span>
                    </summary>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </details>   
            </div>
        </div>
    </div>
    <br>
    ## States
    === "Collapsed"
        <div class="btn-grid-1" data-theme>
            <div class="grid-items"> 
                <details class="accordion -desktop">
                    <summary class="summary">
                        <h4 class='title'>Accordion Title</h4>
                        <span class="icon">expand_more</span>
                    </summary>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </details>    
            </div>
        </div>
    === "Expanded"
        <div class="btn-grid-1" data-theme>
            <div class="grid-items"> 
                <details class="accordion -desktop" open>
                    <summary class="summary active">
                        <h4 class='title'>Accordion Title</h4>
                        <span class="icon">expand_less</span>
                    </summary>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </details>    
            </div>
        </div>
    <br>
    ## Code
    === "CSS"
        ``` css
            --8<-- "components/sass/components/_accordion.scss:accordion-desktop"
        ```
    === "HTML"
        ``` html
        <!-- For exclusive accordions, add a common "name" attribute to each component -->
        <details class="accordion -desktop">
            <summary class="summary">
                <h4 class='title'>Accordion Title</h4>
                <span class="icon"></span>
            </summary>
            <p class="description">Lorem ipsum dolor sit amet...</p>
        </details>    
        ```
=== "FAQ/Mobile"
    <div class="btn-grid-1" data-theme>
        <div class="grid-items"> 
            <div style="display:flex; flex-direction: column;">
                <details class="accordion -mobile" name="mobile">
                    <summary class="summary">
                        <h5 class='title'>Accordion Title</h5>
                        <span class="icon">expand_more</span>
                    </summary>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </details>
                <details class="accordion -mobile" name="mobile">
                    <summary class="summary">
                        <h5 class='title'>Accordion Title</h5>
                        <span class="icon">expand_more</span>
                    </summary>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </details>
            </div>
        </div>
    </div>
    <br>
    ## States
    === "Collapsed"
        <div class="btn-grid-1" data-theme>
            <div class="grid-items"> 
                <details class="accordion -mobile">
                    <summary class="summary">
                        <h5 class='title'>Accordion Title</h5>
                        <span class="icon">expand_more</span>
                    </summary>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </details>
            </div>
        </div>
    === "Expanded"
        <div class="btn-grid-1" data-theme>
            <div class="grid-items"> 
                <details class="accordion -mobile" open>
                    <summary class="summary active">
                        <h5 class='title'>Accordion Title</h5>
                        <span class="icon">expand_less</span>
                    </summary>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </details>
            </div>
        </div>
            </div>
        </div>
    <br>
    ## Code
    === "CSS"
        ``` css
            --8<-- "components/sass/components/_accordion.scss:accordion-mobile"
        ```
    === "HTML"
        ``` html
        <!-- For exclusive accordions, add a common "name" attribute to each component -->
        <details class="accordion -mobile" name="mobile">
            <summary class="summary">
                <h5 class='title'>Accordion Title</h5>
                <span class="icon">expand_more</span>
            </summary>
            <p class="description">Lorem ipsum dolor sit amet...</p>
        </details>
        ```
