const selectTriggers = document.querySelectorAll(".select__trigger");

for (const trigger of selectTriggers) {
    trigger.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the click event from propagating to the window
        const dropdown = this.closest('.select-wrapper').querySelector('.select');
        dropdown.classList.toggle('open');
    });
}

// Add this event listener to handle custom option selection
window.addEventListener('click', function(e) {
    const allCustomOptions = document.querySelectorAll('.custom-option');
    for (const customOption of allCustomOptions) {
        customOption.classList.remove('selected'); // Remove the class from all options
    }

    for (const select of document.querySelectorAll('.select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }

    // Check if the clicked element is a custom option and add the class
    if (e.target.classList.contains('custom-option')) {
        e.target.classList.add('selected');
    }
});

// Debounce function to limit the rate at which a function is executed
function debounce(fn, delay) {
    let timeoutID;
    return function(...args) {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => fn.apply(this, args), delay);
    };
}

function handleAccessibilityTasks() {

    // Handle accessibility for mkdocs generated codeblock
    const codeLineAnchors = document.querySelectorAll('span > a[href*="__codelineno"]');
    codeLineAnchors.forEach(anchor => {
        anchor.removeAttribute('href');
    });

    // Handle accessibility for table of contents input checkbox
    const tocInput = document.getElementById('__toc');
    if (tocInput) {
        const activeLink = document.querySelector('.md-nav__link--active');
        if (activeLink) {
            const pageName = activeLink.textContent.trim();
            tocInput.setAttribute('aria-label', `${pageName} page`);
        }
    }
}

const debouncedHandleAccessibilityTasks = debounce(handleAccessibilityTasks, 300);

document.addEventListener('DOMContentLoaded', debouncedHandleAccessibilityTasks);

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            debouncedHandleAccessibilityTasks();
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Accordion JS
var acc = document.getElementsByClassName("accordion-button");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
  });
}