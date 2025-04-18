// ==============================
// 🧬 Mostrar doctores en el DOM
// ==============================
function mostrarDoctores() {
    const contenedor = document.querySelector("#lista-doctores");
    if (!contenedor) return;
  
    contenedor.innerHTML = "";
  
    hospital.doctores.forEach((doc) => {
      if (doc.experiencia > 5) {
        const card = crearCardDoctor(doc, "bg-dark");
        contenedor.appendChild(card);
      }
    });
  }
  
  // ==============================
  // 🔎 Buscador extendido
  // ==============================
  document.addEventListener('DOMContentLoaded', () => {
    const formBusqueda = document.querySelector("#form-busqueda");
    const inputEspecialidad = document.querySelector("#input-especialidad");
    const inputUnidad = document.querySelector("#input-unidad");
    const inputExperiencia = document.querySelector("#input-experiencia");
    const resultado = document.querySelector("#resultado-busqueda");
  
    if (!formBusqueda || !resultado) return;
  
    formBusqueda.addEventListener("submit", (e) => {
      e.preventDefault();
      resultado.innerHTML = "";
  
      const especialidad = inputEspecialidad.value.trim().toLowerCase();
      const unidad = inputUnidad.value.trim().toLowerCase();
      const experienciaMin = parseInt(inputExperiencia.value) || 0;
  
      const filtrados = hospital.doctores.filter(doc =>
        (!especialidad || doc.especialidad.toLowerCase().includes(especialidad)) &&
        (!unidad || doc.unidad.toLowerCase().includes(unidad)) &&
        doc.experiencia >= experienciaMin
      );
  
      if (filtrados.length === 0) {
        resultado.innerHTML = `<p class="text-light text-center">No se encontraron resultados con los criterios ingresados.</p>`;
      } else {
        filtrados.forEach(doc => {
          const card = crearCardDoctor(doc, "bg-secondary");
          resultado.appendChild(card);
        });
      }
  
      formBusqueda.reset();
    });
  });
  
  // ==============================
  // 🔧 Utilidad para crear tarjetas
  // ==============================
  function crearCardDoctor(doc, bgColor = "bg-dark") {
    const card = document.createElement("div");
    card.classList.add("col-md-6", "col-lg-4");
    card.innerHTML = `
      <div class="card h-100 ${bgColor} text-light">
        <div class="card-body">
          <h5 class="card-title">${doc.nombre}</h5>
          <p class="card-text"><strong>Unidad:</strong> ${doc.unidad}</p>
          <p class="card-text"><strong>Especialidad:</strong> ${doc.especialidad}</p>
          <p class="card-text"><strong>Experiencia:</strong> ${doc.experiencia} años</p>
          <p class="card-text"><strong>Horario:</strong> ${doc.contacto?.horario || "No disponible"}</p>
        </div>
      </div>
    `;
    return card;
  }
  