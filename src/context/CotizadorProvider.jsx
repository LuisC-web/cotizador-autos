import { useState } from 'react';
import { createContext } from 'react';
import {
  calcularMarca,
  calcularPlan,
  obtenerDiferenciaDeAnio,
} from '../helpers/global';
const CotizadorContext = createContext();
const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: '',
  });
  const [cargando, setCargando] = useState(false);
  const [resultado, setResultado] = useState(0);
  const [error, setError] = useState('');
  const handleData = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const cotizarSeguro = () => {
    //Base del seguro
    let seguro = 2000;
    //Segun el año
    const diferencia = obtenerDiferenciaDeAnio(datos.year);
    seguro -= (diferencia * 3 * seguro) / 100;
    //marca
    seguro *= calcularMarca(datos.marca);
    //plan
    seguro *= calcularPlan(datos.plan);
    seguro = seguro.toFixed(2);
    setCargando(true);
    setTimeout(() => {
      setResultado(seguro);
      setCargando(false);
    }, 3000);
  };

  return (
    <CotizadorContext.Provider
      value={{
        handleData,
        datos,
        setError,
        error,
        cotizarSeguro,
        resultado,
        cargando,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};
export { CotizadorProvider };
export default CotizadorContext;
