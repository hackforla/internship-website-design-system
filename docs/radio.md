---
hide:
  - toc
---
# **Radio Buttons**

## Class

=== "Unchecked"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <div class="radio"> 
                <input type="radio" class="icon" id="unchecked-class" aria-label="example unchecked radio button">
                <label for="unchecked-class" class="label">Option</label>
            </div>
        </div>
    </div>
    ## States
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <div class="radio"> 
                    <input type="radio" class="icon" id="unchecked-default" aria-label="example unchecked radio button" style="pointer-events:none">
                    <label for="unchecked-default" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio class to the parent container with your input and label. -->
            <div class="radio"> 
                <input type="radio" class="icon" id="option-name">
                <label for="option-name" class="label">Option</label>
            </div>
            ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:unchecked"
            ```
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class ="radio hover"> 
                    <input type="radio" class="icon" id="unchecked-hover" aria-label="example hovered, unchecked radio button" style="pointer-events:none">
                    <label for="unchecked-hover" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio class to the parent container with your input and label. -->
            <div class = "radio hover"> 
                <input type="radio" class="icon" id="option-name">
                <label for="option-name" class="label">Option</label>
            </div>
            ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:unchecked"
            ```
    === "Selected"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class = "radio selected"> 
                    <input type="radio" class="icon" id="unchecked-pressed" aria-label="example pressed radio button" style="pointer-events:none">
                    <label for="unchecked-pressed" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio class to the parent container with your input and label. -->
            <div class = "radio selected"> 
                <input type="radio" class="icon" id="option-name">
                <label for="option-name" class="label">Option</label>
            </div>
            ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:unchecked"
            ```
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="radio disabled"> 
                    <input type="radio" class="icon" id="unchecked-disabled" aria-label="example disabled radio button">
                    <label for="unchecked-disabled" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio class to the parent container with your input and label. -->
            <div class = "radio disabled"> 
                <input type="radio" class="icon" id="option-name">
                <label for="option-name" class="label">Option</label>
            </div>
            ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:unchecked"
            ```
        <br>
=== "Checked"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <div class = "radio-checked">
                <input type="radio" class="icon" id="checked-class"checked aria-label="example checked radio button">
                <label for="checked-class" class="label">Option</label>
            </div>
        </div>
    </div>
    ## States
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <div class = "radio-checked">
                    <input type="radio" class="icon" id="checked-default" checked aria-label="example checked radio button">
                    <label for="checked-default" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"

        ``` html
        <!-- Apply radio class to the parent container with your input and label. -->
        <div class = "radio-checked"> 
            <input type="radio" class="icon" id="option-name" checked>
            <label for="option-name" class="label">Option</label>
        </div>
        ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:checked"
            ``` 
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <div class = "radio-checked hover">
                    <input type="radio" class="icon" id="checked-hover" checked aria-label="example of hovered, selected radio button">
                    <label for="checked-hover" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
        ``` html
        <!-- Apply radio class to the parent container with your input and label. -->
        <div class = "radio-checked hover">
            <input type="radio" class="icon" id="option-name" checked>
            <label for="option-name" class="label">Option</label>
        </div>
        ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:checked"
            ``` 
    === "Selected"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class = "radio-checked selected"> 
                    <input type="radio" class="icon" id="checked-selected" checked aria-label="example pressed, selected radio button">
                    <label for="checked-selected" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"

        ``` html
        <!-- Apply radio class to the parent container with your input and label. -->
        <div class = "radio-checked selected"> 
            <input type="radio" class="icon" id="option-name" checked>
            <label for="option-name" class="label">Option</label>
        </div>
        ```
        === "CSS"

            ``` css
            --8<-- "components/sass/components/_radio.scss:checked"
            ``` 
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <div class = "radio-checked disabled">
                    <input disabled type="radio" class="icon" id="checked-disabled" aria-label="example of disabled checked radio button">
                    <label for="checked-disabled" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"

        ``` html
        <!-- Apply radio class to the parent container with your input and label. -->
            <div class = "radio-checked disabled"> 
                <input type="radio" class="icon" id="option-name" checked disabled>
                <label for="option-name" class="label">Option</label>
            </div>
        ```
        === "CSS"

            ``` css
            --8<-- "components/sass/components/_radio.scss:checked"
            ``` 