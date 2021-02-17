import React from "react";

const Reduce = () => {

  const arreglo = [
    { nombre: "ivan", edad: 26 },
    { nombre: "omar", edad: 27 },
    { nombre: "araceli", edad: 28 },
    { nombre: "ivan2", edad: 29 },
    { nombre: "ivan3", edad: 29 },
    { nombre: "ivan4", edad: 29 },
  ];

  const indexed = arreglo.reduce(
    (acc, el) => ({
      ...acc,
      [el.nombre]: el,
    }),
    {}
  );
  console.log(indexed);

  

  return (
    <>
      <h1>Holis</h1>
    </>
  );
  
};

export default Reduce;


