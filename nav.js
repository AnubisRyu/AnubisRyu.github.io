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
    <a href="gap-brief.html">Gap Brief</a>
    <a href="resume.html">Resume</a>
    <a href="interests.html">Interests</a>
    <a href="reflection.html">Reflection</a>
    <a href="contact.html">Contact</a>
  `;

  /*
    Automatically highlight the current page.
  */

  let currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "") {
    currentPage = "index.html";
  }

  const links = nav.querySelectorAll("a");

  links.forEach(function (link) {

    if (link.getAttribute("href") === currentPage) {
      link.setAttribute("aria-current", "page");
    }

  });

  /*
    Mobile Menu
  */

  if (toggle) {

    toggle.addEventListener("click", function () {

      const isOpen =
        toggle.getAttribute("aria-expanded") === "true";

      toggle.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

      nav.classList.toggle("open");

    });

  }

});