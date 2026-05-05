import * as combine from './combine.js';

const numero1Input = document.querySelector('#numero1');
const numero2Input = document.querySelector('#numero2');
const operacionSelect = document.querySelector('#operacion');
const btncalcular = document.querySelector('#btncalcular');
const resultadosDiv = document.querySelector('#resultados');

function mostrarResultado(texto) {
  resultadosDiv.innerHTML = texto;
}

function calcular() {
  try {
    const operacion = operacionSelect.value;
    const num1 = Number(numero1Input.value);
    const num2 = Number(numero2Input.value);

    let resultado;

    switch (operacion) {
  case 'ejercicio6':
    resultado = combine.ejercicio6(num1, num2);
    break;

  case 'ejercicio7':
    resultado = combine.ejercicio7(num1, num2);
    break;

  case 'ejercicio8':
    resultado = combine.ejercicio8(num1);
    break;

  case 'ejercicio9':
    resultado = combine.ejercicio9(num1, num2);
    break;

  case 'ejercicio10':
    resultado = combine.ejercicio10(num1);
    break;

  case 'ejercicio11':
    resultado = combine.ejercicio11(num1, num2);
    break;

  default:
    throw new Error('Operación no válida');
}
    mostrarResultado(`📌 Resultado: ${JSON.stringify(resultado)}`);

  } catch (error) {
    mostrarResultado('Error: ' + error.message);
  }
}


function mostrarTest() {
  const resultados = ejecutarTest();
  resultadosDiv.innerHTML = resultados.join("<br>");
}

 btncalcular.addEventListener('click', calcular);
btntest.addEventListener('click', mostrarTest);


