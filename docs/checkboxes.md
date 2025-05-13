---
hide:
  - toc
---

# **Checkboxes**
## Class
=== "Checked"
    <div class="btn-grid-1">
        <div class="grid-items checkbox">
            <input type="checkbox" class="checkbox-base" id="checkbox-checked" checked>
            <label for="checkbox-checked" class="visually-hidden">Checked checkbox</label>
        </div>
    </div>
    <br>
    ## States
    === "Enabled"
        <div class="btn-grid-1">
            <div class="grid-items checkbox">
                <input type="checkbox" class="checkbox-base checkbox-enabled" id="checkbox-checked-enabled" checked>
                <label for="checkbox-checked-enabled" class="visually-hidden">Enabled checked checkbox</label>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items checkbox checkbox-hover">
                <input type="checkbox" class="checkbox-base" id="checkbox-checked-hover" checked>
                <label for="checkbox-checked-hover" class="visually-hidden">Hover checked checkbox</label>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items checkbox">
                <input type="checkbox" class="checkbox-base" id="checkbox-checked-disabled" checked disabled>
                <label for="checkbox-checked-disabled" class="visually-hidden">Disabled checked checkbox</label>
            </div>
        </div>
    <br>
    ## Code
    === "CSS"
        ``` css
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-base"
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-checked"
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-hover"
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-utility"
        ```
    === "HTML"
        ``` html
        <div class="grid-items checkbox">
            <input type="checkbox" class="checkbox-base" id="checkbox-checked" checked>
            <label for="checkbox-checked" class="visually-hidden">Checked checkbox</label>
        </div>
        ```

=== "Unchecked"
    <div class="btn-grid-1">
        <div class="grid-items checkbox">
            <input type="checkbox" class="checkbox-base" id="checkbox-unchecked">
            <label for="checkbox-unchecked" class="visually-hidden">Unchecked checkbox</label>
        </div>
    </div>
    <br>
    ## States
    === "Enabled"
        <div class="btn-grid-1">
            <div class="grid-items checkbox">
                <input type="checkbox" class="checkbox-base checkbox-enabled" id="checkbox-unchecked-enabled">
                <label for="checkbox-unchecked-enabled" class="visually-hidden">Enabled unchecked checkbox</label>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items checkbox checkbox-hover">
                <input type="checkbox" class="checkbox-base" id="checkbox-unchecked-hover">
                <label for="checkbox-unchecked-hover" class="visually-hidden">Hover unchecked checkbox</label>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items checkbox">
                <input type="checkbox" class="checkbox-base" id="checkbox-unchecked-disabled" disabled>
                <label for="checkbox-unchecked-disabled" class="visually-hidden">Disabled unchecked checkbox</label>
            </div>
        </div>
    <br>
    ## Code
    === "CSS"
        ``` css
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-base"
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-unchecked"
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-hover"
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-utility"
        ```
    === "HTML"
        ``` html
        <div class="grid-items checkbox">
            <input type="checkbox" class="checkbox-base" id="checkbox-unchecked">
            <label for="checkbox-unchecked" class="visually-hidden">Unchecked checkbox</label>
        </div>
        ```

=== "Checked+Text"
    <div class="btn-grid-1">
        <div class="grid-items checkbox checkbox-with-text">
            <input type="checkbox" class="checkbox-base" id="checkbox-text-checked" checked>
            <label for="checkbox-text-checked">Label</label>
        </div>
    </div>
    <br>
    ## States
    === "Enabled"
        <div class="btn-grid-1">
            <div class="grid-items checkbox checkbox-with-text">
                <input type="checkbox" class="checkbox-base checkbox-enabled" id="checkbox-text-checked-enabled" checked>
                <label for="checkbox-text-checked-enabled">Label</label>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items checkbox checkbox-with-text checkbox-hover">
                <input type="checkbox" class="checkbox-base" id="checkbox-text-checked-hover" checked>
                <label for="checkbox-text-checked-hover">Label</label>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items checkbox checkbox-with-text">
                <input type="checkbox" class="checkbox-base" id="checkbox-text-checked-disabled" checked disabled>
                <label for="checkbox-text-checked-disabled">Label</label>
            </div>
        </div>
    <br>
    ## Code
    === "CSS"
        ``` css
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-base"
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-checked"
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-hover"
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-label"
        ```
    === "HTML"
        ``` html
        <div class="grid-items checkbox checkbox-with-text">
            <input type="checkbox" class="checkbox-base" id="checkbox-text-checked" checked>
            <label for="checkbox-text-checked">Label</label>
        </div>
        ```

=== "Unchecked+Text"
    <div class="btn-grid-1">
        <div class="grid-items checkbox checkbox-with-text">
            <input type="checkbox" class="checkbox-base" id="checkbox-text-unchecked">
            <label for="checkbox-text-unchecked">Label</label>
        </div>
    </div>
    <br>
    ## States
    === "Enabled"
        <div class="btn-grid-1">
            <div class="grid-items checkbox checkbox-with-text">
                <input type="checkbox" class="checkbox-base checkbox-enabled" id="checkbox-text-unchecked-enabled">
                <label for="checkbox-text-unchecked-enabled">Label</label>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items checkbox checkbox-with-text checkbox-hover">
                <input type="checkbox" class="checkbox-base" id="checkbox-text-unchecked-hover">
                <label for="checkbox-text-unchecked-hover">Label</label>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items checkbox checkbox-with-text">
                <input type="checkbox" class="checkbox-base" id="checkbox-text-unchecked-disabled" disabled>
                <label for="checkbox-text-unchecked-disabled">Label</label>
            </div>
        </div>
    <br>
    ## Code
    === "CSS"
        ``` css
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-base"
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-unchecked"
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-hover"
        --8<-- "components/sass/components/_checkboxes.scss:checkbox-label"
        ```
    === "HTML"
        ``` html
        <div class="grid-items checkbox checkbox-with-text">
            <input type="checkbox" class="checkbox-base" id="checkbox-text-unchecked">
            <label for="checkbox-text-unchecked">Label</label>
        </div>
        ```