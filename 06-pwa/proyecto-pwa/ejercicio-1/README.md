# FrontEnd - Módulo 6, Ejercicio 1

## Descripción del proyecto

Este proyecto consiste en una página web para un hospital ficticio, incluyendo sus diferentes servicios y personal médico.
Se continúa con el proyecto iniciado en el Módulo 4.

## Ejercicio

### Creación del Manifiesto

Se creó el manifiesto en base a las condiciones dadas, guardándolo en `public/manifest.json`.

### Registro de un Service Worker Básico

Se configuró el service worker acorde a lo visto en clases, validando en modo offline y Lighthouse para verificar su funcionamiento.

### Implementación de Estrategias de Almacenamiento en Caché

Se implementó una estrategia de caché tipo `cache-first` para el evento `fetch` del service worker, acorde a lo visto en clases.

### Pruebas de Funcionamiento Offline y Validación con Lighthouse

Se ejecutó Lighthouse en modo offline, validando el funcionamiento del service worker y la PWA y obteniendo los siguientes resultados:
- Performance: 71
- Accesibility: 98
- Best Practices: 96
- SEO: 82

Requiere Node.js y npm instalados para su uso.
Desde la raíz del proyecto:
- Ejecutar el comando `npm install` para instalar las dependencias del proyecto.
- Ejecutar el comando `json-server db.json` para ejecutar la API simulada con base de datos.
- Ejecutar el comando `npm run dev` para ejecutar el proyecto.