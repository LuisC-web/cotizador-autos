import React from 'react';

const Error = ({ children }) => {
  return (
    <div className="bg-red-500 text-white  text-center rounded-lg p-3 text-xl uppercase">
      {children}
    </div>
  );
};

export default Error;
