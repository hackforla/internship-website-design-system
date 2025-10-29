---
hide:
  - toc
---

# **Grid System**

=== "Grid"
    <div class="grid-demo">
    <div class="page-grid">
        <div class="grid-box"></div>
        <div class="grid-box"></div>
        <div class="grid-box"></div>
        <div class="grid-box"></div>
        <div class="grid-box"></div>
        <div class="grid-box"></div>
        <div class="grid-box"></div>
        <div class="grid-box"></div>
        <div class="grid-box"></div>
        <div class="grid-box"></div>
        <div class="grid-box"></div>
        <div class="grid-box"></div>
    </div>
    </div>

    ## **Code**

    === "HTML"
        ```html
        <div class="grid-demo">
            <div class="page-grid">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
            </div>
        </div>
        ```
    === "CSS"
        ```css
        --8<-- "components/sass/layout/_grid.scss:grid"
        ```

=== "Sizing"
    <div class="grid-demo">
        <div class="page-grid">
            <div class="grid-box grid-highlight span4">span4</div>
            <div class="grid-box"></div>
            <div class="grid-box"></div>
            <div class="grid-box"></div>
            <div class="grid-box"></div>
            <div class="grid-box"></div>
            <div class="grid-box"></div>
            <div class="grid-box"></div>
            <div class="grid-box"></div>
        </div>
    </div>

    ## **Code**

    === "HTML"
        ```html
        <div class="grid-demo">
            <div class="page-grid">
                <div class="grid-box highlight span4">span4</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        ```
    === "CSS"
        ```css
        --8<-- "components/sass/layout/_grid.scss:span"
        ```

=== "Position"
    <div class="grid-demo">
        <div class="page-grid">
            <div class="grid-box"></div>
            <div class="grid-box"></div>
            <div class="grid-box grid-highlight push2">push2</div>
            <div class="grid-box"></div>
            <div class="grid-box"></div>
            <div class="grid-box"></div>
            <div class="grid-box"></div>
            <div class="grid-box"></div>
            <div class="grid-box"></div>
            <div class="grid-box"></div>
            <div class="grid-box"></div>
            <div class="grid-box"></div>
        </div>
    </div>

    ## **Code**

    === "HTML"
        ```html
        <div class="grid-demo">
            <div class="page-grid">
                <div class="push2">push2</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>


        ```
    === "CSS"
        ```css
        --8<-- "components/sass/layout/_grid.scss:push"
        ```


## **Table**

| Columns | Margin (px) | Gutter (px) | Window Class |
|----------|--------------|--------------|--------------|
| 4 | 16 | 16 | Compact |
| 8 | 24 | 24 | Medium |
| 8 | 24 | 48 | Expanded |
| 12 | 72 | 24 | Large |