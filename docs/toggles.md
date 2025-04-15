---
hide:
  - toc
---

# **Toggles**
=== "No Icon"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <label class='toggle' >
                <input type='checkbox' >
                <span class='slider'>
                </span>
            </label>
        </div>
    </div>
    <br>
    # **States**
    <div class="btn-grid-4">
        <div class="grid-items">Hovering<br></div>
        <div class="grid-items">Focused</div>
        <div class="grid-items">Pressed</div>
        <div class="grid-items">Disabled</div>
        <div class="grid-items"> 
            <label class='toggle hover' >
                <input type='checkbox' >
                <span class='slider'></span>
            </label>
        </div>
        <div class="grid-items"> 
            <label class='toggle focused' >
                <input type='checkbox' >
                <span class='slider'></span>
            </label>
        </div>
        <div class="grid-items"> 
            <label class='toggle active'>
                <input type='checkbox'>
                <span class='slider'></span>
            </label>
        </div>
        <div class="grid-items"> 
            <label class='toggle' >
                <input type='checkbox' disabled>
                <span class='slider'></span>
            </label>
        </div>
    </div>
    <br>

    === "HTML"

        ``` html
        <label class='toggle'>
            <input type='checkbox'>
            <span class='slider'></span>
        </label>
        
        ```

    === "CSS"

        ``` css
        --8<-- "components/sass/components/_toggle.scss:toggle"
        ```

=== "With Icon"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <label class='toggle' >
                <input type='checkbox' >
                <span class='slider'>
                    <svg fill="currentColor" class="checked" xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg>
                    <svg fill="currentColor" class="unchecked" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>
                </span>
            </label>
        </div>
    </div>
    <br>
    # **States**
    <div class="btn-grid-4">
        <div class="grid-items">Hovering<br></div>
        <div class="grid-items">Focused</div>
        <div class="grid-items">Pressed</div>
        <div class="grid-items">Disabled</div>
        <div class="grid-items"> 
            <label class='toggle hover' >
                <input type='checkbox' >
                <span class='slider'>
                    <svg fill="currentColor" class="checked" xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg>
                    <svg fill="currentColor" class="unchecked" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>
                </span>
            </label>
        </div>
        <div class="grid-items"> 
            <label class='toggle focused' >
                <input type='checkbox' >
                <span class='slider'>
                    <svg fill="currentColor" class="checked" xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg>
                    <svg fill="currentColor" class="unchecked" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>
                </span>
            </label>
        </div>
        <div class="grid-items"> 
            <label class='toggle active'>
                <input type='checkbox'>
                <span class='slider'>
                    <svg fill="currentColor" class="checked" xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg>
                    <svg fill="currentColor" class="unchecked" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>
                </span>
            </label>
        </div>
        <div class="grid-items"> 
            <label class='toggle' >
                <input type='checkbox' disabled>
                <span class='slider'>
                    <svg fill="currentColor" class="checked" xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg>
                    <svg fill="currentColor" class="unchecked" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>
                </span>
            </label>
        </div>
    </div>
    <br>

    === "HTML"

        ``` html
        <label class='toggle' >
            <input type='checkbox' disabled>
            <span class='slider'>
                <!-- Any SVG's can be used for checked/unchecked icons -->
                <!-- As long as these properties are set: fill="currentColor" class="checked/unchecked"-->
                <svg fill="currentColor" class="checked" xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg>
                <svg fill="currentColor" class="unchecked" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>
            </span>
        </label>
        
        ```

    === "CSS"

        ``` css
        --8<-- "components/sass/components/_toggle.scss:toggle-icon"
        ```
