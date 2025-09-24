---
hide:
  - toc
---

# **Dropdown Bases**
## Guidelines
Drop down bases are one of the options for making a menu appear. **These dropdown bases require no inputs.** As soon as the user makes a selection, the text field is populated and the label text moves to the top left.

## Class
=== "Dropdown Base - No Input"
    <div class="btn-grid-1">
        <div class="grid-items">
        </div>
    </div>
    <br>
    ## States
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="menu-item" role="menuitem">
                    <div class="item-wrapper">
                        <span class="left-icon" aria-hidden="true">
                        :material-heart:{.visible}
                        </span>
                        <span class="item-label">Menu Item</span>
                        <span class="right-icon" aria-hidden="true">
                        :material-chevron-right:{.visible}
                        </span>
                    </div>
                    <hr class="divider hidden" hidden>
                </div>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="menu-item hover" role="menuitem">
                    <div class="item-wrapper">
                        <span class="left-icon" aria-hidden="true">
                        :material-heart:{.visible}
                        </span>
                        <span class="item-label">Menu Item</span>
                        <span class="right-icon" aria-hidden="true">
                        :material-chevron-right:{.visible}
                        </span>
                    </div>
                    <hr class="divider hidden" hidden>
                </div>
            </div>
        </div>
    === "Selected"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="menu-item selected" role="menuitem">
                    <div class="item-wrapper">
                        <span class="left-icon" aria-hidden="true">
                        :material-heart:{.visible}
                        </span>
                        <span class="item-label">Menu Item</span>
                        <span class="right-icon" aria-hidden="true">
                        :material-chevron-right:{.visible}
                        </span>
                    </div>
                    <hr class="divider hidden" hidden>
                </div>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="menu-item disabled" role="menuitem">
                    <div class="item-wrapper">
                        <span class="left-icon" aria-hidden="true">
                        :material-heart:{.visible}
                        </span>
                        <span class="item-label">Menu Item</span>
                        <span class="right-icon" aria-hidden="true">
                        :material-chevron-right:{.visible}
                        </span>
                    </div>
                    <hr class="divider hidden" hidden>
                </div>
            </div>
        </div>
    <br>
    ## Code
    === "CSS"
        ``` css
        --8<-- "components/sass/components/_dropdowns.scss:menu-item"

        ```
    === "HTML"
        ``` html
        <div class="menu-item" role="menuitem">
            <div class="item-wrapper">
                <span class="left-icon" aria-hidden="true"></span>
                <span class="item-label">Menu Item</span>
                <span class="right-icon" aria-hidden="true"></span>
            </div>
            <hr class="divider hidden" hidden>
        </div>
        ```
    === "JS"

    <br>
    ## Example

=== "Dropdown Base - Input"
