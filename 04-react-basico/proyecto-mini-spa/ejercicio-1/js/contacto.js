document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form-contacto");
  const feedback = document.createElement("div");

  feedback.id = "info-funcional";
  feedback.classList.add("mt-4", "text-light", "bg-dark", "p-3", "rounded", "shadow-sm");

  form?.insertAdjacentElement("afterend", feedback);

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const mensaje = document.getElementById("mensaje")?.value.trim();

    if (!nombre || !email || !mensaje) {
      feedback.innerHTML = `<p class="text-warning">⚠ Por favor completa todos los campos.</p>`;
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      feedback.innerHTML = `<p class="text-warning">⚠ Correo inválido. Asegúrate de usar un formato válido.</p>`;
      return;
    }

    feedback.innerHTML = `
      <h5 class="text-success">✅ Mensaje enviado</h5>
      <p>Gracias <strong>${nombre}</strong> por contactarnos. Nos comunicaremos contigo a la brevedad.</p>
    `;

    form.reset();

    setTimeout(() => {
      feedback.innerHTML = "";
    }, 6000);
  });
});
