
/*precios base*/
document.addEventListener('DOMContentLoaded', function() {
  const precioBase = 65;
  const precioMilla = 0.5;

  const sec_info = ` 
    <div class="modal fade" id="modalEstimado" tabindex="-1" aria-labelledby="modalEstimadoLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content p-4">
        <div class="modal-header border-0">
          <h5 class="modal-title" id="modalEstimadoLabel" style="color: #1c75bc;">¿Cómo funciona el estimado?</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body text-center">
            <h4 class="mb-2" style="color: #1cbc69;">
                💲 $<span id="precioBase"></span> + $<span id="precioMilla"></span> por milla recorrida
              </h4>
              
          <p class="mb-0 text-muted">
            Incluye evaluación del problema y presupuesto personalizado.<br>
            Si decides hacer el trabajo con nosotros, este monto <strong>se descuenta del total</strong>.<br>
            Si no, solo pagarás por la visita.
          </p>
        </div>
      </div>
    </div>
  </div>
  `;
  document.getElementById('section_info').innerHTML = sec_info;

  // Ahora sí existen los spans, puedes asignarles valores
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
  
  

