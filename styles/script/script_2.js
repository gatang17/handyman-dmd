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
  // ----- INSERTAR MENU DINÁMICO -----
  const menuHTML = `
  <div class="row" style="width: 100vw;">
    <div class="d-flex justify-content-center align-items-center mb-5">
      <a href="index.html"><img src="images/logo/300ppi/Asset 1.png" alt="Logo" height="100" class="shadow"></a>
    </div>
    <div class="d-flex justify-content-center align-items-center mb-3">
      <i id="toggleIcon" class="fa-solid fa-angles-down  glow-bounce" style="color: grey; cursor: pointer;"></i>
    </div>
    <div class="row" id="navbarMenu" style="display: none;">
      <div class="col">
        <hr class="border border-1 border-secondary m-0">
        <div class="d-flex col con_menu3" style="justify-content: flex-end;">
          <a class="text-decoration-none menu3 mb-3" href="index.html">HOME</a>
        </div>
        <!--<hr class="border border-1 border-secondary m-0">-->
        <div id="cont_sub_menu" class="d-flex col con_menu3" style="justify-content: flex-end; cursor: pointer;">
          <a class="text-decoration-none menu3 mb-3">Servicios <i class="fa-solid fa-angle-right"></i></a>
        </div>
        <!--<hr class="border border-1 border-secondary m-0">-->
        <div class="d-flex col con_menu3" style="justify-content: flex-end;">
          <a class="text-decoration-none menu3 mb-3" href="contact.html">Contacto</a>
        </div>
        <hr class="border border-1 border-secondary m-0 mb-3">
      </div>
      <div id="menu4" class="d-flex col" style="justify-content: flex-start; align-items: center; visibility: hidden;">
        <div class="col">
        <hr class="border border-1 border-secondary m-0">
        <div class="d-flex col con_menu3" style="justify-content: flex-start;"><a class="text-decoration-none menu3" href="plumbing.html">Plomeria</a></div>
        <div class="d-flex col con_menu3" style="justify-content: flex-start;"><a class="text-decoration-none menu3" href="hvac.html">HVAC Mantenimiento</a></div>
        <div class="d-flex col con_menu3" style="justify-content: flex-start;"><a class="text-decoration-none menu3" href="electricity.html">Electricidad</a></div>
        <hr class="border border-1 border-secondary m-0">
        </div>
      </div>
    </div>
  </div>
  `;
  document.getElementById("nav_bar2").innerHTML = menuHTML;

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
