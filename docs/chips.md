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
                :material-taxi:{.icon .-leading .hidden}
                :material-taxi:{.icon .-avatar .hidden}
                <span class="label">Label</span>
                :material-taxi:{.icon .-trailing .hidden}
            </div>
        </div>
    </div>
    <br>
    ## States
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-label">
                    :material-taxi:{.icon .-leading .hidden}
                    :material-account-circle:{.icon .-avatar .hidden}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing .hidden}
                </div>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-label hover">
                    :material-taxi:{.icon .-leading .hidden}
                    :material-account-circle:{.icon .-avatar .hidden}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing .hidden}
                </div>
            </div>
        </div>
    === "Focused"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-label focus">
                    :material-taxi:{.icon .-leading .hidden}
                    :material-account-circle:{.icon .-avatar .hidden}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing .hidden}
                </div>
            </div>
        </div>
    === "Pressed"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-label pressed">
                    :material-taxi:{.icon .-leading .hidden}
                    :material-account-circle:{.icon .-avatar .hidden}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing .hidden}
                </div>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-label disabled">
                    :material-taxi:{.icon .-leading .hidden}
                    :material-account-circle:{.icon .-avatar .hidden}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing .hidden}
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
                :material-taxi:{.icon .-leading .hidden}
                :material-account-circle:{.icon .-avatar .hidden}
                <span class="label">Label</span>
                :material-close:{.icon .-trailing .hidden}
            </div>
        ```

=== "w/ Trailing Icon"
    <div class="btn-grid-1">
        <div class="grid-items">
            <div class="chip chip-trailing">
                :material-taxi:{.icon .-leading .hidden}
                :material-account-circle:{.icon .-avatar .hidden}
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
                    :material-taxi:{.icon .-leading .hidden}
                    :material-account-circle:{.icon .-avatar .hidden}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-trailing hover">
                    :material-taxi:{.icon .-leading .hidden}
                    :material-account-circle:{.icon .-avatar .hidden}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    === "Focused"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-trailing focus">
                    :material-taxi:{.icon .-leading .hidden}
                    :material-account-circle:{.icon .-avatar .hidden}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    === "Pressed"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-trailing pressed">
                    :material-taxi:{.icon .-leading .hidden}
                    :material-account-circle:{.icon .-avatar .hidden}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-trailing disabled">
                    :material-taxi:{.icon .-leading .hidden}
                    :material-account-circle:{.icon .-avatar .hidden}
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
                :material-taxi:{.icon .-leading .hidden}
                :material-account-circle:{.icon .-avatar .hidden}
                <span class="label">Label</span>
                :material-close:{.icon .-trailing}
            </div>
        ```

=== "w/ Leading Icon"
    <div class="btn-grid-1">
        <div class="grid-items">
            <div class="chip chip-leading">
                :material-taxi:{.icon .-leading}
                :material-account-circle:{.icon .-avatar .hidden}
                <span class="label">Label</span>
                :material-close:{.icon .-trailing .hidden}
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
                    :material-account-circle:{.icon .-avatar .hidden}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing .hidden}
                </div>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-leading hover">
                    :material-taxi:{.icon .-leading}
                    :material-account-circle:{.icon .-avatar .hidden}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing .hidden}
                </div>
            </div>
        </div>
    === "Focused"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-leading focus">
                    :material-taxi:{.icon .-leading}
                    :material-account-circle:{.icon .-avatar .hidden}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing .hidden}
                </div>
            </div>
        </div>
    === "Pressed"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-leading pressed">
                    :material-taxi:{.icon .-leading}
                    :material-account-circle:{.icon .-avatar .hidden}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing .hidden}
                </div>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-leading disabled">
                    :material-taxi:{.icon .-leading}
                    :material-account-circle:{.icon .-avatar .hidden}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing .hidden}
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
                :material-account-circle:{.icon .-avatar .hidden}
                <span class="label">Label</span>
                :material-close:{.icon .-trailing .hidden}
            </div>
        ```

=== "w/ Trailing + Leading Icon"
    <div class="btn-grid-1">
        <div class="grid-items">
            <div class="chip chip-leading-trailing">
                :material-taxi:{.icon .-leading}
                :material-account-circle:{.icon .-avatar .hidden}
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
                    :material-account-circle:{.icon .-avatar .hidden}
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
                    :material-account-circle:{.icon .-avatar .hidden}
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
                    :material-account-circle:{.icon .-avatar .hidden}
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
                    :material-account-circle:{.icon .-avatar .hidden}
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
                    :material-account-circle:{.icon .-avatar .hidden}
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
                :material-account-circle:{.icon .-avatar .hidden}
                <span class="label">Label</span>
                :material-close:{.icon .-trailing}
            </div>
        ```

=== "w/ Avatar"
    <div class="btn-grid-1">
        <div class="grid-items">
            <div class="chip chip-avatar">
                :material-taxi:{.icon .-leading .hidden}
                :material-account-circle:{.icon .-avatar}
                <span class="label">Label</span>
                :material-close:{.icon .-trailing .hidden}
            </div>
        </div>
    </div>
    <br>
    ## States
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-avatar">
                    :material-taxi:{.icon .-leading .hidden}
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing .hidden}
                </div>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-avatar hover">
                    :material-taxi:{.icon .-leading .hidden}
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing .hidden}
                </div>
            </div>
        </div>
    === "Focused"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-avatar focus">
                    :material-taxi:{.icon .-leading .hidden}
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing .hidden}
                </div>
            </div>
        </div>
    === "Pressed"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-avatar pressed">
                    :material-taxi:{.icon .-leading .hidden}
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing .hidden}
                </div>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="chip chip-avatar disabled">
                    :material-taxi:{.icon .-leading .hidden}
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing .hidden}
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
                    :material-taxi:{.icon .-leading .hidden}
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing .hidden}
                </div>
        ```
=== "w/ Avatar + Trailing Icon"
    <div class="btn-grid-1">
        <div class="grid-items">
            <div class="chip chip-avatar-trailing">
                :material-taxi:{.icon .-leading .hidden}
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
                    :material-taxi:{.icon .-leading .hidden}
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
                    :material-taxi:{.icon .-leading .hidden}
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
                    :material-taxi:{.icon .-leading .hidden}
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
                    :material-taxi:{.icon .-leading .hidden}
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
                    :material-taxi:{.icon .-leading .hidden}
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
                    :material-taxi:{.icon .-leading .hidden}
                    :material-account-circle:{.icon .-avatar}
                    <span class="label">Label</span>
                    :material-close:{.icon .-trailing}
                </div>
        ```