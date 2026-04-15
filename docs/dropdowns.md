---
hide:
  - toc
---

# **Dropdowns**

## Class

=== "Dropdown Base"

    <div data-theme>
        <div class="state-box">
            <div class="dropdown-wrapper input-wrapper input-filled trailing-icon">
                <div class="input-field dropdown-field trailing-icon">
                    <span class="dropdown-value">Select option</span>
                    <span class="input-icon trailing" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10"
                                    stroke="currentColor"
                                    stroke-width="2"/>
                            <path d="M9 9L15 15M15 9L9 15"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"/>
                        </svg>
                    </span>
                </div> 
                <label class="input-label">Label</label>
                <ul class="dropdown-menu">
                    <li class="dropdown-option">Option 1</li>
                    <li class="dropdown-option">Option 2</li>
                    <li class="dropdown-option">Option 3</li>
                </ul>
            </div>
        </div>
    </div>




<h2 class="no-toc">States</h2>

=== "Filled / Enabled"

    <div data-theme>
        <div class="state-box">
            <div class="dropdown-wrapper input-wrapper input-filled trailing-icon">
                <div class="input-field dropdown-field trailing-icon">
                    <span class="dropdown-value">Select option</span>
                    <span class="input-icon trailing" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10"
                                stroke="currentColor"
                                stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"/>
                    </svg>
                </span>
                </div>
                <label class="input-label">Label</label>
                <ul class="dropdown-menu">
                    <li class="dropdown-option">Option 1</li>
                    <li class="dropdown-option">Option 2</li>
                    <li class="dropdown-option">Option 3</li>
                </ul>
            </div>
        </div>
    </div>

    <h2 class="no-toc">Code</h2>

    === "HTML"
        ```html
        <div class="dropdown-wrapper input-wrapper input-filled trailing-icon">
            <div class="input-field dropdown-field trailing-icon">
                <span class="dropdown-value">Select option</span>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10"
                                stroke="currentColor"
                                stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            <label class="input-label">Label</label>
            <ul class="dropdown-menu">
                <li class="dropdown-option">Option 1</li>
                <li class="dropdown-option">Option 2</li>
                <li class="dropdown-option">Option 3</li>
            </ul>
        </div>
        ```

    === "CSS"
        ```css
        --8<-- "components/sass/components/_dropdowns.scss:dropdown-base"
        ```

    === "JS"
        ```js
        --8<-- "javascript/dropdown.js:dropdown-js"
        ```

=== "Outlined / Enabled"

    <div data-theme>
        <div class="state-box">
            <div class="dropdown-wrapper input-wrapper input-outlined trailing-icon">
                <div class="input-field dropdown-field trailing-icon">
                    <span class="dropdown-value">Select option</span>
                    <span class="input-icon trailing" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10"
                                stroke="currentColor"
                                stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"/>
                    </svg>
                </span>
                </div>
                <label class="input-label">Label</label>
                <ul class="dropdown-menu">
                    <li class="dropdown-option">Option 1</li>
                    <li class="dropdown-option">Option 2</li>
                    <li class="dropdown-option">Option 3</li>
                </ul>
            </div>
        </div>
    </div>

    <h2 class="no-toc">Code</h2>

    === "HTML"
        ```html
        <div class="dropdown-wrapper input-wrapper input-outlined trailing-icon">
            <div class="input-field dropdown-field trailing-icon">
                <span class="dropdown-value">Select option</span>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10"
                                stroke="currentColor"
                                stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            <label class="input-label">Label</label>
            <ul class="dropdown-menu">
                <li class="dropdown-option">Option 1</li>
                <li class="dropdown-option">Option 2</li>
                <li class="dropdown-option">Option 3</li>
            </ul>
        </div>
        ```

    === "CSS"
        ```css
        --8<-- "components/sass/components/_dropdowns.scss:dropdown-base"
        ```

    === "JS"
        ```js
        --8<-- "javascript/dropdown.js:dropdown-js"
        ```

=== "Filled / Hovered"

    <div data-theme>
        <div class="state-box">
            <div class="dropdown-wrapper input-wrapper input-filled trailing-icon">
                <div class="input-field dropdown-field trailing-icon is-hover">
                    <span class="dropdown-value">Select option</span>
                    <span class="input-icon trailing" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10"
                                stroke="currentColor"
                                stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"/>
                    </svg>
                </span>
                </div>
                <label class="input-label">Label</label>
                <ul class="dropdown-menu">
                    <li class="dropdown-option">Option 1</li>
                    <li class="dropdown-option">Option 2</li>
                    <li class="dropdown-option">Option 3</li>
                </ul>
            </div>
        </div>
    </div>

    <h2 class="no-toc">Code</h2>

    === "HTML"
        ```html
        <div data-theme>
            <div class="state-box">
                <div class="dropdown-wrapper input-wrapper input-filled trailing-icon">
                    <div class="input-field dropdown-field trailing-icon is-hover">
                        <span class="dropdown-value">Select option</span>
                        <span class="input-icon trailing" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10"
                                    stroke="currentColor"
                                    stroke-width="2"/>
                            <path d="M9 9L15 15M15 9L9 15"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"/>
                        </svg>
                    </span>
                    </div>
                    <label class="input-label">Label</label>
                    <ul class="dropdown-menu">
                        <li class="dropdown-option">Option 1</li>
                        <li class="dropdown-option">Option 2</li>
                        <li class="dropdown-option">Option 3</li>
                    </ul>
                </div>
            </div>
        </div>
        ```

    === "CSS"
        ```css
        --8<-- "components/sass/components/_dropdowns.scss:dropdown-base"
        ```

    === "JS"
        ```js
        --8<-- "javascript/dropdown.js:dropdown-js"
        ```

