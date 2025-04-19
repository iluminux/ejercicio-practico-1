// ==============================
// 🧩 EVENTOS - LABORATORIO 2
// ==============================

document.addEventListener('DOMContentLoaded', () => {

    // 1. Evento Click
    const btnVerHospital = document.getElementById('ver-hospital');
    btnVerHospital?.addEventListener('click', () => {
      alert("🏥 Bienvenido al Hospital Raccoon City");
    });
  
    // 2. Evento Personalizado
    const eventoEspecial = new CustomEvent('eventoSecreto', {
      detail: { mensaje: "Esto es un evento personalizado 🧬" }
    });
  
    document.addEventListener('eventoSecreto', (e) => {
      console.log("🎯 Evento personalizado recibido:", e.detail.mensaje);
    });
  
    // Lanza el evento personalizado luego de 2 segundos
    setTimeout(() => {
      document.dispatchEvent(eventoEspecial);
    }, 2000);
  
    // 3. Evento Asíncrono (Simulación con setTimeout)
    const cargarDatos = async () => {
      console.log("⏳ Cargando datos del hospital...");
      await new Promise(res => setTimeout(res, 1500));
      console.log("✅ Datos cargados con éxito.");
    };
  
    cargarDatos();
  
  });
  
  function llenarEspecialidades() {
    const select = document.getElementById("filtro-especialidad");
    if (!select) return;
  
    // Extraer especialidades únicas
    const especialidadesUnicas = [...new Set(hospital.doctores.map(doc => doc.especialidad))];
  
    especialidadesUnicas.forEach(esp => {
      const option = document.createElement("option");
      option.value = esp;
      option.textContent = esp;
      select.appendChild(option);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    mostrarDoctores();
    mostrarListaSimple();
    configurarBuscador();
    llenarEspecialidades(); // 👈 importante
  });
  