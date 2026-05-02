
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

