import React from 'react';
import Formulario from './Formulario';
export const AppSeguro = () => {
  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">
          Cotizador de seguro de autos
        </h1>
        <main className="bg-white md:w-2/3 lg:w-1/2 mx-auto shadow rounded-lg p-10 mt-10">
          <Formulario></Formulario>
        </main>
      </header>
    </>
  );
};
