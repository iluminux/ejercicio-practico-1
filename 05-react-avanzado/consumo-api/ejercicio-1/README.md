# 🧪 ABPro 1 - Módulo 5: Consumo de API

Este proyecto fue desarrollado como parte del **Ejercicio Práctico 1 del Módulo 5** del Bootcamp Front-End. Se trata de una aplicación React que consume una API externa simulando el sistema del Hospital Raccoon City.

---

## 🛠️ Tecnologías Utilizadas

- React
- Vite
- Hooks: `useState`, `useEffect`
- Axios (para llamadas HTTP)
- Simulación de API: [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)

---

## ✅ Requisitos cumplidos

- [x] `useEffect` y `useState` para manejar la carga de datos.
- [x] Uso de **Axios** para llamadas HTTP.
- [x] Botón de recarga para volver a consultar la API.
- [x] Manejo de errores visible en la interfaz.
- [x] Optimización del `useEffect` para que solo se ejecute una vez.

---

## ⚙️ Estructura del proyecto

```
hospital-raccoon/
├── public/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   │   ├── AppointmentForm.jsx
│   │   ├── DoctorCard.jsx
│   │   ├── Doctores.jsx
│   │   ├── DoctorModal.jsx
│   │   ├── ServiceList.jsx
│   │   └── withHospitalStyle.jsx
│   ├── context/
│   │   └── DoctorContext.jsx
│   ├── views/
│   │   ├── Citas.jsx
│   │   ├── EquipoMedico.jsx
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── img/
│   └── screenshots/
│       └── screenshot.png
├── package.json
└── README.md
```

---

## 🚀 ¿Cómo ejecutar?

1. Clona el repositorio o descarga el ZIP.
2. Abre una terminal y ubícate en la carpeta `hospital-raccoon`.
3. Ejecuta los siguientes comandos:

```bash
npm install
npm run dev
```

4. Abre tu navegador en: [http://localhost:5173](http://localhost:5173)

---

## 🖼️ Captura del proyecto

Vista de doctores obtenida desde la API:

![Screenshot](./img/screenshots/screenshot.jpeg)

---

## 👩‍💻 Autoría

Desarrollado por **Karina Hidalgo** como parte del *Ejercicio 1 del Módulo 5 - Bootcamp Frontend*.
