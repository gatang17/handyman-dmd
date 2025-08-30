
/*precios base*/
document.addEventListener("DOMContentLoaded", () => {
  const precioBase = 65;
  const precioMilla = 0.5;

  document.getElementById("precioBase").textContent = precioBase;
  document.getElementById("precioMilla").textContent = precioMilla.toFixed(2);
});

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

  //muestra el mensaje de enviado y regresa a index
  document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Oculta el formulario
    document.getElementById("formulario-contacto").classList.add("d-none");
  
    // Muestra el mensaje
    const mensaje = document.getElementById("mensaje-enviado");
    mensaje.classList.remove("d-none");
  
    // Espera 3 segundos y redirige a index.html
    setTimeout(() => {
      window.location.href = "index.html";
    }, 3000);
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
  
  

