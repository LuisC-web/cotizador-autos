export const marcas = [
  { id: 1, nombre: 'Europeo' },
  { id: 2, nombre: 'Colombiano' },
  { id: 3, nombre: 'Nordico' },
];
const YEARMAX = new Date().getFullYear();

export const YEARS = Array.from(
  new Array(20),
  (valor, index) => YEARMAX - index
);

export const PLANES = [
  { id: 1, nombre: 'Basico' },
  { id: 2, nombre: 'Completo' },
];
