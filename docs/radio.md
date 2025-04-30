---
hide:
  - toc
---
# **RADIO BUTTONS**
=== "Button Unselected"
    <div class="btn-grid-1">
        <div class="grid-items radio-box"> 
            <input type="radio" aria-label="example unselected radio button">
            <label for="option">Option</label>
        </div>
    </div>
    <br>
    # **STATES**
    <div class="btn-grid-4">
        <div class="grid-items">Default<br></div>
        <div class="grid-items">Hover</div>
        <div class="grid-items">Pressed</div>
        <div class="grid-items">Disabled</div>
        <div class="grid-items radio-box"> 
            <input type="radio" aria-label="example unselected radio button">
            <label for="option">Option</label>
        </div>
        <div class="grid-items radio-box"> 
            <input type="radio" class="hover" aria-label="example hovered radio button">
            <label for="option">Option</label>
        </div>
        <div class="grid-items radio-box"> 
            <input type="radio" aria-label="example pressed radio button">
            <label for="option" class="pressed">Option</label>
        </div>
        <div class="grid-items radio-box"> 
            <input disabled type="radio" aria-label="example disabled radio button">
            <label for="option">Option</label>
        </div>
    </div>
    <br>

    === "HTML"

        ``` html
        <div class="grid-items radio-box"> 
            <input type="radio" aria-label="example unselected radio button">
            <label for="option">Option</label>
        </div>
        <div class="grid-items radio-box"> 
            <input type="radio" class="hover" aria-label="example hovered radio button">
            <label for="option">Option</label>
        </div>
        <div class="grid-items radio-box"> 
            <input type="radio" aria-label="example pressed radio button">
            <label for="option" class="pressed">Option</label>
        </div>
        <div class="grid-items radio-box"> 
            <input disabled type="radio" aria-label="example disabled radio button">
            <label for="option">Option</label>
        </div>
        
        ```

    === "CSS"

        ``` css
          
        ```
=== "Button Selected"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <input type="radio" checked="checked" class="radio-btn" aria-label="example checked radio button">
            <label for="option">Option</label>
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
            <input type="radio" checked="checked" aria-label="example checked radio button">
            <label for="option">Option</label>
        </div>
        <div class="grid-items"> 
            <input type="radio" checked="checked"class="hover" aria-label="example of hovering over checked radio button">
            <label for="option">Option</label>
        </div>
        <div class="grid-items"> 
            <input type="radio"checked="checked" aria-label="example checked radio button">
            <label for="option" class="pressed">Option</label>
        </div>
        <div class="grid-items"> 
            <input type="radio" class="disabled" aria-label="example of disabled checked radio button">
            <label for="option">Option</label>
        </div>
    </div>
    <br>
    === "HTML"

        ``` html
        <a href="#" class="btn-md btn">Button</a>

        <a href="#" class="btn-md btn hover">Button</a>

        <a href="#" class="btn-md btn focus">Button</a>

        <a href="#" class="btn-md btn disabled">Button</a>
        
        ```

    === "CSS"

        ``` css

        --8<-- "_radio.scss:checked"
        
        ```       