---
hide:
  - toc
---

# **Checkboxes**
## Class
=== "Checked"
    <div class="btn-grid-1">
        <div class="grid-items">
            <div class="checkbox">
                <input type="checkbox" checked id="checkbox-checked-1">
                <span class="checkbox-visual"></span>
            </div>
        </div>
    </div>
    <br>
    ## States
    === "Enabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox" checked id="checkbox-enabled-1">
                        <span class="checkbox-visual"></span>
                    </div>
                </div>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="checkbox checkbox-hover">
                    <div class="checkbox-container">
                        <input type="checkbox" checked id="checkbox-hover-1">
                        <span class="checkbox-visual"></span>
                    </div>
                </div>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox" checked disabled id="checkbox-disabled-1">
                        <span class="checkbox-visual"></span>
                    </div>
                </div>
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
        <div class="checkbox checkbox-hover">
            <div class="checkbox-container">
                <input type="checkbox" checked>
                <span class="checkbox-visual"></span>
            </div>
        </div>
        ```

=== "Unchecked"
    <div class="btn-grid-1">
        <div class="grid-items">
            <div class="checkbox">
                <div class="checkbox-container">
                    <input type="checkbox" id="checkbox-unchecked-1">
                    <span class="checkbox-visual"></span>
                </div>
            </div>
        </div>
    </div>
    <br>
    ## States
    === "Enabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox" id="checkbox-unchecked-enabled-1">
                        <span class="checkbox-visual"></span>
                    </div>
                </div>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="checkbox checkbox-hover">
                    <div class="checkbox-container">
                        <input type="checkbox" id="checkbox-unchecked-hover-1">
                        <span class="checkbox-visual"></span>
                    </div>
                </div>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox" disabled id="checkbox-unchecked-disabled-1">
                        <span class="checkbox-visual"></span>
                    </div>
                </div>
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
        <div class="checkbox checkbox-hover">
            <div class="checkbox-container">
                <input type="checkbox">
                <span class="checkbox-visual"></span>
            </div>
        </div>
        ```

=== "Checked+Text"
    <div class="btn-grid-1">
        <div class="grid-items">
            <div class="checkbox">
                <div class="checkbox-container">
                    <input type="checkbox" checked id="checkbox-checked-text-1">
                    <span class="checkbox-visual"></span>
                </div>
                <label for="checkbox-checked-text-1" class="checkbox-text">Label</label>
            </div>
        </div>
    </div>
    <br>
    ## States
    === "Enabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox" checked id="checkbox-checked-text-enabled-1">
                        <span class="checkbox-visual"></span>
                    </div>
                    <label for="checkbox-checked-text-enabled-1" class="checkbox-text">Label</label>
                </div>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="checkbox checkbox-hover">
                    <div class="checkbox-container">
                        <input type="checkbox" checked id="checkbox-checked-text-hover-1">
                        <span class="checkbox-visual"></span>
                    </div>
                    <label for="checkbox-checked-text-hover-1" class="checkbox-text">Label</label>
                </div>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox" checked disabled id="checkbox-checked-text-disabled-1">
                        <span class="checkbox-visual"></span>
                    </div>
                    <label for="checkbox-checked-text-disabled-1" class="checkbox-text">Label</label>
                </div>
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
        <div class="checkbox checkbox-hover">
            <div class="checkbox-container">
                <input type="checkbox" checked id="checkbox-text-1">
                <span class="checkbox-visual"></span>
            </div>
            <label for="checkbox-text-1" class="checkbox-text">Label</label>
        </div>
        ```

=== "Unchecked+Text"
    <div class="btn-grid-1">
        <div class="grid-items">
            <div class="checkbox">
                <div class="checkbox-container">
                    <input type="checkbox" id="checkbox-unchecked-text-1">
                    <span class="checkbox-visual"></span>
                </div>
                <label for="checkbox-unchecked-text-1" class="checkbox-text">Label</label>
            </div>
        </div>
    </div>
    <br>
    ## States
    === "Enabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox" id="checkbox-unchecked-text-enabled-1">
                        <span class="checkbox-visual"></span>
                    </div>
                    <label for="checkbox-unchecked-text-enabled-1" class="checkbox-text">Label</label>
                </div>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="checkbox checkbox-hover">
                    <div class="checkbox-container">
                        <input type="checkbox" id="checkbox-unchecked-text-hover-1">
                        <span class="checkbox-visual"></span>
                    </div>
                    <label for="checkbox-unchecked-text-hover-1" class="checkbox-text">Label</label>
                </div>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="checkbox">
                    <div class="checkbox-container">
                        <input type="checkbox" disabled id="checkbox-unchecked-text-disabled-1">
                        <span class="checkbox-visual"></span>
                    </div>
                    <label for="checkbox-unchecked-text-disabled-1" class="checkbox-text">Label</label>
                </div>
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
        <div class="checkbox checkbox-hover">
            <div class="checkbox-container">
                <input type="checkbox" id="checkbox-text-2">
                <span class="checkbox-visual"></span>
            </div>
            <label for="checkbox-text-2" class="checkbox-text">Label</label>
        </div>
        ```