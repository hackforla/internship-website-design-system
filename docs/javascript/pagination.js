// --8<-- [start:pagination-js]
document.addEventListener("DOMContentLoaded", () => {
  const pagination = document.querySelector(".pagination");
  if (!pagination) return;

  const list = pagination.querySelector(".pagination-items");
  if (!list) return;

  // total pages: read from the largest number already in the HTML (e.g., "10")
  const nums = Array.from(
    list.querySelectorAll(".pagebutton:not(.-ctrl):not(.-more) .pageicon")
  )
    .map((el) => parseInt(el.textContent, 10))
    .filter(Number.isFinite);

  const totalPages = nums.length ? Math.max(...nums) : 10;

  // current page: read from .selected if present, else 1
  const selected = list.querySelector(".pagebutton.selected .pageicon");
  let currentPage = selected ? parseInt(selected.textContent, 10) : 1;
  if (!Number.isFinite(currentPage)) currentPage = 1;


  const prevIcon =
    list.querySelector(".pagebutton.-ctrl:first-child .pageicon")?.innerHTML || "‹";
  const nextIcon =
    list.querySelector(".pagebutton.-ctrl:last-child .pageicon")?.innerHTML || "›";

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function liButton(className, html, data = {}) {
    const li = document.createElement("li");
    li.className = className;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pageicon";
    btn.innerHTML = html;

    Object.entries(data).forEach(([k, v]) => {
      li.dataset[k] = String(v);
    });

    li.appendChild(btn);
    return li;
  }

  function render() {
    list.innerHTML = "";

    // Prev
    const prev = liButton("pagebutton -ctrl", prevIcon, { role: "prev" });
    if (currentPage === 1) prev.classList.add("disabled");
    list.appendChild(prev);

    // Window behavior you requested:
    // - Start: 1 2 3 4 … last
    // - Sliding: current current+1 current+2 current+3 … last
    // - End: … last-4 last-3 last-2 last-1 last
    if (totalPages <= 5) {
      for (let p = 1; p <= totalPages; p++) {
        const item = liButton("pagebutton", String(p), { page: p });
        if (p === currentPage) item.classList.add("selected");
        list.appendChild(item);
      }
    } else {
      if (currentPage <= 1) currentPage = 1;

      // End case: show "... 6 7 8 9 10" style
      if (currentPage >= totalPages - 4) {
        list.appendChild(liButton("pagebutton -more", "…", { role: "more" }));

        for (let p = totalPages - 4; p <= totalPages; p++) {
          const item = liButton("pagebutton", String(p), { page: p });
          if (p === currentPage) item.classList.add("selected");
          list.appendChild(item);
        }
      } else {
        // Normal case: show sliding 4-number window + "... last"
        const start = clamp(currentPage, 1, totalPages - 4);
        for (let p = start; p <= start + 3; p++) {
          const item = liButton("pagebutton", String(p), { page: p });
          if (p === currentPage) item.classList.add("selected");
          list.appendChild(item);
        }

        list.appendChild(liButton("pagebutton -more", "…", { role: "more" }));

        const last = liButton("pagebutton", String(totalPages), { page: totalPages });
        if (currentPage === totalPages) last.classList.add("selected");
        list.appendChild(last);
      }
    }

    // Next
    const next = liButton("pagebutton -ctrl", nextIcon, { role: "next" });
    if (currentPage === totalPages) next.classList.add("disabled");
    list.appendChild(next);
  }

  list.addEventListener("click", (e) => {
    const li = e.target.closest(".pagebutton");
    if (!li) return;

    if (li.classList.contains("disabled")) return;
    if (li.classList.contains("-more")) return;

    const role = li.dataset.role;
    const page = li.dataset.page ? parseInt(li.dataset.page, 10) : NaN;

    if (role === "prev") currentPage = clamp(currentPage - 1, 1, totalPages);
    else if (role === "next") currentPage = clamp(currentPage + 1, 1, totalPages);
    else if (Number.isFinite(page)) currentPage = clamp(page, 1, totalPages);

    render();
  });

  render();
});
// --8<-- [end:pagination-js]
