---
hide:
  - toc
---
# **Radio Buttons**

## Class

=== "Unselected"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <div class="radio"> 
                <input type="radio" class="icon" aria-label="example unselected radio button">
                <label for="option" class="label">Option</label>
            </div>
        </div>
    </div>
    ## States
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <div class="radio"> 
                    <input type="radio" class="icon" aria-label="example unselected radio button">
                    <label for="option" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio class to the parent container with your input and label. -->
            <div class="radio"> 
                <input type="radio" class="icon" aria-label="example unselected radio button">
                <label for="option" class="label">Option</label>
            </div>
            ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:unselected"
            ```
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class ="radio hover"> 
                    <input type="radio" class="icon" aria-label="example hovered, unselected radio button">
                    <label for="option" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio class to the parent container with your input and label. -->
            <div class = "radio hover"> 
                <input type="radio" class="icon" aria-label="example hovered, unselected radio button">
                <label for="option" class="label">Option</label>
            </div>
            ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:unselected"
            ```
    === "Pressed"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class = "radio pressed"> 
                    <input type="radio" class="icon" aria-label="example pressed radio button">
                    <label for="option" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio class to the parent container with your input and label. -->
            <div class = "radio pressed"> 
                <input type="radio" class="icon" aria-label="example pressed radio button">
                <label for="option" class="label">Option</label>
            </div>
            ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:unselected"
            ```
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="radio disabled"> 
                    <input type="radio" class="icon" aria-label="example disabled radio button">
                    <label for="option" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio class to the parent container with your input and label. -->
            <div class = "radio disabled"> 
                <input type="radio" class="icon" aria-label="example disabled radio button">
                <label for="option" class="label">Option</label>
            </div>
            ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:unselected"
            ```
        <br>
=== "Selected"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <div class = "radio radio-selected">
                <input type="radio" class="icon" checked="checked" aria-label="example checked radio button">
                <label for="option" class="label">Option</label>
            </div>
        </div>
    </div>
    ## States
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <div class = "radio radio-selected">
                    <input type="radio" class="icon" checked="checked" aria-label="example checked radio button">
                    <label for="option" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"

        ``` html
        <!-- Apply radio class to the parent container with your input and label. -->
            <div class = "radio radio-selected"> 
                <input type="radio" class="icon" aria-label="example selected radio button">
                <label for="option" class="label">Option</label>
            </div>
        ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:selected"
            ``` 
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <div class = "radio radio-selected hover">
                    <input type="radio" class="icon" checked="checked" aria-label="example of hovered, selected radio button">
                    <label for="option" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
        ``` html
        <!-- Apply radio class to the parent container with your input and label. -->
        <div class = "radio radio-selected hover">
            <input type="radio" class="icon" aria-label="example hovered, selected radio button">
            <label for="option" class="label">Option</label>
        </div>
        ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:selected"
            ``` 
    === "Pressed"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class = "radio radio-selected pressed"> 
                    <input type="radio" class="icon" checked="checked" aria-label="example pressed, selected radio button">
                    <label for="option" class="label" class="pressed">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"

        ``` html
        <!-- Apply radio class to the parent container with your input and label. -->
        <div class = "radio radio-selected pressed"> 
            <input pressed type="radio" class="icon" aria-label="example selected, pressed radio button">
            <label for="option" class="label">Option</label>
        </div>
        ```
        === "CSS"

            ``` css
            --8<-- "components/sass/components/_radio.scss:selected"
            ``` 
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <div class = "radio radio-selected disabled">
                    <input disabled type="radio" class="icon" aria-label="example of disabled checked radio button">
                    <label for="option" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"

        ``` html
        <!-- Apply radio class to the parent container with your input and label. -->
            <div class = "radio radio-selected disabled"> 
                <input type="radio" class="icon" aria-label="example disabled radio button">
                <label for="option" class="label">Option</label>
            </div>
        ```
        === "CSS"

            ``` css
            --8<-- "components/sass/components/_radio.scss:selected"
            ``` 