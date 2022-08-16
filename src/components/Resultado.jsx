import React from 'react';
import { MARCAS, PLANES } from '../constants';
import { useCotizador } from '../hooks/useCotizador';
import { useCallback, useRef } from 'react';
const Resultado = () => {
  const { resultado, datos } = useCotizador();
  const { marca, year, plan } = datos;
  const [obtenerMarca] = useCallback(
    MARCAS.filter((m) => m.id === Number(marca)),
    [resultado]
  );
  const [obtenerPlan] = useCallback(
    PLANES.filter((p) => p.id === Number(plan)),
    [resultado]
  );
  const yearRef = useRef(year);
  if (resultado == 0) return null;
  return (
    <div className=" bg-pink-500 w-full p-2 rounded-lg  mt-2 text-white text-center  ">
      <h2 className="text-2xl font-bold"> Resumen</h2>

      <p>
        <span className="font-bold">Marca: </span>
        {obtenerMarca.nombre}
      </p>
      <p>
        <span className="font-bold">Año: </span>
        {yearRef.current}
      </p>
      <p>
        <span className="font-bold">Plan: </span>
        {obtenerPlan.nombre}
      </p>
      <p>
        <span className="font-bold">Total cotización: </span>
        {resultado}
      </p>
    </div>
  );
};

export default Resultado;