=== "Outlined / Hovered"

    <div data-theme>
        <div class="state-box">
            <div class="dropdown-wrapper input-wrapper input-outlined trailing-icon">
                <div class="input-field dropdown-field trailing-icon is-hover">
                    <span class="dropdown-value">Select option</span>
                    <span class="input-icon trailing" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10"
                                stroke="currentColor"
                                stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"/>
                    </svg>
                </span>
                </div>
                <label class="input-label">Label</label>
                <ul class="dropdown-menu">
                    <li class="dropdown-option">Option 1</li>
                    <li class="dropdown-option">Option 2</li>
                    <li class="dropdown-option">Option 3</li>
                </ul>
            </div>
        </div>
    </div>

    <h2 class="no-toc">Code</h2>

    === "HTML"
        ```html
        <div data-theme>
            <div class="state-box">
                <div class="dropdown-wrapper input-wrapper input-outlined trailing-icon">
                    <div class="input-field dropdown-field trailing-icon is-hover">
                        <span class="dropdown-value">Select option</span>
                        <span class="input-icon trailing" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10"
                                    stroke="currentColor"
                                    stroke-width="2"/>
                            <path d="M9 9L15 15M15 9L9 15"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"/>
                        </svg>
                    </span>
                    </div>
                    <label class="input-label">Label</label>
                    <ul class="dropdown-menu">
                        <li class="dropdown-option">Option 1</li>
                        <li class="dropdown-option">Option 2</li>
                        <li class="dropdown-option">Option 3</li>
                    </ul>
                </div>
            </div>
        </div>
        ```

    === "CSS"
        ```css
        --8<-- "components/sass/components/_dropdowns.scss:dropdown-base"
        ```

    === "JS"
        ```js
        --8<-- "javascript/dropdown.js:dropdown-js"
        ```

=== "Filled / Focused"

    <div data-theme>
        <div class="state-box">
            <div class="dropdown-wrapper input-wrapper input-filled trailing-icon open">
                <div class="input-field dropdown-field trailing-icon is-focus">
                    <span class="dropdown-value">Select option</span>
                    <span class="input-icon trailing" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10"
                                stroke="currentColor"
                                stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"/>
                    </svg>
                </span>
                </div>
                <label class="input-label">Label</label>
                <ul class="dropdown-menu">
                    <li class="dropdown-option">Option 1</li>
                    <li class="dropdown-option">Option 2</li>
                    <li class="dropdown-option">Option 3</li>
                </ul>
            </div>
        </div>
    </div>

    <h2 class="no-toc">Code</h2>

    === "HTML"
        ```html
        <div data-theme>
            <div class="state-box">
                <div class="dropdown-wrapper input-wrapper input-filled trailing-icon open">
                    <div class="input-field dropdown-field trailing-icon is-focus">
                        <span class="dropdown-value">Select option</span>
                        <span class="input-icon trailing" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10"
                                    stroke="currentColor"
                                    stroke-width="2"/>
                            <path d="M9 9L15 15M15 9L9 15"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"/>
                        </svg>
                    </span>
                    </div>
                    <label class="input-label">Label</label>
                    <ul class="dropdown-menu">
                        <li class="dropdown-option">Option 1</li>
                        <li class="dropdown-option">Option 2</li>
                        <li class="dropdown-option">Option 3</li>
                    </ul>
                </div>
            </div>
        </div>
        ```

    === "CSS"
        ```css
        --8<-- "components/sass/components/_dropdowns.scss:dropdown-base"
        ```

    === "JS"
        ```js
        --8<-- "javascript/dropdown.js:dropdown-js"
        ```

