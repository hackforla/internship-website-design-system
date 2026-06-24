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
                        <div class='title' role="heading" aria-level="4">Accordion Title</div>
                        <span class="icon" aria-hidden="true">expand_more</span>
                    </summary>
                    <p>Only one accordion can be opened at a time! Expand the other accordion and this accordion will collapse. </p>
                </details> 
                <details class="accordion -desktop" name="desktop">
                    <summary class="summary">
                        <div class='title' role="heading" aria-level="4">Accordion Title</div>
                        <span class="icon" aria-hidden="true">expand_more</span>
                    </summary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                        <div class='title' role="heading" aria-level="4">Accordion Title</div>
                        <span class="icon" aria-hidden="true">expand_more</span>
                    </summary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </details>    
            </div>
        </div>
    === "Expanded"
        <div class="btn-grid-1" data-theme>
            <div class="grid-items"> 
                <details class="accordion -desktop" open>
                    <summary class="summary active">
                        <div class='title' role="heading" aria-level="4">Accordion Title</div>
                        <span class="icon" aria-hidden="true">expand_more</span>
                    </summary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                <!-- Change heading level to match your project's structure needs -->
                <div class='title' role="heading" aria-level="4">Accordion Title</div>
                <span class="icon" aria-hidden="true">expand_more</span>
            </summary>
            <p>Lorem ipsum dolor sit amet...</p>
        </details>    
        ```
    === "JS"
        ``` js
        --8<-- "javascript/accordion.js:accordion-js"
        ```

=== "FAQ/Mobile"
    <div class="btn-grid-1" data-theme>
        <div class="grid-items"> 
            <div style="display:flex; flex-direction: column;">
                <details class="accordion -mobile" name="mobile">
                    <summary class="summary">
                        <div class='title' role="heading" aria-level="5">Accordion Title</div>
                        <span class="icon" aria-hidden="true">expand_more</span>
                    </summary>
                    <p>Only one accordion can be opened at a time! Expand the other accordion and this accordion will collapse.</p>
                </details>
                <details class="accordion -mobile" name="mobile">
                    <summary class="summary">
                        <div class='title' role="heading" aria-level="5">Accordion Title</div>
                        <span class="icon" aria-hidden="true">expand_more</span>
                    </summary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                        <div class='title' role="heading" aria-level="5">Accordion Title</div>
                        <span class="icon" aria-hidden="true">expand_more</span>
                    </summary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </details>
            </div>
        </div>
    === "Expanded"
        <div class="btn-grid-1" data-theme>
            <div class="grid-items"> 
                <details class="accordion -mobile" open>
                    <summary class="summary active">
                        <div class='title' role="heading" aria-level="5">Accordion Title</div>
                        <span class="icon" aria-hidden="true">expand_more</span>
                    </summary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </details>
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
                <!-- Change heading level to match your project's structure needs -->
                <div class='title' role="heading" aria-level="5">Accordion Title</div>
                <span class="icon" aria-hidden="true">expand_more</span>
            </summary>
            <p>Lorem ipsum dolor sit amet...</p>
        </details>
        ```
    === "JS"
        ``` js
        --8<-- "javascript/accordion.js:accordion-js"
        ```
