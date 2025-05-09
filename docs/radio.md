---
hide:
  - toc
---
# **RADIO BUTTONS**
=== "Button Unselected"
    <div class="btn-grid-1">
        <div class="grid-items radio-box"> 
            <div class = "radio-box"> 
                <input type="radio" aria-label="example unselected radio button">
                <label for="option">Option</label>
            </div>
        </div>
    </div>
    <br>
    # **STATES**
    <div class="btn-grid-4">
        <div class="grid-items">Default<br></div>
        <div class="grid-items">Hover</div>
        <div class="grid-items">Pressed</div>
        <div class="grid-items">Disabled</div>
        <div class="grid-items">
            <div class = "radio-box"> 
                <input type="radio" aria-label="example unselected radio button">
                <label for="option">Option</label>
            </div>
        </div>
        <div class="grid-items">
            <div class = "radio-box"> 
                <input type="radio" class="hover" aria-label="example hovered radio button">
                <label for="option">Option</label>
            </div>
        </div>
        <div class="grid-items">
            <div class = "radio-box"> 
                <input type="radio" aria-label="example pressed radio button">
                <label for="option" class="pressed">Option</label>
            </div>
        </div>
        <div class="grid-items">
            <div class = "radio-box"> 
                <input disabled type="radio" aria-label="example disabled radio button">
                <label for="option">Option</label>
            </div>
        </div>
    </div>
    <br>

    === "HTML"

        ``` html
        <!-- Apply radio-box class to the div containing your input and label. -->
        <div class="grid-items">
            <div class = "radio-box"> 
                <input type="radio" aria-label="example unselected radio button">
                <label for="option">Option</label>
            </div>
        </div>
        <div class="grid-items"> 
            <div class = "radio-box">
                <input type="radio" class="hover" aria-label="example hovered radio button">
                <label for="option">Option</label>
            </div>
        </div>
        <div class="grid-items">
            <div class = "radio-box"> 
                <input pressed type="radio" aria-label="example pressed radio button">
                <label for="option" class="pressed">Option</label>
            </div>
        </div>
        <div class="grid-items">
            <div class = "radio-box"> 
                <input disabled type="radio" aria-label="example disabled radio button">
                <label for="option">Option</label>
            </div>
        </div>
        
        ```

    === "CSS"

        ``` css
        --8<-- "components/sass/components/_radio.scss:radio-box"
        ```
=== "Button Selected"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <div class = "radio-box">
                <input type="radio" checked="checked" class="radio-btn" aria-label="example checked radio button">
                <label for="option">Option</label>
            </div>
        </div>
    </div>
    <br>
    # **STATES**
    <div class="btn-grid-4">
        <div class="grid-items">Default<br></div>
        <div class="grid-items">Hover</div>
        <div class="grid-items">Pressed</div>
        <div class="grid-items">Disabled</div>
        <div class="grid-items"> 
            <div class = "radio-box">
                <input type="radio" checked="checked" aria-label="example checked radio button">
                <label for="option">Option</label>
            </div>
        </div>
        <div class="grid-items"> 
            <div class = "radio-box">
                <input type="radio" checked="checked"class="hover" aria-label="example of hovering over checked radio button">
                <label for="option">Option</label>
            </div>
        </div>
        <div class="grid-items">
            <div class = "radio-box"> 
                <input type="radio"checked="checked" aria-label="example checked radio button">
                <label for="option" class="pressed">Option</label>
            </div>
        </div>
        <div class="grid-items"> 
            <div class = "radio-box">
                <input disabled type="radio" aria-label="example of disabled checked radio button">
                <label for="option">Option</label>
            </div>
        </div>
    </div>
    <br>
    === "HTML"

        ``` html
        <!-- Apply radio-box class to the div containing your input and label. -->
        <div class="grid-items">
            <div class = "radio-box"> 
                <input type="radio" aria-label="example unselected radio button">
                <label for="option">Option</label>
            </div>
        </div>
        <div class="grid-items"> 
            <div class = "radio-box">
                <input type="radio" class="hover" aria-label="example hovered radio button">
                <label for="option">Option</label>
            </div>
        </div>
        <div class="grid-items">
            <div class = "radio-box"> 
                <input pressed type="radio" aria-label="example pressed radio button">
                <label for="option" class="pressed">Option</label>
            </div>
        </div>
        <div class="grid-items">
            <div class = "radio-box"> 
                <input type="radio" class="disabled" aria-label="example disabled radio button">
                <label for="option">Option</label>
            </div>
        </div>
        ```

    === "CSS"

        ``` css
        --8<-- "components/sass/components/_radio.scss:radio-box"
        ```       