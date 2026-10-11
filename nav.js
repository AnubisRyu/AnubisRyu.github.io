document.addEventListener("DOMContentLoaded", function () {

  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".nav-toggle");

  if (!nav) {
    return;
  }

  /*
    ========================================
    CENTRAL WEBSITE NAVIGATION

    To add or remove a page later,
    edit this list only.
    ========================================
  */

  nav.innerHTML = `
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="portfolio.html">Portfolio</a>
    <a href="modules.html">Modules</a>
    <a href="gap-brief.html">Gap Brief</a>
    <a href="resume.html">Resume</a>
    <a href="interests.html">Interests</a>
    <a href="reflection.html">Reflection</a>
    <a href="contact.html">Contact</a>
  `;

  /* Automatically highlight the current page. */
  let currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "") {
    currentPage = "index.html";
  }

  // Individual module pages are grouped under the Modules navigation item.
  const activePage = currentPage.startsWith("module") && currentPage !== "modules.html"
    ? "modules.html"
    : currentPage;

  const links = nav.querySelectorAll("a");
  links.forEach(function (link) {
    if (link.getAttribute("href") === activePage) {
      link.setAttribute("aria-current", "page");
    }
  });

  /* Mobile menu */
  if (toggle) {
    toggle.addEventListener("click", function () {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("open");
    });

    // Close the mobile menu after a navigation link is selected.
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
      }
    });
  }

  // Close the dropdown when clicking outside it.
  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // Close the dropdown with Escape.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });
});