=== "Outlined / Focused"

    <div data-theme>
        <div class="state-box">
            <div class="dropdown-wrapper input-wrapper input-outlined trailing-icon open">
                <div class="input-field dropdown-field trailing-icon is-focus">
                    <span class="dropdown-value">Selected Item</span>
                    <span class="input-icon trailing" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10"
                                stroke="currentColor"
                                stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"/>
                    </svg>
                </span>
                </div>
                <label class="input-label">Label</label>
                <ul class="dropdown-menu">
                    <li class="dropdown-option is-selected">Option 1</li>
                    <li class="dropdown-option">Option 2</li>
                    <li class="dropdown-option">Option 3</li>
                </ul>
            </div>
        </div>
    </div>

    <h2 class="no-toc">Code</h2>

    === "HTML"
        ```html
        <div data-theme>
            <div class="state-box">
                <div class="dropdown-wrapper input-wrapper input-outlined trailing-icon open">
                    <div class="input-field dropdown-field trailing-icon is-focus">
                        <span class="dropdown-value">Selected Item</span>
                        <span class="input-icon trailing" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10"
                                    stroke="currentColor"
                                    stroke-width="2"/>
                            <path d="M9 9L15 15M15 9L9 15"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"/>
                        </svg>
                    </span>
                    </div>
                    <label class="input-label">Label</label>
                    <ul class="dropdown-menu">
                        <li class="dropdown-option is-selected">Option 1</li>
                        <li class="dropdown-option">Option 2</li>
                        <li class="dropdown-option">Option 3</li>
                    </ul>
                </div>
            </div>
        </div>
        ```

    === "CSS"
        ```css
        --8<-- "components/sass/components/_dropdowns.scss:dropdown-base"
        ```

    === "JS"
        ```js
        --8<-- "javascript/dropdown.js:dropdown-js"
        ```

=== "Filled / Error"

    <div data-theme>
        <div class="state-box">
            <div class="dropdown-wrapper input-wrapper input-filled trailing-icon">
                <div class="input-field dropdown-field trailing-icon error">
                    <span class="dropdown-value">Select option</span>
                    <span class="input-icon trailing" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" fill="currentColor"/>
                            <rect x="11" y="6" width="2" height="8" fill="#fff" rx="1"/>
                            <circle cx="12" cy="17" r="1.2" fill="#fff"/>
                        </svg>
                    </span>
                </div>
                <label class="input-label">Label</label>
                <ul class="dropdown-menu">
                    <li class="dropdown-option">Option 1</li>
                    <li class="dropdown-option">Option 2</li>
                    <li class="dropdown-option">Option 3</li>
                </ul>
            </div>
        </div>
    </div>

    <h2 class="no-toc">Code</h2>

    === "HTML"
        ```html
        <div data-theme>
            <div class="state-box">
                <div class="dropdown-wrapper input-wrapper input-filled trailing-icon">
                    <div class="input-field dropdown-field trailing-icon error">
                        <span class="dropdown-value">Select option</span>
                        <span class="input-icon trailing" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" fill="currentColor"/>
                                <rect x="11" y="6" width="2" height="8" fill="#fff" rx="1"/>
                                <circle cx="12" cy="17" r="1.2" fill="#fff"/>
                            </svg>
                        </span>
                    </div>
                    <label class="input-label">Label</label>
                    <ul class="dropdown-menu">
                        <li class="dropdown-option">Option 1</li>
                        <li class="dropdown-option">Option 2</li>
                        <li class="dropdown-option">Option 3</li>
                    </ul>
                </div>
            </div>
        </div>
        ```

    === "CSS"
        ```css
        --8<-- "components/sass/components/_dropdowns.scss:dropdown-base"
        ```

    === "JS"
        ```js
        --8<-- "javascript/dropdown.js:dropdown-js"
        ```

=== "Outlined / Error"

    <div data-theme>
        <div class="state-box">
            <div class="dropdown-wrapper input-wrapper input-outlined trailing-icon">
                <div class="input-field dropdown-field trailing-icon error">
                    <span class="dropdown-value">Select option</span>
                    <span class="input-icon trailing" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" fill="currentColor"/>
                            <rect x="11" y="6" width="2" height="8" fill="#fff" rx="1"/>
                            <circle cx="12" cy="17" r="1.2" fill="#fff"/>
                        </svg>
                    </span>
                </div>
                <label class="input-label">Label</label>
                <ul class="dropdown-menu">
                    <li class="dropdown-option">Option 1</li>
                    <li class="dropdown-option">Option 2</li>
                    <li class="dropdown-option">Option 3</li>
                </ul>
            </div>
        </div>
    </div>

    <h2 class="no-toc">Code</h2>

    === "HTML"
        ```html
        <div data-theme>
            <div class="state-box">
                <div class="dropdown-wrapper input-wrapper input-outlined trailing-icon">
                    <div class="input-field dropdown-field trailing-icon error">
                        <span class="dropdown-value">Select option</span>
                        <span class="input-icon trailing" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" fill="currentColor"/>
                                <rect x="11" y="6" width="2" height="8" fill="#fff" rx="1"/>
                                <circle cx="12" cy="17" r="1.2" fill="#fff"/>
                            </svg>
                        </span>
                    </div>
                    <label class="input-label">Label</label>
                    <ul class="dropdown-menu">
                        <li class="dropdown-option">Option 1</li>
                        <li class="dropdown-option">Option 2</li>
                        <li class="dropdown-option">Option 3</li>
                    </ul>
                </div>
            </div>
        </div>
        ```

    === "CSS"
        ```css
        --8<-- "components/sass/components/_dropdowns.scss:dropdown-base"
        ```

    === "JS"
        ```js
        --8<-- "javascript/dropdown.js:dropdown-js"
        ```