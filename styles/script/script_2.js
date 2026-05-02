/* menu anterior
document.addEventListener('DOMContentLoaded', function() {
  const sectionHTML = `
  <nav class="navbar navbar-expand-lg px-4">
      <a class="navbar-brand" href="index.html">
        <img src="images/logo/300ppi/Asset 1.png" alt="Logo" height="80" class="shadow">
      </a>
  
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse justify-content-end" id="navbarMenu" >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
  
          <!-- Dropdown de Servicios -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul class="dropdown-menu ">
              <li><a class="dropdown-item" href="plumbing.html">Plumbing</a></li>
              <li><a class="dropdown-item" href="hvac.html">HVAC Maintenance</a></li>
              <li><a class="dropdown-item" href="electricity.html">Electricidad</a></li>
              <li><a class="dropdown-item" href="others.html">Otros Servicios</a></li>
            </ul>
          </li>
  
          <li class="nav-item">
            <a class="nav-link" href="aboutus.html">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  `;

  document.getElementById('nav_bar').innerHTML = sectionHTML;
});

*/
document.addEventListener("DOMContentLoaded", () => {
  const menuHTML = `
    <header class="main-header" id="mainHeader">
      <div class="header-inner">
        <a href="index.html" class="logo">
          <img src="images/logo/300ppi/Asset 1.png" alt="Logo">
        </a>

        <nav class="main-nav">
          <a href="index.html">Home</a>
          <a href="#services">Services</a>
          <a href="aboutus.html">About</a>
          <a href="contact.html">Contact</a>
        </nav>

        <div class="menu-toggle" id="menuToggle">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>

      <div class="mobile-menu" id="mobileMenu">
        <a href="index.html">Home</a>
        <a href="#services">Services</a>
        <a href="aboutus.html">About</a>
        <a href="contact.html">Contact</a>
      </div>
    </header>
  `;

  const navBar = document.getElementById("nav_bar2");

  if (navBar) {
    navBar.innerHTML = menuHTML;

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
});
  // ----- ELEMENTOS -----
  const icon = document.getElementById("toggleIcon");
  const navbarMenu = document.getElementById("navbarMenu");
  const subMenuContainer = document.getElementById("cont_sub_menu");
  const subMenu = document.getElementById("menu4");

  // ----- ESTADO INICIAL -----
  icon.classList.add("fa-angles-down", "glow-bounce");
  icon.style.color = "grey";
  navbarMenu.style.display = "none";
  subMenu.style.visibility = "hidden";
  subMenuContainer.classList.remove("active-submenu");

  // ----- CLICK BOTON PRINCIPAL -----
  icon.addEventListener("click", () => {
    const menuHidden = window.getComputedStyle(navbarMenu).display === "none";

    if (menuHidden) {
      // Abrir menu principal
      navbarMenu.style.display = "flex";
      icon.classList.remove("fa-angles-down", "glow-bounce");
      icon.classList.add("fa-angles-up");
      icon.style.color = "silver";
    } else {
      // Cerrar menu principal y reset submenú
      navbarMenu.style.display = "none";
      icon.classList.remove("fa-angles-up");
      icon.classList.add("fa-angles-down", "glow-bounce");
      icon.style.color = "grey";

      subMenu.style.visibility = "hidden";
      subMenuContainer.classList.remove("active-submenu");
    }
  });

  // ----- CLICK EN SERVICIOS -----
  subMenuContainer.addEventListener("click", (e) => {
    e.preventDefault();
    if (window.getComputedStyle(navbarMenu).display !== "none") {
      const visible = window.getComputedStyle(subMenu).visibility === "visible";
      subMenu.style.visibility = visible ? "hidden" : "visible";
      subMenuContainer.classList.toggle("active-submenu");
    }
  });
});


document.addEventListener('DOMContentLoaded',function(){
  const footer_menu=` 
    <div class="row contenedo_f">
      <div class="col-md-3 d-flex flex-column""> 
        <img src="images/logo/300ppi/Asset 1.png" style="width: 100%;">
        <p class="clear_text">Louisville, KY</p>
        <p class="clear_text">Great Value for Every Fix</p>
      </div>
  
      <div class="col-md-5 d-flex flex-column align-items-center" "> 
      
        <h2 class="h2_f">CONTACT</h2 >
        <p><a href="tel:5029123590" style="color: #FFFF;">(502) 912-3590</a></p>
        <p><a href="#" id="abrir-form" style="color: #ffff;">handydmd@gmail.com</a></p>
    
      </div>
  
      <div class="col-md-3 d-flex flex-column align-items-center"> 
        <h2 class="h2_f">QUICK LINKS</h2>
        <div>
          <ul class="navbar-nav ">
            <li class="nav-item "><a class="nav-link" href="index.html" style="color: #ffff;">Home</a></li>
            <li class="nav-item dropdown"><a class="nav-link " href="index.html#services" style="color: #ffff;"> Services</a></li>
            <li class="nav-item"><a class="nav-link " href="aboutus.html" style="color: #ffff;">About Us</a></li>
            <li class="nav-item"><a class="nav-link " href="contact.html" style="color: #ffff;">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  
`;
  document.getElementById('foot_menu').innerHTML=footer_menu;
});
