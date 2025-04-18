// 🟢 Configuración del menú hamburguesa + carga inicial
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  toggle?.addEventListener('click', () => {
    nav?.classList.toggle('active');
  });

  setTimeout(() => {
    solicitarDatosUsuario();
    mostrarDoctores();
    mostrarDatosHospital();
  }, 300);
});

// 🧾 Solicita datos al usuario y valida campos básicos
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

  console.log("📋 Datos ingresados:");
  console.log("Nombre:", nombre);
  console.log("Email:", email);
  console.log("Teléfono:", telefono);

  validarTelefono(telefono);
}

// 📞 Validación de teléfono con expresión regular y manejo de errores
function validarTelefono(telefono) {
  try {
    if (!telefono.match(/^\d{7,}$/)) {
      throw new Error("Número de teléfono inválido (mínimo 7 dígitos)");
    }
    console.log("✅ Teléfono válido:", telefono);
  } catch (error) {
    console.error("❌ Error de validación:", error.message);
    alert("El número de teléfono es incorrecto. Por favor intente nuevamente.");
  }
}

// 🧠 Datos del hospital y equipo médico completo
const hospital = {
  nombre: "Hospital Raccoon City",
  ubicacion: "Zona Médica Central",
  contacto: {
    email: "contacto@raccoonhospital.com",
    telefono: "+1 555-UMBRELLA"
  },
  doctores: [
    // ✅ Tus doctores (los que ya definiste)...
    {
      nombre: "Dr. William Birkin",
      especialidad: "G-Virus",
      unidad: "Bioingeniería",
      experiencia: 15,
      contacto: { correo: "birkin@umbrella.com", horario: "08:00 - 16:00" }
    },
    {
      nombre: "Dr. James Marcus",
      especialidad: "Proyectos Progenitor",
      unidad: "Investigación y Desarrollo",
      experiencia: 20,
      contacto: { correo: "marcus@umbrella.com", horario: "09:00 - 17:00" }
    },
    {
      nombre: "Dr. Alex Wesker",
      especialidad: "Psicogenética y control mental",
      unidad: "Neurológica y Psicológica",
      experiencia: 12,
      contacto: { correo: "awesker@umbrella.com", horario: "10:00 - 18:00" }
    },
    {
      nombre: "Dr. Luis Sera",
      especialidad: "Organismos parásitos",
      unidad: "Investigación y Desarrollo",
      experiencia: 10,
      contacto: { correo: "lsera@umbrella.com", horario: "08:30 - 16:30" }
    },
    {
      nombre: "Dr. Charles Ashford",
      especialidad: "Genética y Bioética",
      unidad: "Investigación y Desarrollo",
      experiencia: 18,
      contacto: { correo: "cashford@umbrella.com", horario: "07:00 - 15:00" }
    },
    {
      nombre: "Dr. Cameron",
      especialidad: "Desarrollo clínico no convencional",
      unidad: "Investigación y Desarrollo",
      experiencia: 14,
      contacto: { correo: "dcameron@umbrella.com", horario: "11:00 - 19:00" }
    },
    {
      nombre: "Dr. Richard Aiken",
      especialidad: "Trauma y primeros auxilios",
      unidad: "Emergencias y Evaluación Clínica",
      experiencia: 9,
      contacto: { correo: "raiken@umbrella.com", horario: "06:00 - 14:00" }
    },
    {
      nombre: "Dra. Reisa Brookes",
      especialidad: "Evaluación conductual y emergencias",
      unidad: "Neurológica y Emergencias",
      experiencia: 8,
      contacto: { correo: "rbrookes@umbrella.com", horario: "14:00 - 22:00" }
    },
    {
      nombre: "Dr. Ethan Waggoner",
      especialidad: "Psicología de combate",
      unidad: "Neurológica y Psicológica",
      experiencia: 7,
      contacto: { correo: "ewaggoner@umbrella.com", horario: "12:00 - 20:00" }
    },
    {
      nombre: "Dr. Albert Wesker",
      especialidad: "Contención táctica",
      unidad: "Seguridad Clínica",
      experiencia: 16,
      contacto: { correo: "awesker@umbrella.com", horario: "09:00 - 17:00" }
    },
    {
      nombre: "Dr. John Clemens",
      especialidad: "Protocolos restringidos",
      unidad: "Seguridad Clínica",
      experiencia: 5,
      contacto: { correo: "jclemens@umbrella.com", horario: "07:30 - 15:30" }
    }
  ]
};

// 🏥 Mostrar datos generales del hospital
function mostrarDatosHospital() {
  const { nombre, contacto, doctores } = hospital;
  console.log("🏥 Hospital:", nombre);
  console.log("📞 Teléfono:", contacto.telefono);
  const [primero] = doctores;
  const { nombre: nombreDoc, especialidad, contacto: { correo } } = primero;
  console.log(`👨‍⚕️ ${nombreDoc} - ${especialidad} (${correo})`);
}

// 💉 Renderizar doctores con +5 años
function mostrarDoctores() {
  const contenedor = document.querySelector("#lista-doctores");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  hospital.doctores.forEach((doc) => {
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
            <p class="card-text"><strong>Horario:</strong> ${doc.contacto.horario}</p>
          </div>
        </div>
      `;
      contenedor.appendChild(card);
    }
  });
}

// 🔍 Buscador extendido
document.addEventListener('DOMContentLoaded', () => {
  const formBusqueda = document.querySelector("#form-busqueda");
  const inputEspecialidad = document.querySelector("#input-especialidad");
  const inputUnidad = document.querySelector("#input-unidad");
  const inputExperiencia = document.querySelector("#input-experiencia");
  const resultado = document.querySelector("#resultado-busqueda");

  formBusqueda?.addEventListener("submit", (e) => {
    e.preventDefault();
    resultado.innerHTML = "";

    const especialidad = inputEspecialidad.value.trim().toLowerCase();
    const unidad = inputUnidad?.value.trim().toLowerCase();
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
        const card = document.createElement("div");
        card.classList.add("col-md-6", "col-lg-4");
        card.innerHTML = `
          <div class="card h-100 bg-secondary text-light">
            <div class="card-body">
              <h5 class="card-title">${doc.nombre}</h5>
              <p class="card-text"><strong>Unidad:</strong> ${doc.unidad}</p>
              <p class="card-text"><strong>Especialidad:</strong> ${doc.especialidad}</p>
              <p class="card-text"><strong>Experiencia:</strong> ${doc.experiencia} años</p>
              <p class="card-text"><strong>Horario:</strong> ${doc.contacto?.horario || "No disponible"}</p>
            </div>
          </div>
        `;
        resultado.appendChild(card);
      });
    }

    formBusqueda.reset();
  });
});
