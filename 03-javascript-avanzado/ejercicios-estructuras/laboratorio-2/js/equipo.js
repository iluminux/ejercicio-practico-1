// ==============================
// 📦 IMPORTACIÓN DE DATOS
// ==============================
import { hospital } from './HospitalData.js';
import { serviciosMedicos } from './HospitalServicios.js';

// ==============================
// 🧪 Mostrar médicos
// ==============================
function mostrarListaMedicos(lista = hospital.doctores) {
  const ul = document.getElementById("lista-medicos");
  if (!ul) return;

  ul.innerHTML = "";
  lista.forEach((doc) => {
    const li = document.createElement("li");
    li.className = "list-group-item bg-dark text-light border-secondary";
    li.innerHTML = `
      <strong>${doc.nombre}</strong> - ${doc.especialidad}<br>
      Contacto: ${doc.contacto.correo} | Horario: ${doc.contacto.horario}
    `;
    ul.appendChild(li);
  });
}

// ==============================
// 🧾 Mostrar servicios
// ==============================
function mostrarServicios(lista = serviciosMedicos) {
  const contenedor = document.getElementById("lista-servicios");
  if (!contenedor) return;

  contenedor.innerHTML = "";
  lista.forEach((servicio) => {
    const div = document.createElement("div");
    div.className = "col-md-6 col-lg-4";
    div.innerHTML = `
      <div class="card h-100 bg-secondary text-light">
        <div class="card-body">
          <h5 class="card-title">${servicio.nombre}</h5>
          <p class="card-text">${servicio.descripcion}</p>
          <p class="card-text"><strong>Valor:</strong> $${servicio.precio.toLocaleString()}</p>
        </div>
      </div>
    `;
    contenedor.appendChild(div);
  });
}

// ==============================
// 🔍 Filtrado de servicios
// ==============================
function configurarFiltroServicios() {
  const form = document.getElementById("form-servicios");
  const inputNombre = document.getElementById("filtro-nombre");
  const inputMin = document.getElementById("filtro-min");
  const inputMax = document.getElementById("filtro-max");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = inputNombre.value.trim().toLowerCase();
    const min = parseInt(inputMin.value) || 0;
    const max = parseInt(inputMax.value) || Infinity;

    const filtrados = serviciosMedicos.filter((servicio) =>
      (!nombre || servicio.nombre.toLowerCase().includes(nombre)) &&
      servicio.precio >= min &&
      servicio.precio <= max
    );

    mostrarServicios(filtrados);
  });
}

// ==============================
// 🔍 Filtrado por especialidad
// ==============================
function configurarFiltroEspecialidad() {
  const select = document.getElementById("filtro-especialidad");
  if (!select) return;

  // Llenar opciones
  const especialidades = [...new Set(hospital.doctores.map(d => d.especialidad))];
  especialidades.forEach(especialidad => {
    const option = document.createElement("option");
    option.value = especialidad;
    option.textContent = especialidad;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    const valor = select.value;
    const filtrados = valor
      ? hospital.doctores.filter(d => d.especialidad === valor)
      : hospital.doctores;

    mostrarListaMedicos(filtrados);
  });
}

// ==============================
// 🚀 INICIALIZACIÓN
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  mostrarListaMedicos();
  mostrarServicios();
  configurarFiltroServicios();
  configurarFiltroEspecialidad();
});
