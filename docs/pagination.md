---
hide:
  - toc
---
# Pagination
## Guidelines
The Pagination component enables users to select a specific page from a range of pages,
helping them navigate large sets of content in a clear and manageable way.

## Main Component
=== "Default"
    <style>
    --8<-- "components/sass/components/_pagination.scss:pagination"
    </style>
    <div class="btn-grid-1">
        <div class="grid-items">
            <div class="pagination">
                <ul class="pagination-items">
                    <li class="pagebutton -ctrl disabled"><a class="pageicon">:material-chevron-left:</a></li>
                    <li class="pagebutton -page selected"><a class="pageicon">1</a></li>
                    <li class="pagebutton -page"><a class="pageicon">2</a></li>
                    <li class="pagebutton -page"><a class="pageicon">3</a></li>
                    <li class="pagebutton -page"><a class="pageicon">4</a></li>
                    <li class="pagebutton -page"><a class="pageicon">5</a></li>
                    <li class="pagebutton -more"><a class="pageicon">:material-dots-horizontal:</a></li>
                    <li class="pagebutton -page"><a class="pageicon">10</a></li>
                    <li class="pagebutton -ctrl"><a class="pageicon">:material-chevron-right:</a></li>
                </ul>
            </div>
        </div>
    </div>
    <br>
    ## Code
    === "CSS"

        ``` css
            --8<-- "components/sass/components/_pagination.scss:pagination"
        ```

    === "HTML"
        ``` html
            <div class="pagination">
                <ul class="pagination-items">
                    <li class="pagebutton -ctrl"><a class="pageicon">:material-chevron-left:</a></li>
                    <li class="pagebutton -page selected"><a class="pageicon">1</a></li>
                    <li class="pagebutton -page"><a class="pageicon">2</a></li>
                    <li class="pagebutton -more"><a class="pageicon">:material-dots-horizontal:</a></li>
                    <li class="pagebutton -page"><a class="pageicon">5</a></li>
                    <li class="pagebutton -ctrl"><a class="pageicon">:material-chevron-right:</a></li>
                </ul>
            </div>
        ```
    === "JS"
        ``` js
            --8<-- "components/sass/components/_pagination.js:pagination-js"
        ```
    