import React, { useState } from "react";
import { create, all } from "mathjs";

export const App = () => {
  const math = create(all);

  const [solution, setSolution] = useState("");

  const [inequalities, setInequalities] = useState([
    "x1 + 2 * x2 <= 5",
    "2 * x1 - 3 * x2 > 1",
  ]);

  const handleInequalityChange = (e) => {
    const newInequalities = [...inequalities];
    newInequalities[0] = e.target.value; // Actualizamos solo la primera inecuación por ahora
    setInequalities(newInequalities);
  };

  const solveSystem = () => {
    try {
      // Convertir las inecuaciones a un formato compatible con Math.js
      const equations = inequalities.map(inequality => inequality.replace(/x(\d+)/g, 'x[$1]'));
      // Resolver el sistema de inecuaciones
      const solutions = math.lusolve(equations);
      // Mostrar las soluciones
      console.log('Soluciones:', solutions);
      setSolution(solutions);
    } catch (error) {
      console.error('Error al resolver el sistema de inecuaciones:', error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex gap-5 ">
        <h2>Ingrese las inecuaciones lineales</h2>
        <input
          type="text"
          value={inequalities.join(", ")} // Unimos las inecuaciones con una coma y un espacio
          onChange={handleInequalityChange}
        />
        <button onClick={solveSystem}>Resolver</button>
        <div>{solution && <p>Solución: {solution}</p>}</div>
      </div>
    </div>
  );
};
