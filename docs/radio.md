---
hide:
  - toc
---
# **Radio Buttons**

## Class

=== "Unselected"
    <div class="btn-grid-1">
        <div class="grid-items radio-box"> 
            <div class="radio-box"> 
                <input type="radio" aria-label="example unselected radio button">
                <label for="option">Option</label>
            </div>
        </div>
    </div>
    <br>
    ## States
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items radio-box"> 
                <div class="radio-box"> 
                    <input type="radio" aria-label="example unselected radio button">
                    <label for="option">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio-box class to the div containing your input and label. -->
            <div class="radio-box"> 
                <input type="radio" aria-label="example unselected radio button">
                <label for="option">Option</label>
            </div>
            ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:radio-box"
            ```
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class ="radio-box"> 
                    <input type="radio" aria-label="example unselected radio button">
                    <label for="option" class="radio hover">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio-box class to the div containing your input and label. -->
            <div class = "radio-box"> 
                <input type="radio" aria-label="example hovered radio button">
                <label for="option" class="radio hover">Option</label>
            </div>
            ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:radio-box"
            ```
    === "Pressed"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class = "radio-box"> 
                    <input type="radio" aria-label="example unselected radio button">
                    <label for="option" class="radio pressed">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio-box class to the div containing your input and label. -->
            <div class = "radio-box"> 
                <input type="radio" aria-label="example pressed radio button">
                <label for="option" class="radio pressed">Option</label>
            </div>
            ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:radio-box"
            ```
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class="radio-box"> 
                    <input type="radio" aria-label="example unselected radio button">
                    <label for="option" class="radio disabled">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
            ``` html
            <!-- Apply radio-box class to the div containing your input and label. -->
            <div class = "radio-box"> 
                <input type="radio" aria-label="example disabled radio button">
                <label for="option" class="radio disabled">Option</label>
            </div>
            ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:radio-box"
            ```
        <br>
=== "Selected"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <div class = "radio-box">
                <input type="radio" checked="checked" class="radio-btn" aria-label="example checked radio button">
                <label for="option">Option</label>
            </div>
        </div>
    </div>
    ## States
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <div class = "radio-box">
                    <input type="radio" checked="checked" class="radio-btn" aria-label="example checked radio button">
                    <label for="option">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"

        ``` html
        <!-- Apply radio-box class to the div containing your input and label. -->
            <div class = "radio-box"> 
                <input type="radio" aria-label="example selected radio button">
                <label for="option">Option</label>
            </div>
        ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:radio-box"
            ``` 
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <div class = "radio-box">
                    <input type="radio" checked="checked"class="hover" aria-label="example of hovering over checked radio button">
                    <label for="option">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"
        ``` html
        <!-- Apply radio-box class to the div containing your input and label. -->
        <div class = "radio-box">
            <input type="radio" class="hover" aria-label="example hovered radio button">
            <label for="option">Option</label>
        </div>
        ```
        === "CSS"
            ``` css
            --8<-- "components/sass/components/_radio.scss:radio-box"
            ``` 
    === "Pressed"
        <div class="btn-grid-1">
            <div class="grid-items">
                <div class = "radio-box"> 
                    <input type="radio"checked="checked" aria-label="example checked radio button">
                    <label for="option" class="pressed">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"

        ``` html
        <!-- Apply radio-box class to the div containing your input and label. -->
        <div class = "radio-box"> 
            <input pressed type="radio" aria-label="example pressed radio button">
            <label for="option" class="pressed">Option</label>
        </div>
        ```
        === "CSS"

            ``` css
            --8<-- "components/sass/components/_radio.scss:radio-box"
            ``` 
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <div class = "radio-box">
                    <input disabled type="radio" aria-label="example of disabled checked radio button">
                    <label for="option">Option</label>
                </div>
            </div>
        </div>
        ## Code
        === "HTML"

        ``` html
        <!-- Apply radio-box class to the div containing your input and label. -->
            <div class = "radio-box"> 
                <input type="radio" class="disabled" aria-label="example disabled radio button">
                <label for="option">Option</label>
            </div>
        ```
        === "CSS"

            ``` css
            --8<-- "components/sass/components/_radio.scss:radio-box"
            ``` 