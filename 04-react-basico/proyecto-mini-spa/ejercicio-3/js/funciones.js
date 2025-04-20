// ==============================
// 💉 FUNCIONES FUNCIONALES - LABORATORIO 2
// ==============================

// 1. Currying: calcular el costo total de un servicio con impuestos
const calcularCostoBase = precio => impuesto => precio + (precio * impuesto);
export const costoConIVA = calcularCostoBase(20000)(0.19); // ejemplo uso

// 2. Función Flecha: tiempo promedio de espera (en minutos) según pacientes y doctores
export const tiempoPromedioEspera = (totalPacientes, totalDoctores) =>
  (totalPacientes / totalDoctores) * 10;

// 3. Recursión: calcular total de horas semanales de atención
export function calcularHorasSemanales(horasPorDia, dias) {
  if (dias === 0) return 0;
  return horasPorDia + calcularHorasSemanales(horasPorDia, dias - 1);
}

// 4. Composición de funciones: aplicar descuento a un servicio
const aplicarDescuento = descuento => precio => precio - (precio * descuento);
const redondearPrecio = precio => Math.round(precio);
export const precioFinalConDescuento = (precio) =>
  redondearPrecio(aplicarDescuento(0.1)(precio)); // 10% descuento
