---
hide:
  - toc
---

# Chips
## Class
=== "Label Only"
    <div class="btn-grid-1">
        <div class="grid-items">
            <div class="chip chip-label">
                <span class="label">Label</span>
            </div>
        </div>
    </div>
    <br>
    ## States
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-label">
                    <span class="label">Label</span>
                </div>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-label hover">
                    <span class="label">Label</span>
                </div>
            </div>
        </div>
    === "Focused"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-label focus">
                    <span class="label">Label</span>
                </div>
            </div>
        </div>
    === "Pressed"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-label pressed">
                    <span class="label">Label</span>
                </div>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-label disabled">
                    <span class="label">Label</span>
                </div>
            </div>
        </div>
    <br>
    ## Code
    === "CSS"
        ``` css
        --8<-- "components/sass/components/_chips.scss:chip"

        --8<-- "components/sass/components/_chips.scss:chipLabel"
        ```
    === "HTML"
        ``` html
            <div class="chip chip-label">
                <span class="label">Label</span>
            </div>
        ```

=== "w/ Trailing Icon"
    <div class="btn-grid-1">
        <div class="grid-items">
            <div class="chip chip-trailing">
                <span class="label">Label</span>
                :material-close:{.icon .-trailing}
            </div>
        </div>
    </div>
    <br>
    ## States
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-trailing">
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-trailing hover">
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    === "Focused"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-trailing focus">
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    === "Pressed"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-trailing pressed">
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-trailing disabled">
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    <br>
    ## Code
    === "CSS"
        ``` css
        --8<-- "components/sass/components/_chips.scss:chip"

        --8<-- "components/sass/components/_chips.scss:chipTrailing"
        ```
    === "HTML"
        ``` html
            <div class="chip chip-trailing hover">
                <span class="label">Label</span>
                :material-close:{.icon .-trailing}
            </div>
        ```

=== "w/ Leading Icon"
    <div class="btn-grid-1">
        <div class="grid-items">
            <div class="chip chip-leading">
                :material-taxi:{.icon .-leading}
                <span class="label">Label</span>
            </div>
        </div>
    </div>
    <br>
    ## States
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-leading">
                    :material-taxi:{.icon .-leading}
                    <span class="label">Label</span>
                </div>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-leading hover">
                    :material-taxi:{.icon .-leading}
                    <span class="label">Label</span>
                </div>
            </div>
        </div>
    === "Focused"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-leading focus">
                    :material-taxi:{.icon .-leading}
                    <span class="label">Label</span>
                </div>
            </div>
        </div>
    === "Pressed"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-leading pressed">
                    :material-taxi:{.icon .-leading}
                    <span class="label">Label</span>
                </div>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-leading disabled">
                    :material-taxi:{.icon .-leading}
                    <span class="label">Label</span>
                </div>
            </div>
        </div>
    <br>
    ## Code
    === "CSS"
        ``` css
        --8<-- "components/sass/components/_chips.scss:chip"

        --8<-- "components/sass/components/_chips.scss:chipLeading"
        ```
    === "HTML"
        ``` html
            <div class="chip chip-leading">
                :material-taxi:{.icon .-leading}
                <span class="label">Label</span>
            </div>
        ```

=== "w/ Trailing + Leading Icon"
    <div class="btn-grid-1">
        <div class="grid-items">
            <div class="chip chip-leading-trailing">
                :material-taxi:{.icon .-leading}
                <span class="label">Label</span>
                :material-close:{.icon .-trailing}
            </div>
        </div>
    </div>
    <br>
    ## States
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-leading-trailing">
                    :material-taxi:{.icon .-leading}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-leading-trailing hover">
                    :material-taxi:{.icon .-leading}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    === "Focused"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-leading-trailing focus">
                    :material-taxi:{.icon .-leading}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    === "Pressed"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-leading-trailing pressed">
                    :material-taxi:{.icon .-leading}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-leading-trailing disabled">
                    :material-taxi:{.icon .-leading}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    <br>
    ## Code
    === "CSS"
        ``` css
        --8<-- "components/sass/components/_chips.scss:chip"

        --8<-- "components/sass/components/_chips.scss:chipTrailingLeading"
        ```
    === "HTML"
        ``` html
            <div class="chip chip-leading-trailing">
                :material-taxi:{.icon .-leading}
                <span class="label">Label</span>
                :material-close:{.icon .-trailing}
            </div>
        ```

=== "w/ Avatar"
    <div class="btn-grid-1">
        <div class="grid-items">
            <div class="chip chip-avatar">
                <img src="" class="icon -avatar">
                :material-account-circle:{.icon .-avatar}
                <span class="label">Label</span>
            </div>
        </div>
    </div>
    <br>
    ## States
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-avatar">
                    <img src="" class="icon -avatar">
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                </div>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-avatar hover">
                    <img src="" class="icon -avatar">
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                </div>
            </div>
        </div>
    === "Focused"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-avatar focus">
                    <img src="" class="icon -avatar">
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                </div>
            </div>
        </div>
    === "Pressed"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-avatar pressed">
                    <img class="icon -avatar">
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                </div>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-avatar disabled">
                    <img src="" class="icon -avatar">
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                </div>
            </div>
        </div>
    <br>
    ## Code
    === "CSS"
        ``` css
        --8<-- "components/sass/components/_chips.scss:chip"

        --8<-- "components/sass/components/_chips.scss:chipAvatar"
        ```
    === "HTML"
        ``` html
                <div class="chip chip-avatar">
                    <img src="" class="icon -avatar">
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                </div>
        ```
=== "w/ Avatar + Trailing Icon"
    <div class="btn-grid-1">
        <div class="grid-items">
            <div class="chip chip-avatar-trailing">
                <img src="" class="icon -avatar">
                :material-account-circle:{.icon .-avatar}
                <span class="label">Label</span>
                :material-close:{.icon .-trailing}
            </div>
        </div>
    </div>
    <br>
    ## States
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-avatar-trailing">
                    <img src="" class="icon -avatar">
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-avatar-trailing hover">
                    <img src="" class="icon -avatar">
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    === "Focused"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-avatar-trailing focus">
                    <img src="" class="icon -avatar">
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    === "Pressed"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-avatar-trailing pressed">
                    <img src="" class="icon -avatar">
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-avatar-trailing disabled">
                    <img src="" class="icon -avatar">
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    <br>
    ## Code
    === "CSS"
        ``` css
        --8<-- "components/sass/components/_chips.scss:chip"

        --8<-- "components/sass/components/_chips.scss:chipAvatarTrailing"
        ```
    === "HTML"
        ``` html
                <div class="chip chip-avatar-trailing">
                    <img src="" class="icon -avatar">
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
        ```