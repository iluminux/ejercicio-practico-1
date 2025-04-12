# 🏥 Hospital Homeostasis - Ejercicio Front-End

Este proyecto es parte del Bootcamp de Desarrollo de Aplicaciones Front-End.  
Corresponde a la **Unidad 2: Desarrollo de la Interfaz de Usuario Web**.

---

## 📁 Estructura del proyecto
ejercicio-2/ ├── index.html ├── equipo.html ├── contacto.html ├── img/ # Imágenes del sitio ├── css/ # CSS compilado automáticamente │ └── main.css ├── scss/ # Código fuente en SCSS │ ├── main.scss │ ├── abstracts/ │ │ ├── _variables.scss │ │ └── _mixins.scss │ ├── base/ │ │ ├── _reset.scss │ │ └── _typography.scss │ ├── components/ │ │ ├── _header.scss │ │ └── _footer.scss │ └── layout/ │ ├── _home.scss │ ├── _equipo.scss │ └── _contacto.scss └── .vscode/ └── settings.json

---

## ⚙️ Tecnologías utilizadas

- HTML5 + CSS3
- SCSS (estructura modular con `@use`)
- Live Sass Compiler (VS Code Extension)
- Google Fonts (`Roboto`)
- Live Server (para visualizar en tiempo real)

---

## 💻 ¿Cómo trabajar el proyecto?

1. Abre la carpeta `ejercicio-2` en Visual Studio Code.
2. Asegúrate de tener estas extensiones:
   - Live Server ✅
   - Live Sass Compiler ✅
3. Activa el compilador con **"Watch Sass"** abajo a la derecha.
4. Modifica archivos `.scss` y guarda: `main.css` se generará automáticamente en `css/`.
5. Abre el proyecto con Live Server para ver los cambios.

---

## ✅ Estilos organizados

- Variables globales (`_variables.scss`)
- Reset CSS (`_reset.scss`)
- Tipografía general (`_typography.scss`)
- Componentes (`_header.scss`, `_footer.scss`)
- Estilos por página:
  - `index.html` → `body.home`
  - `equipo.html` → `body.equipo`
  - `contacto.html` → `body.contacto`

---

## 🧠 Autor

👩‍💻 Proyecto desarrollado por Karina Hidalgo  
📅 Bootcamp Front-End 2024  
🚀 Módulo 2 - Desarrollo de la interfaz de usuario web

