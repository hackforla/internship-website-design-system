---
hide:
  - toc
---
# **RADIO BUTTONS**
=== "Button Unselected"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <input type="radio">
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
            <input type="radio" >
            <label for="option">Option</label>
        </div>
        <div class="grid-items"> 
            <input type="radio" class="hover">
            <label for="option">Option</label>
        </div>
        <div class="grid-items"> 
            <input type="radio">
            <label for="option" class="pressed">Option</label>
        </div>
        <div class="grid-items"> 
            <input disabled type="radio">
            <label for="option">Option</label>
        </div>
    </div>
    <br>

    === "HTML"

        ``` html
        <a href="#" class="btn-sm ">Button</a>

        <a href="#" class="btn-sm hover">Button</a>

        <a href="#" class="btn-sm focus">Button</a>

        <a href="#" class="btn-sm disabled">Button</a>
        
        ```

    === "CSS"

        ``` css
            --8<-- "_radio.scss:unchecked"
        
        
        ```
=== "Button Selected"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <input type="radio" checked="checked" class="radio-btn">
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
            <input type="radio" checked="checked">
            <label for="option">Option</label>
        </div>
        <div class="grid-items"> 
            <input type="radio" checked="checked"class="hover">
            <label for="option">Option</label>
        </div>
        <div class="grid-items"> 
            <input type="radio"checked="checked">
            <label for="option" class="pressed">Option</label>
        </div>
        <div class="grid-items"> 
            <input type="radio" class="disabled">
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