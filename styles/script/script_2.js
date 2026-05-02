document.addEventListener("DOMContentLoaded", () => {
  /* HEADER */
  const navBar = document.getElementById("nav_bar2");

  if (navBar) {
    navBar.innerHTML = `
      <header class="main-header" id="mainHeader">
        <div class="header-inner">
          <a href="index.html" class="logo">
            <img src="images/logo/300ppi/Asset 1.png" alt="Handyman Logo">
          </a>

          <nav class="main-nav">
            <a href="index.html">Home</a>
            <a href="index.html#services">Services</a>
            <a href="aboutus.html">About</a>
            <a href="contact.html">Contact</a>
          </nav>

          <button class="menu-toggle" id="menuToggle" aria-label="Open menu">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>

        <nav class="mobile-menu" id="mobileMenu">
          <a href="index.html">Home</a>
          <a href="index.html#services">Services</a>
          <a href="aboutus.html">About</a>
          <a href="contact.html">Contact</a>
        </nav>
      </header>
    `;

    const toggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const header = document.getElementById("mainHeader");

    if (toggle && mobileMenu) {
      toggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
      });
    }

    if (header) {
      window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 60);
      });
    }
  }
const header = document.getElementById("mainHeader");

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 60);
  });
}
  /* FOOTER */
  const footer = document.getElementById("foot_menu");

  if (footer) {
    footer.innerHTML = `
      <footer class="main-footer">
        <div class="footer-grid">
          <div class="footer-col">
            <img src="images/logo/300ppi/Asset 1.png" alt="Handyman Logo" class="footer-logo">
            <p>Louisville, KY</p>
            <p>Great Value for Every Fix</p>
          </div>

          <div class="footer-col">
            <h3>Contact</h3>
            <a href="tel:5029123590">(502) 912-3590</a>
            <a href="mailto:handydmd@gmail.com">handydmd@gmail.com</a>
          </div>

          <div class="footer-col">
            <h3>Quick Links</h3>
            <a href="index.html">Home</a>
            <a href="index.html#services">Services</a>
            <a href="aboutus.html">About</a>
            <a href="contact.html">Contact</a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2026 Handyman D.M.D.</p>
        </div>
      </footer>
    `;
  }
});
