// ==============================
// 📦 IMPORTACIÓN DE DATOS
// ==============================
import { hospital } from './hospitalData.js';

// ==============================
// 🌐 CONFIGURACIÓN INICIAL Y EVENTOS
// ==============================
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  toggle?.addEventListener('click', () => {
    nav?.classList.toggle('active');
  });

  // Solo funciones genéricas al cargar
  setTimeout(() => {
    solicitarDatosUsuario();
    mostrarDatosHospital();
  }, 300);
});

// ==============================
// 📋 SOLICITUD Y VALIDACIÓN DE DATOS
// ==============================
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

// ==============================
// 🏥 DATOS INSTITUCIONALES
// ==============================
function mostrarDatosHospital() {
  const { nombre, contacto, doctores } = hospital;
  console.log("🏥 Hospital:", nombre);
  console.log("📞 Teléfono:", contacto.telefono);
  const [primero] = doctores;
  const { nombre: nombreDoc, especialidad, contacto: { correo } } = primero;
  console.log(`👨‍⚕️ ${nombreDoc} - ${especialidad} (${correo})`);
}
