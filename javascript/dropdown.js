// --8<-- [start:dropdown-js]

function initializeDropdowns() {
  const wrappers = document.querySelectorAll('.dropdown-wrapper');

  wrappers.forEach((wrapper) => {
    // ✅ prevent duplicate binding
    if (wrapper.dataset.dropdownInitialized === 'true') return;
    wrapper.dataset.dropdownInitialized = 'true';

    const field = wrapper.querySelector('.dropdown-field');
    const valueEl = wrapper.querySelector('.dropdown-value');
    const options = wrapper.querySelectorAll('.dropdown-option');

    if (!field) return;

    // ✅ CLICK → toggle menu
    field.addEventListener('click', (event) => {
      event.stopPropagation();

      // close others
      document.querySelectorAll('.dropdown-wrapper.is-open').forEach((el) => {
        if (el !== wrapper) el.classList.remove('is-open');
      });

      wrapper.classList.toggle('is-open');
    });

    // ✅ OPTION SELECT
    options.forEach((option) => {
      option.addEventListener('click', (event) => {
        event.stopPropagation();

        const text = option.textContent.trim();

        if (valueEl) valueEl.textContent = text;

        wrapper.classList.remove('is-open');

        options.forEach((opt) => opt.classList.remove('is-selected'));
        option.classList.add('is-selected');
      });
    });
  });

  // ✅ CLICK OUTSIDE → close all
  document.addEventListener('click', (event) => {
    document.querySelectorAll('.dropdown-wrapper.is-open').forEach((wrapper) => {
      if (!wrapper.contains(event.target)) {
        wrapper.classList.remove('is-open');
      }
    });
  });
}

/* ✅ Works for BOTH MkDocs + normal load */
document.addEventListener('DOMContentLoaded', initializeDropdowns);

if (typeof document$ !== 'undefined' && document$.subscribe) {
  document$.subscribe(initializeDropdowns);
}

// --8<-- [end:dropdown-js]