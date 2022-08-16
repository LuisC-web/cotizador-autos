export const obtenerDiferenciaDeAnio = (year) => {
  return new Date().getFullYear() - year;
};

export const calcularMarca = (marca) => {
  let incremento = 0;
  switch (marca) {
    case '1':
      incremento = 1.3;
      break;
    case '2':
      incremento = 1.15;

      break;
    case '3':
      incremento = 1.05;
  }
  return incremento;
};

export const calcularPlan = (plan) => (plan === '1' ? 1.2 : 1.5);
