// Configura el menú hamburguesa y carga datos + médicos
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  toggle?.addEventListener('click', () => {
    nav?.classList.toggle('active');
  });

  // Esperá un poco para que todo cargue bien antes de pedir datos (mejora visual)
  setTimeout(() => {
    solicitarDatosUsuario();
    mostrarDoctores();
  }, 300);
});

// Solicita datos al usuario y los valida con alert + consola
function solicitarDatosUsuario() {
  const nombre = prompt("Ingrese su nombre:");
  const email = prompt("Ingrese su correo electrónico:");
  const telefono = prompt("Ingrese su número de teléfono:");

  if (!email.includes("@") || typeof email !== "string") {
    alert("Correo inválido.");
    console.warn("Validación fallida: email incorrecto");
  } else {
    alert(`Hola ${nombre}, tus datos fueron registrados.`);
  }

  console.log("Nombre:", nombre);
  console.log("Email:", email);
  console.log("Teléfono:", telefono);

  validarTelefono(telefono);
}

// Valida número de teléfono con expresión regular + manejo de errores
function validarTelefono(telefono) {
  try {
    if (!telefono.match(/^\d{7,}$/)) {
      throw new Error("Número de teléfono inválido (mínimo 7 dígitos)");
    }
    console.log("Teléfono válido:", telefono);
  } catch (error) {
    console.error("Error de validación:", error.message);
    alert("El número de teléfono es incorrecto. Por favor intente nuevamente.");
  }
}

// 🧠 Base de datos de médicos del Hospital Raccoon City
const doctores = [
  {
    nombre: "Dr. William Birkin",
    unidad: "Investigación y Desarrollo Biotecnológico",
    especialidad: "G-Virus",
    experiencia: 15
  },
  {
    nombre: "Dr. James Marcus",
    unidad: "Investigación y Desarrollo Biotecnológico",
    especialidad: "Proyectos Progenitor",
    experiencia: 20
  },
  {
    nombre: "Dr. Alex Wesker",
    unidad: "Neurológica / Biotecnología",
    especialidad: "Psicogenética y control mental",
    experiencia: 12
  },
  {
    nombre: "Dr. Luis Sera",
    unidad: "Investigación",
    especialidad: "Organismos parásitos (Las Plagas)",
    experiencia: 10
  },
  {
    nombre: "Dra. Reisa Brookes",
    unidad: "Emergencias y Neurológica",
    especialidad: "Evaluación conductual y trauma",
    experiencia: 8
  },
  {
    nombre: "Dr. John Clemens",
    unidad: "Contención y Seguridad",
    especialidad: "Acceso restringido",
    experiencia: 3
  }
];

// 🔁 Renderizar doctores en el DOM (con filtro de experiencia > 5)
function mostrarDoctores() {
  const contenedor = document.querySelector("#lista-doctores");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  doctores.forEach((doc) => {
    if (doc.experiencia > 5) {
      const card = document.createElement("div");
      card.classList.add("col-md-6", "col-lg-4");

      card.innerHTML = `
        <div class="card h-100 bg-dark text-light">
          <div class="card-body">
            <h5 class="card-title">${doc.nombre}</h5>
            <p class="card-text"><strong>Unidad:</strong> ${doc.unidad}</p>
            <p class="card-text"><strong>Especialidad:</strong> ${doc.especialidad}</p>
            <p class="card-text"><strong>Experiencia:</strong> ${doc.experiencia} años</p>
          </div>
        </div>
      `;

      contenedor.appendChild(card);
    }
  });
}

// debugger; // <- útil para pausar y revisar en herramientas de desarrollador
