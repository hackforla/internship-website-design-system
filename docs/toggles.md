---
hide:
  - toc
---

# **Toggles**
## Class
=== "Selected No Icon"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <label class='toggle' >
                <input type='checkbox' checked>
                <span class='slider'>
                </span>
            </label>
        </div>
    </div>
    <br>
    ## **States**
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle' >
                    <input type='checkbox' checked>
                    <span class='slider'></span>
                </label>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle hover' >
                    <input type='checkbox' checked>
                    <span class='slider'></span>
                </label>
            </div>
        </div>
    === "Focused"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle focus'>
                    <input type='checkbox'checked>
                    <span class='slider'></span>
                </label>
            </div>
        </div>
    === "Pressed"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle active'>
                    <input type='checkbox'checked>
                    <span class='slider'></span>
                </label>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle' >
                    <input type='checkbox' checked disabled>
                    <span class='slider'></span>
                </label>
            </div>
        </div>
    <br>


    ## Code
    === "CSS"
        ``` css
        --8<-- "components/sass/components/_toggle.scss:toggle"
        ```

    === "HTML"
        ``` { .html .copy }
        <label class='toggle'>
            <input type='checkbox' checked>
            <span class='slider'></span>
        </label>
        ```

=== "Selected w/ Icon"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <label class='toggle' >
                <input type='checkbox' checked>
                <span class='slider'>
                    :material-check:{.checked}
                    :octicons-x-16:{.unchecked}
                </span>
            </label>
        </div>
    </div>
    <br>
    ## **States**
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle' >
                    <input type='checkbox' checked>
                    <span class='slider'>
                      :material-check:{.checked}
                      :octicons-x-16:{.unchecked}
                    </span>
                </label>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle hover' >
                    <input type='checkbox' checked>
                    <span class='slider'>
                      :material-check:{.checked}
                      :octicons-x-16:{.unchecked}
                    </span>
                </label>
            </div>
        </div>
    === "Focused"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle focus'>
                    <input type='checkbox'checked>
                    <span class='slider'>
                        :material-check:{.checked}
                        :octicons-x-16:{.unchecked}
                    </span>                
                </label>
            </div>
        </div>
    === "Pressed"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle active'>
                    <input type='checkbox'checked>
                    <span class='slider'>
                        :material-check:{.checked}
                        :octicons-x-16:{.unchecked}
                    </span>   
                </label>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle' >
                    <input type='checkbox' checked disabled>
                    <span class='slider'>
                        :material-check:{.checked}
                        :octicons-x-16:{.unchecked}
                    </span>   
                </label>
            </div>
        </div>
    <br>

    === "CSS" 
        ``` css
        --8<-- "components/sass/components/_toggle.scss:toggle-icon"
        ```

    === "HTML"
        ``` html  
        <label class='toggle' >
            <input type='checkbox' checked>
            <span class='slider'>
                :material-check:{.checked}
                :octicons-x-16:{.unchecked}
            </span>
        </label>
        ```

=== "De-Selected No Icon"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <label class='toggle' >
                <input type='checkbox'>
                <span class='slider'>
                </span>
            </label>
        </div>
    </div>
    <br>
    ## **States**
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle' >
                    <input type='checkbox'>
                    <span class='slider'></span>
                </label>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle hover' >
                    <input type='checkbox'>
                    <span class='slider'></span>
                </label>
            </div>
        </div>
    === "Focused"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle focus'>
                    <input type='checkbox'>
                    <span class='slider'></span>
                </label>
            </div>
        </div>
    === "Pressed"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle active'>
                    <input type='checkbox'>
                    <span class='slider'></span>
                </label>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle' >
                    <input type='checkbox' disabled>
                    <span class='slider'></span>
                </label>
            </div>
        </div>
    <br>


    ## Code

    === "CSS"
        ``` css
        --8<-- "components/sass/components/_toggle.scss:toggle"
        ```
    === "HTML"
      ``` html
      <label class='toggle'>
          <input type='checkbox'>
          <span class='slider'></span>
      </label>
      ```

=== "De-Selected w/ Icon"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <label class='toggle' >
                <input type='checkbox' >
                <span class='slider'>
                    :material-check:{.checked}
                    :octicons-x-16:{.unchecked}
                </span>
            </label>
        </div>
    </div>
    <br>
    ## **States**
    === "Default"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle' >
                    <input type='checkbox'>
                    <span class='slider'>
                      :material-check:{.checked}
                      :octicons-x-16:{.unchecked}
                    </span>
                </label>
            </div>
        </div>
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle hover' >
                    <input type='checkbox'>
                    <span class='slider'>
                      :material-check:{.checked}
                      :octicons-x-16:{.unchecked}
                    </span>
                </label>
            </div>
        </div>
    === "Focused"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle focus'>
                    <input type='checkbox'>
                    <span class='slider'>
                        :material-check:{.checked}
                        :octicons-x-16:{.unchecked}
                    </span>                
                </label>
            </div>
        </div>
    === "Pressed"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle active'>
                    <input type='checkbox'>
                    <span class='slider'>
                        :material-check:{.checked}
                        :octicons-x-16:{.unchecked}
                    </span>   
                </label>
            </div>
        </div>
    === "Disabled"
        <div class="btn-grid-1">
            <div class="grid-items"> 
                <label class='toggle' >
                    <input type='checkbox' disabled>
                    <span class='slider'>
                        :material-check:{.checked}
                        :octicons-x-16:{.unchecked}
                    </span>   
                </label>
            </div>
        </div>
    <br>

    === "CSS"
        ``` css
        --8<-- "components/sass/components/_toggle.scss:toggle-icon"
        ```

    === "HTML"
        ``` html
        <label class='toggle' >
            <input type='checkbox'>
            <span class='slider'>
                :material-check:{.checked}
                :octicons-x-16:{.unchecked}
            </span>
        </label>
        ```