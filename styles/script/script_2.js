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

document.addEventListener('DOMContentLoaded',function(){
    const menu_collap=`
         
  <div class="row"  style="width: 100vw;"> <!---Esto es todo el banner-->
      <div class="d-flex justify-content-center align-items-center mb-5"><a href="index.html"><img src="images/logo/300ppi/Asset 1.png" alt="Logo" height="100" class="shadow"></a></div>
        <div class="d-flex justify-content-center align-items-center mb-3"><i id="toggleIcon" class="fa-solid fa-angles-down " type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu"></i></div>
     
      <div class="row" id="navbarMenu"> <!--Aqui empieza el Menu General-->
          <div class="col" > <!--esta para q quede horizontal entre ellos-->
              <hr class="border border-1 border-secondary m-0">
               <!-- esto para q se coloreee toda la columna/fila porque sin este contenedor solo pinta el link-->
              <div class="d-flex col con_menu3 " style="justify-content: flex-end; "><a class="text-decoration-none menu3 mb-3" href="index.html">HOME </a> </div> <hr class="border border-1 border-secondary m-0"><!---linea de separacion-->
              <div id="cont_sub_menu" class="d-flex col con_menu3" style="justify-content: flex-end; "><a id="serv" class="text-decoration-none menu3 mb-3">Servicios <i class="fa-solid fa-angle-right"></i></a></div><hr class="border border-1 border-secondary m-0">
              <div class="d-flex col con_menu3" style="justify-content: flex-end; "><a class="text-decoration-none menu3 mb-3" href="contact.html">Contacto</a></div><hr class="border border-1 border-secondary m-0 mb-3">
          </div>
          <!--SubMenu q sale en la columna derecha-->
          <div id="menu4" class="d-flex  col" style="justify-content: flex-start; align-items: center;">
              <div class="col" >
                  <div class="d-flex col con_menu3" style="justify-content: flex-start; "> <a class="text-decoration-none menu3" href="plumbing.html">Plomeria</a>  </div>  <hr class="border border-1 border-secondary m-0">
                  <div class="d-flex col con_menu3" style="justify-content: flex-start; "> <a class="text-decoration-none menu3" href="hvac.html">HVAC Mantenimiento</a>  </div>  <hr class="border border-1 border-secondary m-0">
                  <div class="d-flex col con_menu3" style="justify-content: flex-start; "> <a class="text-decoration-none menu3"href="electricity.html">Electricidad</a>  </div>  <hr class="border border-1 border-secondary m-0">
              </div>
          </div>
      </div>
  </div>
  `;
    document.getElementById('nav_bar2').innerHTML=menu_collap;
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const icon = document.getElementById("toggleIcon");
    const navbarMenu = document.getElementById("navbarMenu");
    const subMenuContainer = document.getElementById("cont_sub_menu");
    const subMenu = document.getElementById("menu4");
  
    // Estado inicial al cargar la página
    icon.classList.add("fa-angles-down");
    icon.style.color = "grey";
    navbarMenu.style.display = "none"; // menú principal oculto
    subMenu.style.visibility = "hidden"; // submenú oculto
    subMenuContainer.classList.remove("active-submenu");
    icon.classList.add("glow-bounce");
  
    // Botón principal
    icon.addEventListener("click", () => {
      const isHidden = window.getComputedStyle(navbarMenu).display === "none";
  
      if (isHidden) {
        // Abrir menú principal
        navbarMenu.style.display = "flex";
        icon.classList.remove("fa-angles-down");
        icon.classList.add("fa-angles-up");
        icon.style.color = "silver";
        icon.classList.remove("glow-bounce");
        icon.classList.add("static-icon");
      } else {
        // Cerrar menú principal y resetear submenú
        navbarMenu.style.display = "none";
        icon.classList.remove("fa-angles-up");
        icon.classList.add("fa-angles-down");
        icon.style.color = "grey";
        icon.classList.remove("static-icon");
        icon.classList.add("glow-bounce");
  
        subMenu.style.visibility = "hidden"; // ocultar submenú
        subMenuContainer.classList.remove("active-submenu"); // quitar color activo
      }
    });
  
    // Click en "Servicios"
    subMenuContainer.addEventListener("click", (e) => {
      e.preventDefault();
      // Solo alternar si el menú principal está abierto
      if (window.getComputedStyle(navbarMenu).display !== "none") {
        subMenu.style.visibility =
          subMenu.style.visibility === "visible" ? "hidden" : "visible";
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
            <li class="nav-item dropdown"><a class="nav-link " href="#services" style="color: #ffff;"> Services</a></li>
            <li class="nav-item"><a class="nav-link " href="aboutus.html" style="color: #ffff;">About Us</a></li>
            <li class="nav-item"><a class="nav-link " href="contact.html" style="color: #ffff;">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  
`;
  document.getElementById('foot_menu').innerHTML=footer_menu;
});