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
        <div class="btn-grid-1 menu-item">
            <div class="grid-items">
                <div class="menu-item" role="menuitem">
                    <div class="item-wrapper">
                        <span class="left-icon" aria-hidden="true">favorite</a>
                        <span class="item-label">Menu Item</span>
                        <span class="right-icon" aria-hidden="true">chevron_right</a>
                    </div>
                    <hr class="divider hidden">
                </div>
            </div>
        </div>
        <br>
## States
    === "Default"
        <div class="btn-grid-1 menu-item">
            <div class="grid-items">
                <div class="menu-item">
                    <a href="#" class="left-icon"></a>
                    <span class="label-text">Menu Item</span>
                    <a href="#" class="right-icon"></a>
                    <hr class="divider hidden">
                </div>
            </div>
        </div>
        <br>
    === "Hover"
        
    === "Selected"

    === "Disabled"

    <br>
## Code
    === "CSS"

    === "HTML"

    === "JS"

        ``` js
        --8<-- "dropdown.js:dropdown-js"
        ```

### Example