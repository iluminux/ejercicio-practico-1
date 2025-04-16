# 🏥 Hospital Raccoon City - Taller 2 (Módulo 3)

Este proyecto forma parte del Taller 2 del Módulo 3 del Bootcamp de Desarrollo Frontend. Se trata de una simulación académica de la página oficial del "Hospital Raccoon City", inspirada en la saga *Resident Evil* de Capcom.

## 👨‍💻 Tecnologías utilizadas

- HTML5 + SCSS (Sass modular)
- JavaScript (validación, DOM, condicionales, funciones, arreglos)
- Bootstrap 5 (para responsive grid)
- Live Sass Compiler

---

## 🎯 Funcionalidades JavaScript aplicadas

### ✔️ Menú hamburguesa
```js
toggle?.addEventListener('click', () => {
  nav?.classList.toggle('active');
});
```

### ✔️ Validación de datos con `prompt`, `alert` y `console`
```js
solicitarDatosUsuario();
```

### ✔️ Manejo de errores con `try/catch`
```js
function validarTelefono(telefono) {
  try {
    if (!telefono.match(/^\d{7,}$/)) {
      throw new Error("Número inválido");
    }
  } catch (error) {
    console.error(error.message);
  }
}
```

### ✔️ Arreglo de objetos + renderizado dinámico
```js
const doctores = [ /* ... */ ]
mostrarDoctores();
```

### ✔️ `debugger` habilitado para revisión en DevTools (comentado por defecto)

---

## 📚 Conceptos explicados

### 🔹 `let` vs `const`
- `let` permite reasignación (ideal para variables que cambian).
- `const` declara constantes (no se pueden reasignar).

### 🔹 Ámbito (Scope)
Las variables definidas con `let` y `const` tienen **scope de bloque**, es decir, solo viven dentro del bloque `{}` donde fueron declaradas.

### 🔹 `debugger`
Instrucción que **detiene la ejecución del JS** y permite analizar variables y flujo desde las herramientas del navegador.

### 🔹 Event Loop
El `event loop` en JS es el mecanismo que gestiona **la ejecución de funciones asincrónicas**, como `setTimeout`. En este proyecto, usamos `setTimeout()` para dar un pequeño retardo al cargar los datos.

---

## 📸 Capturas del proyecto

### 🧠 Inicio
![Inicio](img/screenshots/screenshot-inicio.jpeg)

### 🧪 Sección equipo
![Equipo](img/screenshots/screenshot-equipo.jpeg)

### 🏥 Instalaciones
![Instalaciones](img/screenshots/screenshot-instalaciones.jpeg)

### 🗺️ Mapa
![Mapa](img/screenshots/screenshot-mapas.jpeg)

### 📋 Validaciones
- Nombre vacío  
![Nombre vacío](img/screenshots/screenshot-inicio-a-nombre.PNG)
- Teléfono correcto  
![Teléfono válido](img/screenshots/screenshot-inicio-b-telefono.PNG)
- Teléfono incorrecto  
![Teléfono inválido](img/screenshots/screenshot-inicio-c-telefono-incorrecto.PNG)
- Correo válido  
![Email válido](img/screenshots/screenshot-inicio-d-correo-electronico.PNG)
- Correo inválido  
![Email inválido](img/screenshots/screenshot-inicio-e-correo-invalido.PNG)

---

## ⚠️ Aviso legal
Este proyecto fue desarrollado con fines académicos. El contenido está inspirado en la saga *Resident Evil* y no tiene fines comerciales.

---

🎉 *Proyecto completo y funcional – ¡entregado con estilo Umbrella Corporation®!*

---

🟢 Entregado como el 2do taller del Módulo 3: Programación avanzada en JavaScript del Bootcamp Desarrollo de Aplicaciones Front-End.

---

## 👩‍💻 Autoría
Desarrollado por: **Karina Hidalgo**  