---
hide:
  - toc
---

# **Dropdowns**

## Class

=== "Dropdown Base"
    <div class="state-box">
        <div class="dropdown-wrapper">
            <div id="dropdown-preview" class="dropdown-field with-label">
                <span class="dropdown-value"></span>
                <span class="dropdown-arrow">▾</span>
            </div>
            <label class="dropdown-label" for="dropdown-preview">Label Text</label>
        </div>
    </div>

    <h2 class="no-toc">States</h2>

    === "Unpopulated/Enabled"
        <div class="state-box">
            <div class="dropdown-wrapper">
                <div id="dropdown-ue" class="dropdown-field with-label">
                    <span class="dropdown-value"></span>
                    <span class="dropdown-arrow">▾</span>
                </div>
                <label class="dropdown-label" for="dropdown-ue">Label Text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>

        === "HTML"
            ```html
            <div class="dropdown-wrapper">
                <div id="dropdown-ue" class="dropdown-field with-label">
                    <span class="dropdown-value"></span>
                    <span class="dropdown-arrow">▾</span>
                </div>
                <label class="dropdown-label" for="dropdown-ue">Label Text</label>
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

    === "Populated/Enabled"
        <div class="state-box">
            <div class="dropdown-wrapper js-dropdown">
                <div id="dropdown-enabled" class="dropdown-field enabled has-value">
                    <span class="dropdown-value">Selected Item</span>
                    <span class="dropdown-arrow">▾</span>
                </div>
                <label class="dropdown-label" for="dropdown-enabled">Label text</label>
                <ul class="dropdown-menu">
                    <li class="dropdown-option" data-value="Option 1">Option 1</li>
                    <li class="dropdown-option" data-value="Option 2">Option 2</li>
                    <li class="dropdown-option" data-value="Option 3">Option 3</li>
                </ul>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>

        === "HTML"
            ```html
            <div class="state-box">
                <div class="dropdown-wrapper js-dropdown">
                    <div id="dropdown-enabled" class="dropdown-field enabled has-value">
                        <span class="dropdown-value">Selected Item</span>
                        <span class="dropdown-arrow">▾</span>
                    </div>
                    <label class="dropdown-label" for="dropdown-enabled">Label text</label>
                    <ul class="dropdown-menu">
                        <li class="dropdown-option" data-value="Option 1">Option 1</li>
                        <li class="dropdown-option" data-value="Option 2">Option 2</li>
                        <li class="dropdown-option" data-value="Option 3">Option 3</li>
                    </ul>
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

    === "Unpopulated/Hovered"
        <div class="state-box">
            <div class="dropdown-wrapper">
                <div id="dropdown-uh" class="dropdown-field with-label is-hover">
                    <span class="dropdown-value"></span>
                    <span class="dropdown-arrow">▾</span>
                </div>
                <label class="dropdown-label" for="dropdown-uh">Label Text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>

        === "HTML"
            ```html
            <div class="dropdown-wrapper">
                <div id="dropdown-uh" class="dropdown-field with-label is-hover">
                    <span class="dropdown-value"></span>
                    <span class="dropdown-arrow">▾</span>
                </div>
                <label class="dropdown-label" for="dropdown-uh">Label Text</label>
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

    === "Populated/Hovered"
        <div class="state-box">
            <div class="dropdown-wrapper js-dropdown">
                <div id="dropdown-enabled" class="dropdown-field hovered has-value">
                    <span class="dropdown-value">Selected Item</span>
                    <span class="dropdown-arrow">▾</span>
                </div>
                <label class="dropdown-label" for="dropdown-enabled">Label text</label>
                <ul class="dropdown-menu">
                    <li class="dropdown-option" data-value="Option 1">Option 1</li>
                    <li class="dropdown-option" data-value="Option 2">Option 2</li>
                    <li class="dropdown-option" data-value="Option 3">Option 3</li>
                </ul>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>

        === "HTML"
            ```html
            <div class="state-box">
                <div class="dropdown-wrapper js-dropdown">
                    <div id="dropdown-enabled" class="dropdown-field hovered has-value">
                        <span class="dropdown-value">Selected Item</span>
                        <span class="dropdown-arrow">▾</span>
                    </div>
                    <label class="dropdown-label" for="dropdown-enabled">Label text</label>
                    <ul class="dropdown-menu">
                        <li class="dropdown-option" data-value="Option 1">Option 1</li>
                        <li class="dropdown-option" data-value="Option 2">Option 2</li>
                        <li class="dropdown-option" data-value="Option 3">Option 3</li>
                    </ul>
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

    === "Unpopulated/Focused"
        <div class="state-box">
            <div class="dropdown-wrapper">
                <div id="dropdown-uf" class="dropdown-field with-label is-focused">
                    <span class="dropdown-value">Label Text</span>
                    <span class="dropdown-arrow">▾</span>
                </div>
                <label class="dropdown-label" for="dropdown-uf"></label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>

        === "HTML"
            ```html
            <div class="dropdown-wrapper">
                <div id="dropdown-uf" class="dropdown-field with-label is-focused">
                    <span class="dropdown-value"></span>
                    <span class="dropdown-arrow">▾</span>
                </div>
                <label class="dropdown-label" for="dropdown-uf">Label Text</label>
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

    === "Populated/Focused"
        <div class="state-box">
            <div class="dropdown-wrapper js-dropdown">
                <div id="dropdown-enabled" class="dropdown-field focused has-value">
                    <span class="dropdown-value">Selected Item</span>
                    <span class="dropdown-arrow">▾</span>
                </div>
                <label class="dropdown-label" for="dropdown-enabled">Label text</label>
                <ul class="dropdown-menu">
                    <li class="dropdown-option" data-value="Option 1">Option 1</li>
                    <li class="dropdown-option" data-value="Option 2">Option 2</li>
                    <li class="dropdown-option" data-value="Option 3">Option 3</li>
                </ul>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>

        === "HTML"
            ```html
            <div class="state-box">
                <div class="dropdown-wrapper js-dropdown">
                    <div id="dropdown-enabled" class="dropdown-field focused has-value">
                        <span class="dropdown-value">Selected Item</span>
                        <span class="dropdown-arrow">▾</span>
                    </div>
                    <label class="dropdown-label" for="dropdown-enabled">Label text</label>
                    <ul class="dropdown-menu">
                        <li class="dropdown-option" data-value="Option 1">Option 1</li>
                        <li class="dropdown-option" data-value="Option 2">Option 2</li>
                        <li class="dropdown-option" data-value="Option 3">Option 3</li>
                    </ul>
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

    === "Unpopulated/Error"
        <div class="state-box">
            <div class="dropdown-wrapper">
                <div id="dropdown-uee" class="dropdown-field error with-label">
                    <span class="dropdown-value"></span>
                    <span class="dropdown-arrow">▾</span>
                </div>
                <label class="dropdown-label" for="dropdown-uee">Label Text</label>
                <div class="dropdown-helper error">Supporting text</div>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>

        === "HTML"
            ```html
            <div class="dropdown-wrapper">
                <div id="dropdown-uee" class="dropdown-field error with-label">
                    <span class="dropdown-value"></span>
                    <span class="dropdown-arrow">▾</span>
                </div>
                <label class="dropdown-label" for="dropdown-uee">Label Text</label>
                <div class="dropdown-helper error">Supporting text</div>
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

    === "Populated/Error"
        <div class="state-box">
                <div class="dropdown-wrapper js-dropdown">
                    <div id="dropdown-enabled" class="dropdown-field error has-value">
                        <span class="dropdown-value">Selected Item</span>
                        <span class="dropdown-arrow">▾</span>
                    </div>
                    <label class="dropdown-label" for="dropdown-enabled">Label text</label>
                    <ul class="dropdown-menu">
                        <li class="dropdown-option" data-value="Option 1">Option 1</li>
                        <li class="dropdown-option" data-value="Option 2">Option 2</li>
                        <li class="dropdown-option" data-value="Option 3">Option 3</li>
                    </ul>
                    <div class="dropdown-helper error">Supporting text</div>
                </div>
        </div>


        <h2 class="no-toc">Code</h2>

        === "HTML"
            ```html
            <div class="state-box">
                <div class="dropdown-wrapper js-dropdown">
                    <div id="dropdown-enabled" class="dropdown-field error has-value">
                        <span class="dropdown-value">Selected Item</span>
                        <span class="dropdown-arrow">▾</span>
                    </div>
                    <label class="dropdown-label" for="dropdown-enabled">Label text</label>
                    <ul class="dropdown-menu">
                        <li class="dropdown-option" data-value="Option 1">Option 1</li>
                        <li class="dropdown-option" data-value="Option 2">Option 2</li>
                        <li class="dropdown-option" data-value="Option 3">Option 3</li>
                    </ul>
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
