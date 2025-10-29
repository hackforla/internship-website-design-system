git sa---
hide:
  - toc
---

# **Checkboxes**
## Class
=== "Checked"
    <div class="btn-grid-1">
        <div class="grid-items">
            <label class="checkbox" aria-label="Checkbox">
                <div class="checkbox-container">
                    <input type="checkbox" checked>
                    <span class="checkbox-visual"></span>
                </div>
            </label>
        </div>
    </div>
    <br>
    ## States
    === "Enabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <label class="checkbox" aria-label="Enabled checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox" checked>
                        <span class="checkbox-visual"></span>
                    </div>
                </label>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <label class="checkbox checkbox-hover" aria-label="Hover checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox" checked>
                        <span class="checkbox-visual"></span>
                    </div>
                </label>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <label class="checkbox" aria-label="Disabled checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox" checked disabled>
                        <span class="checkbox-visual"></span>
                    </div>
                </label>
            </div>
        </div>
    <br>
    ## Code
    === "CSS"
        ``` css
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-base"

        --8<-- "components/sass/components/_checkboxes.scss:checkbox-checked"
        ```
    === "HTML"
        ``` html
        <label class="checkbox checkbox-hover" aria-label="Checkbox">
            <div class="checkbox-container">
                <input type="checkbox" checked>
                <span class="checkbox-visual"></span>
            </div>
        </label>
        ```

=== "Unchecked"
    <div class="btn-grid-1">
        <div class="grid-items">
            <label class="checkbox" aria-label="Checkbox">
                <div class="checkbox-container">
                    <input type="checkbox">
                    <span class="checkbox-visual"></span>
                </div>
            </label>
        </div>
    </div>
    <br>
    ## States
    === "Enabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <label class="checkbox" aria-label="Enabled checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox">
                        <span class="checkbox-visual"></span>
                    </div>
                </label>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <label class="checkbox checkbox-hover" aria-label="Hover checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox">
                        <span class="checkbox-visual"></span>
                    </div>
                </label>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <label class="checkbox" aria-label="Disabled checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox" disabled>
                        <span class="checkbox-visual"></span>
                    </div>
                </label>
            </div>
        </div>
    <br>
    ## Code
    === "CSS"
        ``` css
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-base"

        --8<-- "components/sass/components/_checkboxes.scss:checkbox-unchecked"
        ```
    === "HTML"
        ``` html
        <label class="checkbox checkbox-hover" aria-label="Checkbox">
            <div class="checkbox-container">
                <input type="checkbox">
                <span class="checkbox-visual"></span>
            </div>
        </label>
        ```

=== "Checked+Text"
    <div class="btn-grid-1">
        <div class="grid-items">
            <label class="checkbox">
                <div class="checkbox-container">
                    <input type="checkbox" checked>
                    <span class="checkbox-visual"></span>
                </div>
                <label class="checkbox-visual" for="name">Label</label>
            </label>
        </div>
    </div>
    <br>
    ## States
    === "Enabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <label class="checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox" checked>
                        <span class="checkbox-visual"></span>
                    </div>
                    <label class="checkbox-visual" for="name">Label</label>
                </label>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="checkbox checkbox-hover">
                    <div class="checkbox-container">
                        <input type="checkbox" checked>
                        <span class="checkbox-visual"></span>
                    </div>
                    <label class="checkbox-visual" for="name">Label</label>
                </div>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <label class="checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox" checked disabled>
                        <span class="checkbox-visual"></span>
                    </div>
                    <label class="checkbox-visual" for="name">Label</label>
                </label>
            </div>
        </div>
    <br>
    ## Code
    === "CSS"
        ``` css
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-base"

        --8<-- "components/sass/components/_checkboxes.scss:checkbox-checked"

        --8<-- "components/sass/components/_checkboxes.scss:checkbox-label"
        ```
    === "HTML"
        ``` html
        <label class="checkbox checkbox-hover">
            <div class="checkbox-container">
                <input type="checkbox" checked>
                <span class="checkbox-visual"></span>
            </div>
            <label class="checkbox-visual" for="name">Label</label>
        </label>
        ```

=== "Unchecked+Text"
    <div class="btn-grid-1">
        <div class="grid-items">
            <label class="checkbox">
                <div class="checkbox-container">
                    <input type="checkbox">
                    <span class="checkbox-visual"></span>
                </div>
                <label class="checkbox-visual" for="name">Label</label>
            </label>
        </div>
    </div>
    <br>
    ## States
    === "Enabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <label class="checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox">
                        <span class="checkbox-visual"></span>
                    </div>
                    <label class="checkbox-visual" for="name">Label</label>
                </label>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <label class="checkbox checkbox-hover">
                    <div class="checkbox-container">
                        <input type="checkbox">
                        <span class="checkbox-visual"></span>
                    </div>
                    <label class="checkbox-visual" for="name">Label</label>
                </label>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <label class="checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox" disabled>
                        <span class="checkbox-visual"></span>
                    </div>
                    <label class="checkbox-visual" for="name">Label</label>
                </label>
            </div>
        </div>
    <br>
    ## Code
    === "CSS"
        ``` css
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-base"

        --8<-- "components/sass/components/_checkboxes.scss:checkbox-unchecked"
        
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-label"
        ```
    === "HTML"
        ``` html
        <label class="checkbox checkbox-hover">
            <div class="checkbox-container">
                <input type="checkbox">
                <span class="checkbox-visual"></span>
            </div>
            <label class="checkbox-visual" for="name">Label</label>
        </label>
        ```