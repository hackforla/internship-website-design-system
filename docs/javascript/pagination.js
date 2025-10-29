
// --8<-- [start:pagination-js]
document.addEventListener('DOMContentLoaded', () => {
    const pagination = document.querySelector(".pagination");
    if (!pagination) return;

    const pages = pagination.querySelectorAll(".pagebutton:not(.-more):not(.-ctrl)");
    const prevControl = pagination.querySelector(".pagebutton.-ctrl:first-child");
    const nextControl = pagination.querySelector(".pagebutton.-ctrl:last-child");

    let currentIndex = Array.from(pages).findIndex( (btn) => btn.classList.contains("selected"));
    if (currentIndex == -1) currentIndex = 0;

    function updatePagination() {
        // Update page states
        pages.forEach((page, i) => page.classList.toggle("selected", i === currentIndex));
        
        // Disable controls for bounding pages
        prevControl.classList.toggle("disabled", currentIndex === 0);
        nextControl.classList.toggle("disabled", currentIndex === pages.length - 1);
    }

    //Control button listeners
    prevControl.addEventListener("click", () => {
        //in case of CSS class but no HTML attribute
        if (prevControl.classList.contains("disabled")) return; 
        currentIndex--;
        updatePagination();
    });
    nextControl.addEventListener("click", () => {
        //in case of CSS class but no HTML attribute
        if (nextControl.classList.contains("disabled")) return; 
        currentIndex++;
        updatePagination();
    });
    // Page button listeners, consider refactor for dynamic/ lots of pages
    pages.forEach( (page, i) => {
        page.addEventListener("click", () => {
        currentIndex = i;
        updatePagination();
        });
    });

    updatePagination();
});

// --8<-- [end:pagination-js]