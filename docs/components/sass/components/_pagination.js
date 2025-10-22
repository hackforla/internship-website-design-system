
// --8<-- [start:pagination-js]
document.addEventListener('DOMContentLoaded', () => {
    const pagination = document.querySelector(".pagination");
    if (!pagination) return;

    const pages = pagination.querySelectorAll(".pagebutton.-page");
    const prevControl = pagination.querySelector(".pagebutton.-ctrl:first-child");
    const nextControl = pagination.querySelector(".pagebutton.-ctrl:last-child");

    let currentIndex = Array.from(pages).findIndex( (btn) => btn.classList.contains("selected"));
    if (currentIndex == -1) currentIndex = 0;

    function updatePagination() {
        // Update page states
        pages.forEach((btn, i) => btn.classList.toggle("selected", i === currentIndex));
        
        // Disable controls for bounding pages
        prevControl.classList.toggle("disabled", currentIndex === 0);
        nextControl.classList.toggle("disabled", currentIndex === pages.length - 1);
    }

    //Click listeners
    prevButton.addEventListener("click", () => {
        //in case of CSS class but no HTML attribute
        if (prevButton.contains("disabled")) return; 
        currentIndex++;
        updatePagination();
    });
    nextButton.addEventListener("click", () => {
        //in case of CSS class but no HTML attribute
        if (nextButton.contains("disabled")) return; 
        currentIndex--;
        updatePagination();
    });

    updatePagination();
});

// --8<-- [end:pagination-js]