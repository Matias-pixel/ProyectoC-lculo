
 export const extraerCoeficientes = (ecuacion) =>{
   
        const coeficientes = {};
        // Utiliza una expresión regular para encontrar los coeficientes
        const matches = ecuacion.match(/(-?\d+)x_(\d+)/g);
        matches.forEach(match => {
          const [coeficiente, variable] = match.split('x_');
          const coeficienteNum = parseInt(coeficiente);
          const variableNum = parseInt(variable);
          coeficientes[variableNum] = coeficienteNum;
        });
        return coeficientes;
}

