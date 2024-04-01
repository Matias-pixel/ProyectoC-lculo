import React, { useState } from "react";
import { create, all } from "mathjs";
import { Button } from "flowbite-react";

export const App = () => {
  const math = create(all);

  const [solucion, setSolucion] = useState("");

// Inicializa el estado para manejar múltiples inecuaciones como strings
const [inecuaciones, setInecuaciones] = useState(["", "", "", ""]); // Ajusta según el máximo de inecuaciones que desees permitir

  



  const resolverInecuacion = (inecuacion) => {
   
   
  };

  return (
    <div className="container mx-auto mt-10">
    <div className="flex flex-col gap-5 ">
      <h2>Ingrese las inecuaciones lineales</h2>
      {inecuaciones.map((inecuacion, index) => (
        <input
          key={index}
          type="text"
          value={inecuacion}
          onChange={(e) => {
            const nuevasInecuaciones = [...inecuaciones];
            nuevasInecuaciones[index] = e.target.value;
            setInecuaciones(nuevasInecuaciones);
          }}
        />
      ))}
      <Button onClick={() => resolverInecuacion(inecuaciones)}>Resolver</Button>
      <div>{solucion && <p>Solución: {solucion}</p>}</div>
    </div>
  </div>
  );
};
