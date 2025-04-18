document.addEventListener("DOMContentLoaded", () => {
    const formContacto = document.querySelector("#form-contacto");
    const divInfoFuncional = document.createElement("div");
  
    // Estilos para el mensaje dinámico
    divInfoFuncional.classList.add("mt-4", "text-light", "bg-dark", "p-3", "rounded", "shadow-sm");
  
    // Lo agregamos justo después del formulario
    formContacto?.insertAdjacentElement("afterend", divInfoFuncional);
  
    formContacto?.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nombre = document.getElementById("nombre")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const mensaje = document.getElementById("mensaje")?.value.trim();
  
      // Validación simple
      if (!nombre || !email || !mensaje) {
        divInfoFuncional.innerHTML = `<p class="text-warning">⚠ Por favor completa todos los campos.</p>`;
        return;
      }
  
      // Mensaje de éxito
      divInfoFuncional.innerHTML = `
        <h5 class="text-success">✅ Mensaje enviado</h5>
        <p>Gracias <strong>${nombre}</strong> por contactarnos. Nos comunicaremos contigo a la brevedad.</p>
      `;
  
      formContacto.reset();
  
      // Limpieza automática del mensaje después de 6s
      setTimeout(() => {
        divInfoFuncional.innerHTML = "";
      }, 6000);
    });
  });
  