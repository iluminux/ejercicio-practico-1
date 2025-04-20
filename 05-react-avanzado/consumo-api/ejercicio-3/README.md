# 🧪 ABPro 2 - Módulo 5: Consumo de API con Autenticación

Este proyecto fue desarrollado como parte del Ejercicio Práctico 2 del Módulo 5 del Bootcamp Frontend.  
Se trata de una aplicación React que consume una API simulada y utiliza autenticación de usuario mediante contexto.

---

## 🛠️ Tecnologías Utilizadas

- React + Vite
- Hooks (`useState`, `useEffect`, `useContext`)
- React Router DOM (`v6`)
- Context API
- Simulación de API: `JSONPlaceholder`

---

## ✅ Requisitos cumplidos

- ✅ Pantalla de login con campos de nombre y correo electrónico.
- ✅ Al iniciar sesión, se guarda la información en contexto y se navega al home.
- ✅ Uso de rutas privadas (`RutaPrivada.jsx`) para proteger la vista principal.
- ✅ Botón de cerrar sesión que limpia el usuario y redirige a `/`.
- ✅ Consumo de datos desde una API simulada para listar doctores.
- ✅ Uso correcto de `AuthProvider` y `useContext`.
- ✅ Vista responsive.

---

## 👩‍⚕️ Flujo de funcionamiento

### 1. Inicio con nombre y correo  
El usuario ingresa su información de inicio:

![Inicio con nombre](.img/screenshots/screenshot-inicio-nombre.JPG)
![Inicio con mail](.img/screenshots/screenshot-inicio-mail.JPG)  
![Inicio completo](.img/screenshots/screenshot-inicio-sesion.jpeg)

### 2. Redirección al Home  
Una vez logueado, se muestra el home del hospital y el saludo personalizado:

![Vista Home](.img/screenshots/screenshot-home.jpeg)

### 3. Cierre de sesión  
Desde el botón "🔒 Cerrar sesión", el usuario puede salir del sistema:

![Cerrar sesión](.img/screenshots/screenshot-logout.JPG)

---

## 🚀 ¿Cómo ejecutar?

1. Clona el repositorio o descarga el ZIP.
2. En la terminal, ubícate en la carpeta `hospital-raccoon`.
3. Ejecuta los siguientes comandos:

```bash
npm install
npm run dev

Abre tu navegador en http://localhost:5173

✨ Justificación técnica
Se usó Context API para manejar la sesión del usuario de forma global.

Se implementó React Router con rutas protegidas para controlar el acceso a Home.

La API se consumió con fetch (o axios, si fuera el caso), haciendo uso de useEffect para cargar los doctores una vez montado el componente.

👩‍💻 Autoría
Desarrollado por Karina Hidalgo como parte del Ejercicio 2 del Bootcamp Frontend – Módulo 5.