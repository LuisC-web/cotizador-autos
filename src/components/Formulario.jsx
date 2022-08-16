import React, { Fragment } from 'react';
import { MARCAS, PLANES, YEARS } from '../constants';
import { useCotizador } from '../hooks/useCotizador';
import Error from './Error';

import '../styles/spiner.css';

import Spiner from './Spiner';
import Resultado from './Resultado';
const Formulario = () => {
  const {
    handleData,
    datos,
    error,
    setError,
    cotizarSeguro,
    resultado,
    cargando,
  } = useCotizador();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(datos).includes('')) {
      setError('Todos los campos son obligatorios');
      return;
    }
    setError('');
    cotizarSeguro();
  };
  return (
    <>
      <form>
        {error && <Error>{error}</Error>}
        <div className="my-5">
          <label className="block mb-3 font-bold  text-gray-500">Marca</label>
          <select
            name="marca"
            className="w-full p-3 border border-gray-600"
            onChange={(e) => handleData(e)}
          >
            <option value="">---Selecione marca---</option>
            {MARCAS.map((marca) => (
              <option className="" value={marca.id} key={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold  text-gray-500">Año</label>
          <select
            name="year"
            className="w-full p-3 border border-gray-600"
            onChange={(e) => handleData(e)}
          >
            <option value="">---Selecione año---</option>
            {YEARS.map((year) => (
              <option className="" value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold  text-gray-500">
            Elige un plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment>
                <input
                  name="plan"
                  type="radio"
                  value={plan.id}
                  key={plan.id}
                  onChange={(e) => handleData(e)}
                />
                <label className="block mb-3 font-bold text-gray-500">
                  {plan.nombre}
                </label>
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          value="Cotizar"
          className="w-full bg-pink-500 text-white font-bold p-3 rounded-lg text-xl uppercase cursor-pointer hover:opacity-90"
          onClick={(e) => handleSubmit(e)}
        />
        {cargando ? (
          <Spiner></Spiner>
        ) : (
          <Resultado resultado={resultado}></Resultado>
        )}
      </form>
    </>
  );
};

export default Formulario;
