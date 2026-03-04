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
                <input type="radio" class="icon" id="unchecked-class" value="option" aria-label="example unchecked radio button">
                <label for="unchecked-class" class="label">Option</label>
            </div>
        </div>
    </div>
    ## States
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <div class="radio"> 
                    <input type="radio" class="icon" id="unchecked-default" value="option" aria-label="example unchecked radio button">
                    <label for="unchecked-default" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio class to parent container -->
            <div class="radio"> 
                <!-- id: unique to each button, name: same for all buttons in group -->
                <input type="radio" class="icon" id="option-name" name="radio-group" value="option">
                <!-- value: matches label text -->
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
                <div class="radio hover"> 
                    <input type="radio" class="icon" id="unchecked-hover" value="option" aria-label="example hovered, unchecked radio button">
                    <label for="unchecked-hover" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio class to parent container -->
            <div class="radio hover"> 
                <!-- id: unique to each button, name: same for all buttons in group -->
                <input type="radio" class="icon" id="option-name" name="radio-group" value="option">
                <!-- value: matches label text -->
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
                <div class="radio selected"> 
                    <input type="radio" class="icon" id="unchecked-pressed" value="option" aria-label="example pressed radio button">
                    <label for="unchecked-pressed" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio class to parent container -->
            <div class="radio selected"> 
                <!-- id: unique to each button, name: same for all buttons in group -->
                <input type="radio" class="icon" id="option-name" name="radio-group" value="option">
                <!-- value: matches label text -->
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
                    <input type="radio" class="icon" id="unchecked-disabled" value="option" aria-label="example disabled radio button" disabled>
                    <label for="unchecked-disabled" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio class to parent container -->
            <div class="radio disabled"> 
                <!-- id: unique to each button, name: same for all buttons in group -->
                <input type="radio" class="icon" id="option-name" name="radio-group" value="option" disabled>
                <!-- value: matches label text -->
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
            <div class="radio-checked">
                <input type="radio" class="icon" id="checked-class" value="option" checked aria-label="example checked radio button">
                <label for="checked-class" class="label">Option</label>
            </div>
        </div>
    </div>
    ## States
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <div class="radio-checked">
                    <input type="radio" class="icon" id="checked-default" value="option" checked aria-label="example checked radio button">
                    <label for="checked-default" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio-checked class to parent container -->
            <div class="radio-checked"> 
                <!-- id: unique to each button, name: same for all buttons in group -->
                <input type="radio" class="icon" id="option-name" name="radio-group" value="option" checked>
                <!-- value: matches label text -->
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
                <div class="radio-checked hover">
                    <input type="radio" class="icon" id="checked-hover" value="option" checked aria-label="example of hovered, selected radio button">
                    <label for="checked-hover" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio-checked class to parent container -->
            <div class="radio-checked hover">
                <!-- id: unique to each button, name: same for all buttons in group -->
                <input type="radio" class="icon" id="option-name" name="radio-group" value="option" checked>
                <!-- value: matches label text -->
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
                <div class="radio-checked selected"> 
                    <input type="radio" class="icon" id="checked-selected" value="option" checked aria-label="example pressed, selected radio button">
                    <label for="checked-selected" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio-checked class to parent container -->
            <div class="radio-checked selected"> 
                <!-- id: unique to each button, name: same for all buttons in group -->
                <input type="radio" class="icon" id="option-name" name="radio-group" value="option" checked>
                <!-- value: matches label text -->
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
                <div class="radio-checked disabled">
                    <input disabled type="radio" class="icon" id="checked-disabled" value="option" aria-label="example of disabled checked radio button" checked disabled>
                    <label for="checked-disabled" class="label">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio-checked class to parent container -->
            <div class="radio-checked disabled"> 
                <!-- id: unique to each button, name: same for all buttons in group -->
                <input type="radio" class="icon" id="option-name" name="radio-group" value="option" checked disabled>
                <!-- value: matches label text -->
                <label for="option-name" class="label">Option</label>
            </div>
            ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:checked"
            ``` 