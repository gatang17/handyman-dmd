function getServiceFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("service");
  }

  function mostrarFormulario(service) {
    document.getElementById("info-contacto").classList.add("d-none");
    document.getElementById("formulario-contacto").classList.remove("d-none");
    const messageField = document.getElementById("message");
    if (service) {
      messageField.value = `Hola, estoy interesado(a) en el servicio de ${service.toLowerCase()}. Por favor contáctenme para más detalles.`;
    }
    messageField.focus();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const service = getServiceFromURL();
    if (service) {
      mostrarFormulario(service);
    }

    // Clic en el email para mostrar formulario
    document.getElementById("abrir-form").addEventListener("click", (e) => {
      e.preventDefault();
      mostrarFormulario(null);
    });

    // Botón para cerrar el formulario y volver a mostrar los datos
    document.getElementById("cerrar-form").addEventListener("click", () => {
      document.getElementById("formulario-contacto").classList.add("d-none");
      document.getElementById("info-contacto").classList.remove("d-none");
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const sectionHTML = `
    <nav class="navbar navbar-expand-lg px-4">
        <a class="navbar-brand" href="index.html">
          <img src="images/logo/300ppi/Asset 1.png" alt="Logo" height="80" class="shadow">
        </a>
    
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse justify-content-end" id="navbarMenu">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>
    
            <!-- Dropdown de Servicios -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul class="dropdown-menu" >
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

/*precios base*/
  document.addEventListener("DOMContentLoaded", () => {
    const precioBase = 65;
    const precioMilla = 0.5;
  
    document.getElementById("precioBase").textContent = precioBase;
    document.getElementById("precioMilla").textContent = precioMilla.toFixed(2);
  });


  /*ver mas ver menos*/
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.show-more-btn').forEach(button => {
      button.addEventListener('click', () => {
        const paragraph = button.previousElementSibling;
        if (paragraph.classList.contains('expanded')) {
          paragraph.classList.remove('expanded');
          button.textContent = 'Leer más';
        } else {
          paragraph.classList.add('expanded');
          button.textContent = 'Ver menos';
        }
      });
    });
  });
  
  

