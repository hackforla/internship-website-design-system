// --8<-- [start:dropdown-js]
// dropdown.js

// With MkDocs Material + navigation.instant, use document$.subscribe
function initializeDropdowns() {
  // Grab all dropdown wrappers on the current page
  const wrappers = document.querySelectorAll('.dropdown-wrapper');

  wrappers.forEach(function (wrapper) {
    const field   = wrapper.querySelector('.dropdown-field');
    const valueEl = wrapper.querySelector('.dropdown-value');
    const menu    = wrapper.querySelector('.dropdown-menu');
    const options = wrapper.querySelectorAll('.dropdown-option');

    // Only wire up dropdowns that actually have a menu and components
    if (!field || !valueEl || !menu || options.length === 0) return;

    // open/close on click of the field
    field.addEventListener('click', function (event) {
      if (field.classList.contains('is-disabled')) return;

      // Stop propagation to prevent the document's click handler from closing it immediately
      event.stopPropagation();
      const isOpen = wrapper.classList.toggle('is-open');

      // add focused style when open
      field.classList.toggle('is-focused', isOpen);
    });

    // select an option
    options.forEach(function (option) {
      option.addEventListener('click', function (event) {
        event.stopPropagation();

        const text = option.textContent.trim();

        // set visible text
        valueEl.textContent = text;

        // mark dropdown as having a value so label floats
        field.classList.add('has-value');

        // close menu
        wrapper.classList.remove('is-open');
        // remove focus style
        field.classList.remove('is-focused');

        // basic selected styling
        options.forEach(function (opt) {
          opt.classList.remove('is-selected');
        });
        option.classList.add('is-selected');
      });
    });
  });

  // click outside closes any open dropdown
  document.addEventListener('click', function (event) {
    document
      .querySelectorAll('.dropdown-wrapper.is-open')
      .forEach(function (wrapper) {
        // If the click occurred inside this specific wrapper, don't close it.
        if (wrapper.contains(event.target)) return;

        const field = wrapper.querySelector('.dropdown-field');
        wrapper.classList.remove('is-open');
        if (field) field.classList.remove('is-focused');
      });
  });
}

// Execution setup: Prioritize MkDocs Instant Loading hook, fallback to standard DOM load.
// This ensures the script runs correctly even if the MkDocs hook is missing or the page is loaded normally.
if (typeof document$ !== 'undefined' && document$.subscribe) {
    // MkDocs Material Instant Loading hook
    document$.subscribe(initializeDropdowns);
} else {
    // Standard DOM ready execution
    document.addEventListener('DOMContentLoaded', initializeDropdowns);
}

// --8<-- [end:dropdown-js]

