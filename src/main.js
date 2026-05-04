import * as combine from './combine.js';
import { ejecutarTest} from './runTest.js';

const numero1Input = document.querySelector('#numero1');
const numero2Input = document.querySelector('#numero2');
const operacionSelect = document.querySelector('#operacion');
const btncalcular = document.querySelector('#btncalcular');
const btntest = document.querySelector('#btntest');
const resultadosDiv = document.querySelector('#resultados');

function calcular() {
    try {
        const operacion = operacionSelect.value;
        const num1 = Number(numero1Input.value); // Convertimos a número de una vez
        const num2 = Number(numero2Input.value);

        let resultado;
        switch (operacion) {
            case 'ejercicio6': 
                resultado = combine.calc.ejercicio6(num1); 
                break;
            case 'ejercicio7': 
                resultado = combine.calc.ejercicio7(num1, num2); 
                break;
            case 'ejercicio8': 
                resultado = combine.calc.ejercicio8(num1, num2); 
                break;
            case 'ejercicio9': 
                resultado = combine.calc.ejercicio9(num1, num2); 
                break;
            case 'ejercicio10': 
                resultado = combine.calc.ejercicio10(num1, num2); 
                break;
            default:
                throw new Error('Operación no válida');
        }

        // El formato del resultado se maneja aquí antes de enviarlo a la UI
        const resultadoFinal = typeof resultado === 'object' 
            ? JSON.stringify(resultado, null, 2) // Añadí formato al JSON para que sea legible
            : resultado;

        mostrarResultado(resultadoFinal);

    } catch (error) {
        console.error(error);
        mostrarResultado('Error: ' + error.message);
    }
}
function mostrarTest() {
  const resultados = ejecutarTest();
  resultadosDiv.innerHTML = resultados.join("<br>");
}

// Eventos
btncalcular.addEventListener('click', calcular);
btntest.addEventListener('click', mostrarTest);
document.addEventListener("DOMContentLoaded", () => {

  const btntest = document.querySelector('#btntest');
  const resultadosDiv = document.querySelector('#resultados');

  function mostrarTests() {
    const resultados = ejecutarTests();
    resultadosDiv.innerHTML = resultados.join("<br>");
  }

  if (btntest) {
    btntest.addEventListener('click', mostrarTests);
  } else {
    console.error("❌ No existe el botón btntest en el HTML");
  }

});