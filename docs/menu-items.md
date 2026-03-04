---
hide:
  - toc
---

# **Menu Items**
## Guidelines
**Menu items** are the building blocks of the Menu. Divider, Left icon/element, Content, and Right icon
can all be modified or hidden.
## Class
=== "Menu Item"
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
                <hr class="divider">
            </div>
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