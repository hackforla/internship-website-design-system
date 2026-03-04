---
hide:
  - toc
---

<div class="page-header">
  <h1>Input Fields</h1>
  <a href="https://www.figma.com/design/TTRS2FWXsrymHYpPJL1IdH/Internship-Team-Main-file?node-id=2-54&p=f&t=LYP42X6K0roEV7TT-0" target="_blank" class="figma-link"> Figma <span class="material-icons-outlined">open_in_new</span>
  </a>
</div>

## Class

=== "No Icon"
    <div class="state-box">
      <div class="input-wrapper no-icon">
        <input id="noicon-preview" class="input-field with-label" type="text" aria-label="Preview input field" readonly>
        <label class="input-label" for="noicon-preview">Label Text</label>
      </div>
    </div>

    <h2 class="no-toc">States</h2>

    === "Unpopulated/Enabled"
        <div class="state-box">
            <div class="input-wrapper">
                <input id="noicon-ue" class="input-field with-label" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated enabled input field">
                <label class="input-label" for="noicon-ue">Label Text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>

        === "HTML"
            ```html
            <div class="input-wrapper">
                <input id="noicon-ue" class="input-field with-label" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated enabled input field">
                <label class="input-label" for="noicon-ue">Label Text</label>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon"
            ```

    === "Populated/Enabled"
        <div class="state-box">
            <div class="input-wrapper no-icon">
                <input id="noicon-pe" class="input-field has-value" type="text" value="Input Text" aria-label="Populated enabled input field">
                <label class="input-label" for="noicon-pe">Label text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>

        === "HTML"
            ```html
            <div class="input-wrapper no-icon">
                <input id="noicon-pe" class="input-field has-value" type="text" value="Input Text" aria-label="Populated enabled input field">
                <label class="input-label" for="noicon-pe">Label text</label>
            </div>

            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon"
            ```

    === "Unpopulated/Hovered"
        <div class="state-box">
            <div class="input-wrapper">
                <input id="noicon-uh" class="input-field with-label is-hover" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated hovered input field">
                <label class="input-label" for="noicon-uh">Label Text</label>
            </div>
        </div>
        

        <h2 class="no-toc">Code</h2>

        === "HTML"
            ```html
            <div class="input-wrapper">
                <input id="noicon-uh" class="input-field with-label is-hover" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated hovered input field">
                <label class="input-label" for="noicon-uh">Label Text</label>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon"
            ```

    === "Populated/Hovered"
        <div class="state-box">
            <div class="input-wrapper no-icon">
                <input id="noicon-ph" class="input-field has-value is-hover" type="text" value="Input Text" aria-label="Populated hovered input field">
                <label class="input-label" for="noicon-ph">Label text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper no-icon">
                <input id="noicon-ph" class="input-field has-value is-hover" type="text" value="Input Text" aria-label="Populated hovered input field">
                <label class="input-label" for="noicon-ph">Label text</label>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon"
            ```

    === "Unpopulated/Focused"
        <div class="state-box">
            <div class="input-wrapper">
                <input id="noicon-uf" class="input-field with-label is-focused" 
                    type="text" placeholder="Placeholder" readonly>
                <label class="input-label" for="noicon-uf">Label Text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper">
                <input id="noicon-uf" class="input-field with-label is-focused" 
                    type="text" placeholder="Placeholder" readonly>
                <label class="input-label" for="noicon-uf">Label Text</label>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon"
            ```

    === "Populated/Focused"
        <div class="state-box">
            <div class="input-wrapper no-icon">
                <input id="noicon-pf" class="input-field has-value is-focused" type="text" value="Input Text" aria-label="Populated focused input field">
                <label class="input-label" for="noicon-pf">Label text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper no-icon">
                <input id="noicon-pf" class="input-field has-value is-focused" type="text" value="Input Text" aria-label="Populated focused input field">
                <label class="input-label" for="noicon-pf">Label text</label>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon"
            ```

    === "Unpopulated/Error"
        <div class="state-box">
            <div class="input-wrapper">
                <input id="noicon-uee" class="input-field error with-label" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated error input field">
                <label class="input-label" for="noicon-uee">Label Text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper">
                <input id="noicon-uee" class="input-field error with-label" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated error input field">
                <label class="input-label" for="noicon-uee">Label Text</label>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon"
            ```

    === "Populated/Error"
        <div class="state-box">
            <div class="input-wrapper no-icon">
                <input id="noicon-pee" class="input-field error has-value" type="text" value="Input Text" aria-label="Populated error input field">
                <label class="input-label" for="noicon-pee">Label text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper no-icon">
                <input id="noicon-pee" class="input-field error has-value" type="text" value="Input Text" aria-label="Populated error input field">
                <label class="input-label" for="noicon-pee">Label text</label>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon"
            ```

    === "Unpopulated/Disabled"

        <div class="state-box">
            <div class="input-wrapper">
                <input id="noicon-ud" class="input-field with-label" type="text" disabled placeholder="Placeholder" readonly aria-label="Unpopulated disabled input field">
                <label class="input-label" for="noicon-ud">Label Text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>

        === "HTML"
            ```html
            <div class="input-wrapper">
                <input id="noicon-ud" class="input-field with-label" type="text" disabled placeholder="Placeholder" readonly aria-label="Unpopulated disabled input field">
                <label class="input-label" for="noicon-ud">Label Text</label>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon"
            ```

    === "Populated/Disabled"

        <div class="state-box">
            <div class="input-wrapper no-icon">
                <input id="noicon-pd" class="input-field has-value" type="text" value="Input Text" disabled aria-label="Populated disabled input field">
                <label class="input-label" for="noicon-pd">Label text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        
        === "HTML"
            ```html
            <div class="input-wrapper no-icon">
                <input id="noicon-pd" class="input-field has-value" type="text" value="Input Text" disabled aria-label="Populated disabled input field">
                <label class="input-label" for="noicon-pd">Label text</label>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon"
            ```


=== "Leading Icon"
    <div class="state-box">
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-ue" class="input-field with-label" type="text" placeholder="Placeholder" readonly aria-label="Leading icon unpopulated enabled input">
                <label class="input-label" for="leading-ue">Label Text</label>
            </div>
        </div>

    <h2 class="no-toc">States</h2>

    === "Unpopulated/Enabled"
        <div class="state-box">
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-ue" class="input-field with-label" type="text" placeholder="Placeholder" readonly aria-label="Leading icon unpopulated enabled input">
                <label class="input-label" for="leading-ue">Label Text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-ue" class="input-field with-label" type="text" placeholder="Placeholder" readonly aria-label="Leading icon unpopulated enabled input">
                <label class="input-label" for="leading-ue">Label Text</label>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon"
            ```

    === "Populated/Enabled"
        <div class="state-box">
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-pe" class="input-field has-value leading-icon" type="text" value="Input Text" aria-label="Populated enabled input field">
                <label class="input-label" for="leading-pe">Label text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-pe" class="input-field has-value leading-icon" type="text" value="Label Text" aria-label="Populated enabled input field">
                <label class="input-label" for="leading-pe">Label</label>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon"
            ```

    === "Unpopulated/Hovered"

        <div class="state-box">
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-uh" class="input-field with-label is-hover leading-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated hovered input field">
                <label class="input-label" for="leading-uh">Label Text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>

        === "HTML"
            ```html
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-uh" class="input-field with-label is-hover leading-icon" type="text" aria-label="Unpopulated hovered input field">
                <label class="input-label" for="leading-uh">Label Text</label>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon"
            ```

    === "Populated/Hovered"
        <div class="state-box">
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-ph" class="input-field has-value is-hover leading-icon" type="text" value="Input Text" aria-label="Populated hovered input field">
                <label class="input-label" for="leading-ph">Label text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-ph" class="input-field has-value is-hover leading-icon" type="text" value="Input Text" aria-label="Populated hovered input field">
                <label class="input-label" for="leading-ph">Label text</label>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon"
            ```

    === "Unpopulated/Focused"
        <div class="state-box">
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-uf" class="input-field with-label is-focused leading-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated focused input field">
                <label class="input-label" for="leading-uf">Label text</label>  
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-uf" class="input-field with-label is-focused leading-icon" type="text" aria-label="Unpopulated focused input field">
                <label class="input-label" for="leading-uf">Label text</label>  
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon"
            ```

    === "Populated/Focused"
        <div class="state-box">
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-pf" class="input-field has-value is-focused leading-icon" type="text" value="Input Text" aria-label="Populated focused input field">
                <label class="input-label" for="leading-pf">Label text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-pf" class="input-field has-value is-focused leading-icon" type="text" value="Input Text" aria-label="Populated focused input field">
                <label class="input-label" for="leading-pf">Label text</label>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon"
            ```

    === "Unpopulated/Error"
        <div class="state-box">
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-uee" class="input-field error with-label leading-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated error input field">
                <label class="input-label" for="leading-uee">Label Text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-uee" class="input-field error with-label leading-icon" type="text" aria-label="Unpopulated error input field">
                <label class="input-label" for="leading-uee">Label Text</label>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon"
            ```

    === "Populated/Error"
        <div class="state-box">
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-pee" class="input-field error has-value leading-icon" type="text" value="Input Text" aria-label="Populated error input field">
                <label class="input-label" for="leading-pee">Label text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>

        === "HTML"
            ```html
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-pee" class="input-field error has-value leading-icon" type="text" value="Input Text" aria-label="Populated error input field">
                <label class="input-label" for="leading-pee">Label text</label>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon"
            ```

    === "Unpopulated/Disabled"

        <div class="state-box">
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#9D9F9F" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#9D9F9F" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-ud" class="input-field with-label leading-icon" type="text" disabled aria-label="Unpopulated disabled input field">
                <label class="input-label" for="leading-ud">Label</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>

        === "HTML"
            ```html
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#9D9F9F" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#9D9F9F" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-ud" class="input-field with-label leading-icon" type="text" disabled aria-label="Unpopulated disabled input field">
                <label class="input-label" for="leading-ud">Label</label>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon"
            ```

    === "Populated/Disabled"
        <div class="state-box">
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#9D9F9F" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#9D9F9F" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-pd" class="input-field has-value leading-icon" type="text" value="Label Text" disabled aria-label="Populated disabled input field">
                <label class="input-label" for="leading-pd">Label Text</label>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>

        === "HTML"
            ```html
            <div class="input-wrapper leading-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#9D9F9F" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#9D9F9F" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-pd" class="input-field has-value leading-icon" type="text" value="Label Text" disabled aria-label="Populated disabled input field">
                <label class="input-label" for="leading-pd">Label Text</label>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon"
            ```


=== "Trailing Icon"
    <div class="state-box">
            <div class="input-wrapper trailing-icon">
                <input id="trailing-ue" class="input-field with-label trailing-icon" type="text" aria-label="Unpopulated enabled input field">
                <label class="input-label" for="trailing-ue">Label</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>

    <h2 class="no-toc">States</h2>

    === "Unpopulated/Enabled"
        <div class="state-box">
            <div class="input-wrapper trailing-icon">
                <input id="trailing-ue" class="input-field with-label trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated enabled input field">
                <label class="input-label" for="trailing-ue">Label</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon">
                <input id="trailing-ue" class="input-field with-label trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated enabled input field">
                <label class="input-label" for="trailing-ue">Label</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon"
            ```

    === "Populated/Enabled"
        <div class="state-box">
            <div class="input-wrapper trailing-icon">
                <input id="trailing-pe" class="input-field has-value trailing-icon" type="text" value="Input Text" aria-label="Populated enabled input field">
                <label class="input-label" for="trailing-pe">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon">
                <input id="trailing-pe" class="input-field has-value trailing-icon" type="text" value="Input Text" aria-label="Populated enabled input field">
                <label class="input-label" for="trailing-pe">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon"
            ```

    === "Unpopulated/Hovered"
        <div class="state-box">
            <div class="input-wrapper trailing-icon">
                <input id="trailing-uh" class="input-field with-label is-hover trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated hovered input field">
                <label class="input-label" for="trailing-uh">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon">
                <input id="trailing-uh" class="input-field with-label is-hover trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated hovered input field">
                <label class="input-label" for="trailing-uh">Label</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon"
            ```

    === "Populated/Hovered"
        <div class="state-box">
            <div class="input-wrapper trailing-icon">
                <input id="trailing-ph" class="input-field has-value is-hover trailing-icon" type="text" value="Input Text" aria-label="Populated hovered input field">
                <label class="input-label" for="trailing-ph">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon">
                <input id="trailing-ph" class="input-field has-value is-hover trailing-icon" type="text" value="Input Text" aria-label="Populated hovered input field">
                <label class="input-label" for="trailing-ph">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon"
            ```

    === "Unpopulated/Focused"
        <div class="state-box">
            <div class="input-wrapper trailing-icon">
                <input id="trailing-uf" class="input-field with-label is-focused trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated focused input field">
                <label class="input-label" for="trailing-uf">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon">
                <input id="trailing-uf" class="input-field with-label is-focused trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated focused input field">
                <label class="input-label" for="trailing-uf">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon"
            ```

    === "Populated/Focused"
        <div class="state-box">
            <div class="input-wrapper trailing-icon">
                <input id="trailing-pf" class="input-field has-value is-focused trailing-icon" type="text" value="Input Text" aria-label="Populated focused input field">
                <label class="input-label" for="trailing-pf">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon">
                <input id="trailing-pf" class="input-field has-value is-focused trailing-icon" type="text" value="Input Text" aria-label="Populated focused input field">
                <label class="input-label" for="trailing-pf">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon"
            ```

    === "Unpopulated/Error"
        <div class="state-box">
            <div class="input-wrapper trailing-icon">
                <input id="trailing-uee" class="input-field error with-label trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated error input field">
                <label class="input-label" for="trailing-uee">Label Text</label>
                <span class="input-icon trailing error" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#D32F2F"/>
                        <path d="M12 7V13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="17" r="1.5" fill="white"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon">
                <input id="trailing-uee" class="input-field error with-label trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated error input field">
                <label class="input-label" for="trailing-uee">Label Text</label>
                <span class="input-icon trailing error" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#D32F2F"/>
                        <path d="M12 7V13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="17" r="1.5" fill="white"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon"
            ```

    === "Populated/Error"
        <div class="state-box">
            <div class="input-wrapper trailing-icon">
                <input id="trailing-pee" class="input-field error has-value trailing-icon" type="text" value="Input Text" aria-label="Populated error input field">
                <label class="input-label" for="trailing-pee">Label text</label>
                <span class="input-icon trailing error" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#D32F2F"/>
                        <path d="M12 7V13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="17" r="1.5" fill="white"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon">
                <input id="trailing-pee" class="input-field error has-value trailing-icon" type="text" value="Input Text" aria-label="Populated error input field">
                <label class="input-label" for="trailing-pee">Label text</label>
                <span class="input-icon trailing error" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#D32F2F"/>
                        <path d="M12 7V13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="17" r="1.5" fill="white"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon"
            ```

    === "Unpopulated/Disabled"
        <div class="state-box">
            <div class="input-wrapper trailing-icon">
                <input id="trailing-ud" class="input-field with-label trailing-icon" type="text" disabled aria-label="Unpopulated disabled input field">
                <label class="input-label" for="trailing-ud">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon">
                <input id="trailing-ud" class="input-field with-label trailing-icon" type="text" disabled aria-label="Unpopulated disabled input field">
                <label class="input-label" for="trailing-ud">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon"
            ```

    === "Populated/Disabled"
        <div class="state-box">
            <div class="input-wrapper trailing-icon">
                <input id="trailing-pd" class="input-field has-value trailing-icon" type="text" value="Input Text" disabled aria-label="Populated disabled input field">
                <label class="input-label" for="trailing-pd">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon">
                <input id="trailing-pd" class="input-field has-value trailing-icon" type="text" value="Example Text" disabled aria-label="Populated disabled input field">
                <label class="input-label" for="trailing-pd">Label</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon"
            ```


=== "No Icon + Supp. Text"
    <div class="state-box">
        <div class="input-wrapper no-icon-supporting">
            <input id="noicon-support-ue" class="input-field with-label" type="text" aria-label="Unpopulated enabled input field">
            <label class="input-label" for="noicon-support-ue">Label Text</label>
            <p class="input-helper">Supporting text</p>
        </div>
    </div>

    <h2 class="no-toc">States</h2>

    === "Unpopulated/Enabled"
        <div class="state-box">
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-ue" class="input-field with-label" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated enabled input field">
                <label class="input-label" for="noicon-support-ue">Label Text</label>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-ue" class="input-field with-label" type="text" aria-label="Unpopulated enabled input field">
                <label class="input-label" for="noicon-support-ue">Label Text</label>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon-supporting"
            ```

    === "Populated/Enabled"
        <div class="state-box">
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-pe" class="input-field has-value" type="text" value="Input Text" aria-label="Populated enabled input field">
                <label class="input-label" for="noicon-support-pe">Label text</label>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-pe" class="input-field has-value" type="text" value="Input Text" aria-label="Populated enabled input field">
                <label class="input-label" for="noicon-support-pe">Label text</label>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon-supporting"
            ```

    === "Unpopulated/Hovered"
        <div class="state-box">
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-uh" class="input-field with-label is-hover" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated hovered input field">
                <label class="input-label" for="noicon-support-uh">Label Text</label>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-uh" class="input-field with-label is-hover" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated hovered input field">
                <label class="input-label" for="noicon-support-uh">Label Text</label>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon-supporting"
            ```

    === "Populated/Hovered"
        <div class="state-box">
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-ph" class="input-field has-value is-hover" type="text" value="Input Text" aria-label="Populated hovered input field">
                <label class="input-label" for="noicon-support-ph">Label text</label>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-ph" class="input-field has-value is-hover" type="text" value="Input Text" aria-label="Populated hovered input field">
                <label class="input-label" for="noicon-support-ph">Label text</label>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon-supporting"
            ```

    === "Unpopulated/Focused"
        <div class="state-box">
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-uf" class="input-field with-label is-focused" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated focused input field">
                <label class="input-label" for="noicon-support-uf">Label Text</label>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-uf" class="input-field with-label is-focused" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated focused input field">
                <label class="input-label" for="noicon-support-uf">Label Text</label>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon-supporting"
            ```

    === "Populated/Focused"
        <div class="state-box">
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-pf" class="input-field has-value is-focused" type="text" value="Input Text" aria-label="Populated focused input field">
                <label class="input-label" for="noicon-support-pf">Label text</label>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-pf" class="input-field has-value is-focused" type="text" value="Input Text" aria-label="Populated focused input field">
                <label class="input-label" for="noicon-support-pf">Label text</label>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon-supporting"
            ```

    === "Unpopulated/Error"
        <div class="state-box">
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-uee" class="input-field error with-label" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated error input field">
                <label class="input-label" for="noicon-support-uee">Label Text</label>
                <p class="input-helper error">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-uee" class="input-field error with-label" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated error input field">
                <label class="input-label" for="noicon-support-uee">Label Text</label>
                <p class="input-helper error">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon-supporting"
            ```

    === "Populated/Error"
        <div class="state-box">
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-pee" class="input-field error has-value" type="text" value="Label Text" aria-label="Populated error input field">
                <label class="input-label" for="noicon-support-pee">Label text</label>
                <p class="input-helper error">Supporting Text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-pee" class="input-field error has-value" type="text" value="Label Text" aria-label="Populated error input field">
                <label class="input-label" for="noicon-support-pee">Label text</label>
                <p class="input-helper error">Supporting Text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon-supporting"
            ```

    === "Unpopulated/Disabled"
        <div class="state-box">
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-ud" class="input-field with-label" type="text" disabled aria-label="Unpopulated disabled input field">
                <label class="input-label" for="noicon-support-ud">Label Text</label>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-ud" class="input-field with-label" type="text" disabled aria-label="Unpopulated disabled input field">
                <label class="input-label" for="noicon-support-ud">Label Text</label>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon-supporting"
            ```

    === "Populated/Disabled"
        <div class="state-box">
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-pd" class="input-field has-value" type="text" value="Label Text" disabled aria-label="Populated disabled input field">
                <label class="input-label" for="noicon-support-pd">Label text</label>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper no-icon-supporting">
                <input id="noicon-support-pd" class="input-field has-value" type="text" value="Label Text" disabled aria-label="Populated disabled input field">
                <label class="input-label" for="noicon-support-pd">Label text</label>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:no-icon-supporting"
            ```


=== "Leading Icon + Supp. Text"
    <div class="state-box">
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-ue" class="input-field with-label leading-icon" type="text" aria-label="Unpopulated enabled input field">
                <label class="input-label" for="leading-support-ue">Label Text</label>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>
    
    <h2 class="no-toc">States</h2>

    === "Unpopulated/Enabled"
        <div class="state-box">
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-ue" class="input-field with-label leading-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated enabled input field">
                <label class="input-label" for="leading-support-ue">Label Text</label>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-ue" class="input-field with-label leading-icon" type="text" aria-label="Unpopulated enabled input field">
                <label class="input-label" for="leading-support-ue">Label Text</label>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon-supporting"
            ```

    === "Populated/Enabled"
        <div class="state-box">
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-pe" class="input-field has-value leading-icon" type="text" value="Input Text" aria-label="Populated enabled input field">
                <label class="input-label" for="leading-support-pe">Label text</label>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-pe" class="input-field has-value leading-icon" type="text" value="Input Text" aria-label="Populated enabled input field">
                <label class="input-label" for="leading-support-pe">Label text</label>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon-supporting"
            ```

    === "Unpopulated/Hovered"
        <div class="state-box">
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-uh" class="input-field with-label is-hover leading-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated hovered input field">
                <label class="input-label" for="leading-support-uh">Label Text</label>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-uh" class="input-field with-label is-hover leading-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated hovered input field">
                <label class="input-label" for="leading-support-uh">Label Text</label>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon-supporting"
            ```

    === "Populated/Hovered"
        <div class="state-box">
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-ph" class="input-field has-value is-hover leading-icon" type="text" value="Input Text" aria-label="Populated hovered input field">
                <label class="input-label" for="leading-support-ph">Label text</label>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-ph" class="input-field has-value is-hover leading-icon" type="text" value="Input Text" aria-label="Populated hovered input field">
                <label class="input-label" for="leading-support-ph">Label text</label>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon-supporting"
            ```

    === "Unpopulated/Focused"
        <div class="state-box">
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-uf" class="input-field with-label is-focused leading-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated focused input field">
                <label class="input-label" for="leading-support-uf">Label Text</label>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>


        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-uf" class="input-field with-label is-focused leading-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated focused input field">
                <label class="input-label" for="leading-support-uf">Label Text</label>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon-supporting"
            ```

    === "Populated/Focused"
        <div class="state-box">
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-pf" class="input-field has-value is-focused leading-icon" type="text" value="Label Text" aria-label="Populated focused input field">
                <label class="input-label" for="leading-support-pf">Label text</label>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-pf" class="input-field has-value is-focused leading-icon" type="text" value="Label Text" aria-label="Populated focused input field">
                <label class="input-label" for="leading-support-pf">Label text</label>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon-supporting"
            ```

    === "Unpopulated/Error"
        <div class="state-box">
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-uee" class="input-field error with-label leading-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated error input field">
                <label class="input-label" for="leading-support-uee">Label Text</label>
                <p class="input-helper error">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-uee" class="input-field error with-label leading-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated error input field">
                <label class="input-label" for="leading-support-uee">Label Text</label>
                <p class="input-helper error">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon-supporting"
            ```

    === "Populated/Error"
        <div class="state-box">
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-pee" class="input-field error has-value leading-icon" type="text" value="Label Text" aria-label="Populated error input field">
                <label class="input-label" for="leading-support-pee">Label text</label>
                <p class="input-helper error">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-pee" class="input-field error has-value leading-icon" type="text" value="Label Text" aria-label="Populated error input field">
                <label class="input-label" for="leading-support-pee">Label text</label>
                <p class="input-helper error">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon-supporting"
            ```

    === "Unpopulated/Disabled"
        <div class="state-box">
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#9D9F9F" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#9D9F9F" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-ud" class="input-field with-label leading-icon" type="text" disabled aria-label="Unpopulated disabled input field">
                <label class="input-label" for="leading-support-ud">Label Text</label>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="stroke="#9D9F9F"" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="stroke="#9D9F9F" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-ud" class="input-field with-label leading-icon" type="text" disabled aria-label="Unpopulated disabled input field">
                <label class="input-label" for="leading-support-ud">Label Text</label>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon-supporting"
            ```

    === "Populated/Disabled"
        <div class="state-box">
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#9D9F9F" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#9D9F9F" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-pd" class="input-field has-value leading-icon" type="text" value="Label Text" disabled aria-label="Populated disabled input field">
                <label class="input-label" for="leading-support-pd">Label text</label>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="stroke="#9D9F9F"" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="stroke="#9D9F9F"" stroke-width="2"/>
                    </svg>
                </span>
                <input id="leading-support-pd" class="input-field has-value leading-icon" type="text" value="Label Text" disabled aria-label="Populated disabled input field">
                <label class="input-label" for="leading-support-pd">Label text</label>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-icon-supporting"
            ```

=== "Trailing Icon + Supp. Text"
    <div class="state-box">
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-ue" class="input-field with-label trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated enabled input field">
                <label class="input-label" for="trailing-support-ue">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

    <h2 class="no-toc">States</h2>

    === "Unpopulated/Enabled"
        <div class="state-box">
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-ue" class="input-field with-label trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated enabled input field">
                <label class="input-label" for="trailing-support-ue">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-ue" class="input-field with-label trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated enabled input field">
                <label class="input-label" for="trailing-support-ue">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon-supporting"
            ```

    === "Populated/Enabled"
        <div class="state-box">
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-pe" class="input-field has-value trailing-icon" type="text" value="Input Text" aria-label="Populated enabled input field">
                <label class="input-label" for="trailing-support-pe">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-pe" class="input-field has-value trailing-icon" type="text" value="Input Text" aria-label="Populated enabled input field">
                <label class="input-label" for="trailing-support-pe">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon-supporting"
            ```

    === "Unpopulated/Hovered"
        <div class="state-box">
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-uh" class="input-field with-label is-hover trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated hovered input field">
                <label class="input-label" for="trailing-support-uh">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-uh" class="input-field with-label is-hover trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated hovered input field">
                <label class="input-label" for="trailing-support-uh">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon-supporting"
            ```

    === "Populated/Hovered"
        <div class="state-box">
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-ph" class="input-field has-value is-hover trailing-icon" type="text" value="Input Text" aria-label="Populated hovered input field">
                <label class="input-label" for="trailing-support-ph">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-ph" class="input-field has-value is-hover trailing-icon" type="text" value="Input Text" aria-label="Populated hovered input field">
                <label class="input-label" for="trailing-support-ph">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon-supporting"
            ```

    === "Unpopulated/Focused"
        <div class="state-box">
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-uf" class="input-field with-label is-focused trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated focused input field">
                <label class="input-label" for="trailing-support-uf">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-uf" class="input-field with-label is-focused trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated focused input field">
                <label class="input-label" for="trailing-support-uf">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon-supporting"
            ```

    === "Populated/Focused"
        <div class="state-box">
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-pf" class="input-field has-value is-focused trailing-icon" type="text" value="Input Text" aria-label="Populated focused input field">
                <label class="input-label" for="trailing-support-pf">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-pf" class="input-field has-value is-focused trailing-icon" type="text" value="Input Text" aria-label="Populated focused input field">
                <label class="input-label" for="trailing-support-pf">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon-supporting"
            ```

    === "Unpopulated/Error"
        <div class="state-box">
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-uee" class="input-field error with-label trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated error input field">
                <label class="input-label" for="trailing-support-uee">Label Text</label>
                <span class="input-icon trailing error" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#D32F2F"/>
                        <path d="M12 7V13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="17" r="1.5" fill="white"/>
                    </svg>
                </span>
                <p class="input-helper error">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-uee" class="input-field error with-label trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated error input field">
                <label class="input-label" for="trailing-support-uee">Label Text</label>
                <span class="input-icon trailing error" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#D32F2F"/>
                        <path d="M12 7V13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="17" r="1.5" fill="white"/>
                    </svg>
                </span>
                <p class="input-helper error">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon-supporting"
            ```

    === "Populated/Error"
        <div class="state-box">
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-pee" class="input-field error has-value trailing-icon" type="text" value="Input Text" aria-label="Populated error input field">
                <label class="input-label" for="trailing-support-pee">Label text</label>
                <span class="input-icon trailing error" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#D32F2F"/>
                        <path d="M12 7V13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="17" r="1.5" fill="white"/>
                    </svg>
                </span>
                <p class="input-helper error">Error message here</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-pee" class="input-field error has-value trailing-icon" type="text" value="Input Text" aria-label="Populated error input field">
                <label class="input-label" for="trailing-support-pee">Label text</label>
                <span class="input-icon trailing error" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#D32F2F"/>
                        <path d="M12 7V13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="17" r="1.5" fill="white"/>
                    </svg>
                </span>
                <p class="input-helper error">Error message here</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon-supporting"
            ```

    === "Unpopulated/Disabled"
        <div class="state-box">
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-ud" class="input-field with-label trailing-icon" type="text" disabled aria-label="Unpopulated disabled input field">
                <label class="input-label" for="trailing-support-ud">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-ud" class="input-field with-label trailing-icon" type="text" disabled aria-label="Unpopulated disabled input field">
                <label class="input-label" for="trailing-support-ud">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon-supporting"
            ```

    === "Populated/Disabled"
        <div class="state-box">
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-pd" class="input-field has-value trailing-icon" type="text" value="Input Text" disabled aria-label="Populated disabled input field">
                <label class="input-label" for="trailing-support-pd">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper trailing-icon-supporting">
                <input id="trailing-support-pd" class="input-field has-value trailing-icon" type="text" value="Input Text" disabled aria-label="Populated disabled input field">
                <label class="input-label" for="trailing-support-pd">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:trailing-icon-supporting"
            ```


=== "Leading + Trailing Icon"
    <div class="state-box">
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-ue" class="input-field with-label leading-icon trailing-icon" type="text" aria-label="Unpopulated enabled input field">
                <label class="input-label" for="lt-ue">Label</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>

    <h2 class="no-toc">States</h2>

    === "Unpopulated/Enabled"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-ue" class="input-field with-label leading-icon trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated enabled input field">
                <label class="input-label" for="lt-ue">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>

        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-ue" class="input-field with-label leading-icon trailing-icon" type="text" aria-label="Unpopulated enabled input field">
                <label class="input-label" for="lt-ue">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon"
            ```

    === "Populated/Enabled"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-pe" class="input-field has-value leading-icon trailing-icon" type="text" value="Label Text" aria-label="Populated enabled input field">
                <label class="input-label" for="lt-pe">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-pe" class="input-field has-value leading-icon trailing-icon" type="text" value="Input Text" aria-label="Populated enabled input field">
                <label class="input-label" for="lt-pe">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon"
            ```

    === "Unpopulated/Hovered"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-uh" class="input-field with-label is-hover leading-icon trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated hovered input field">
                <label class="input-label" for="lt-uh">Label</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-uh" class="input-field with-label is-hover leading-icon trailing-icon" type="text" aria-label="Unpopulated hovered input field">
                <label class="input-label" for="lt-uh">Label</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon"
            ```

    === "Populated/Hovered"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-ph" class="input-field has-value is-hover leading-icon trailing-icon" type="text" value="Label Text" aria-label="Populated hovered input field">
                <label class="input-label" for="lt-ph">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-ph" class="input-field has-value is-hover leading-icon trailing-icon" type="text" value="Label Text" aria-label="Populated hovered input field">
                <label class="input-label" for="lt-ph">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon"
            ```

    === "Unpopulated/Focused"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-uf" class="input-field with-label is-focused leading-icon trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated focused input field">
                <label class="input-label" for="lt-uf">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-uf" class="input-field with-label is-focused leading-icon trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated focused input field">
                <label class="input-label" for="lt-uf">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon"
            ```

    === "Populated/Focused"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-pf" class="input-field has-value is-focused leading-icon trailing-icon" type="text" value="Label Text" aria-label="Populated focused input field">
                <label class="input-label" for="lt-pf">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-pf" class="input-field has-value is-focused leading-icon trailing-icon" type="text" value="Label Text" aria-label="Populated focused input field">
                <label class="input-label" for="lt-pf">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon"
            ```

    === "Unpopulated/Error"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-uee" class="input-field error with-label leading-icon trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated error input field">
                <label class="input-label" for="lt-uee">Label Text</label>
                <span class="input-icon trailing error" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#D32F2F"/>
                        <path d="M12 7V13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="17" r="1.5" fill="white"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-uee" class="input-field error with-label leading-icon trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated error input field">
                <label class="input-label" for="lt-uee">Label Text</label>
                <span class="input-icon trailing error" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#D32F2F"/>
                        <path d="M12 7V13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="17" r="1.5" fill="white"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon"
            ```

    === "Populated/Error"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-pee" class="input-field error has-value leading-icon trailing-icon" type="text" value="Label Text" aria-label="Populated error input field">
                <label class="input-label" for="lt-pee">Label text</label>
                <span class="input-icon trailing error" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#D32F2F"/>
                        <path d="M12 7V13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="17" r="1.5" fill="white"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-pee" class="input-field error has-value leading-icon trailing-icon" type="text" value="Label Text" aria-label="Populated error input field">
                <label class="input-label" for="lt-pee">Label text</label>
                <span class="input-icon trailing error" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#D32F2F"/>
                        <path d="M12 7V13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="17" r="1.5" fill="white"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon"
            ```

    === "Unpopulated/Disabled"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#9D9F9F" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#9D9F9F" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-ud" class="input-field with-label leading-icon trailing-icon" type="text" disabled aria-label="Unpopulated disabled input field">
                <label class="input-label" for="lt-ud">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#9D9F9F" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#9D9F9F" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-ud" class="input-field with-label leading-icon trailing-icon" type="text" disabled aria-label="Unpopulated disabled input field">
                <label class="input-label" for="lt-ud">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon"
            ```

    === "Populated/Disabled"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#9D9F9F" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#9D9F9F" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-pd" class="input-field has-value leading-icon trailing-icon" type="text" value="Label Text" disabled aria-label="Populated disabled input field">
                <label class="input-label" for="lt-pd">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#9D9F9F" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#9D9F9F" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lt-pd" class="input-field has-value leading-icon trailing-icon" type="text" value="Label Text" disabled aria-label="Populated disabled input field">
                <label class="input-label" for="lt-pd">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon"
            ```


=== "Leading + Trailing Icon + Supporting Text"
    <div class="state-box">
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-ue" class="input-field with-label leading-icon trailing-icon" type="text" aria-label="Unpopulated enabled input field">
                <label class="input-label" for="lts-ue">Label</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

    <h2 class="no-toc">States</h2>

    === "Unpopulated/Enabled"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-ue" class="input-field with-label leading-icon trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated enabled input field">
                <label class="input-label" for="lts-ue">Label</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-ue" class="input-field with-label leading-icon trailing-icon" type="text" aria-label="Unpopulated enabled input field">
                <label class="input-label" for="lts-ue">Label</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon-supporting"
            ```

    === "Populated/Enabled"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-pe" class="input-field has-value leading-icon trailing-icon" type="text" value="Input Text" aria-label="Populated enabled input field">
                <label class="input-label" for="lts-pe">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-pe" class="input-field has-value leading-icon trailing-icon" type="text" value="Input Text" aria-label="Populated enabled input field">
                <label class="input-label" for="lts-pe">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon-supporting"
            ```

    === "Unpopulated/Hovered"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-uh" class="input-field with-label is-hover leading-icon trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated hovered input field">
                <label class="input-label" for="lts-uh">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-uh" class="input-field with-label is-hover leading-icon trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated hovered input field">
                <label class="input-label" for="lts-uh">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon-supporting"
            ```

    === "Populated/Hovered"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-ph" class="input-field has-value is-hover leading-icon trailing-icon" type="text" value="Label Text" aria-label="Populated hovered input field">
                <label class="input-label" for="lts-ph">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-ph" class="input-field has-value is-hover leading-icon trailing-icon" type="text" value="Label Text" aria-label="Populated hovered input field">
                <label class="input-label" for="lts-ph">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon-supporting"
            ```

    === "Unpopulated/Focused"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-uf" class="input-field with-label is-focused leading-icon trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated focused input field">
                <label class="input-label" for="lts-uf">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-uf" class="input-field with-label is-focused leading-icon trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated focused input field">
                <label class="input-label" for="lts-uf">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon-supporting"
            ```

    === "Populated/Focused"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-pf" class="input-field has-value is-focused leading-icon trailing-icon" type="text" value="Input Text" aria-label="Populated focused input field">
                <label class="input-label" for="lts-pf">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-pf" class="input-field has-value is-focused leading-icon trailing-icon" type="text" value="Input Text" aria-label="Populated focused input field">
                <label class="input-label" for="lts-pf">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon-supporting"
            ```

    === "Unpopulated/Error"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-uee" class="input-field error with-label leading-icon trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated error input field">
                <label class="input-label" for="lts-uee">Label Text</label>
                <span class="input-icon trailing error" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#D32F2F"/>
                        <path d="M12 7V13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="17" r="1.5" fill="white"/>
                    </svg>
                </span>
                <p class="input-helper error">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-uee" class="input-field error with-label leading-icon trailing-icon" type="text" placeholder="Placeholder" readonly aria-label="Unpopulated error input field">
                <label class="input-label" for="lts-uee">Label Text</label>
                <span class="input-icon trailing error" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#D32F2F"/>
                        <path d="M12 7V13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="17" r="1.5" fill="white"/>
                    </svg>
                </span>
                <p class="input-helper error">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon-supporting"
            ```

    === "Populated/Error"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-pee" class="input-field error has-value leading-icon trailing-icon" type="text" value="Label Text" aria-label="Populated error input field">
                <label class="input-label" for="lts-pee">Label text</label>
                <span class="input-icon trailing error" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#D32F2F"/>
                        <path d="M12 7V13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="17" r="1.5" fill="white"/>
                    </svg>
                </span>
                <p class="input-helper error">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#000000" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#000000" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-pee" class="input-field error has-value leading-icon trailing-icon" type="text" value="Label Text" aria-label="Populated error input field">
                <label class="input-label" for="lts-pee">Label text</label>
                <span class="input-icon trailing error" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#D32F2F"/>
                        <path d="M12 7V13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="17" r="1.5" fill="white"/>
                    </svg>
                </span>
                <p class="input-helper error">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon-supporting"
            ```

    === "Unpopulated/Disabled"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#9D9F9F" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#9D9F9F" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-ud" class="input-field with-label leading-icon trailing-icon" type="text" disabled aria-label="Unpopulated disabled input field">
                <label class="input-label" for="lts-ud">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#9D9F9F" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#9D9F9F" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-ud" class="input-field with-label leading-icon trailing-icon" type="text" disabled aria-label="Unpopulated disabled input field">
                <label class="input-label" for="lts-ud">Label Text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon-supporting"
            ```

    === "Populated/Disabled"
        <div class="state-box">
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#9D9F9F" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#9D9F9F" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-pd" class="input-field has-value leading-icon trailing-icon" type="text" value="Label Text" disabled aria-label="Populated disabled input field">
                <label class="input-label" for="lts-pd">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
        </div>

        <h2 class="no-toc">Code</h2>
        === "HTML"
            ```html
            <div class="input-wrapper leading-trailing-icon-supporting">
                <span class="input-icon leading">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#9D9F9F" stroke-width="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#9D9F9F" stroke-width="2"/>
                    </svg>
                </span>
                <input id="lts-pd" class="input-field has-value leading-icon trailing-icon" type="text" value="Label Text" disabled aria-label="Populated disabled input field">
                <label class="input-label" for="lts-pd">Label text</label>
                <span class="input-icon trailing" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                <p class="input-helper">Supporting text</p>
            </div>
            ```
        === "CSS"
            ```css
            --8<-- "components/sass/components/_input-fields.scss:leading-trailing-icon-supporting"
            ```


---

## **Resources**
- [SASS file on GitHub](https://github.com/hackforla/internship-website-design-system/blob/main/docs/components/sass/components/_input-fields.scss)
- [Markdown file on GitHub](https://github.com/hackforla/internship-website-design-system/blob/main/docs/input-fields.md)
