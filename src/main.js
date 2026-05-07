import * as ejercicios from './ejercicio.js';

const numero1Input = document.querySelector('#numero1');
const numero2Input = document.querySelector('#numero2');
const operacionSelect = document.querySelector('#operacion');
const btncalcular = document.querySelector('#btncalcular');
const btntest = document.querySelector('#btntest');
const resultadosDiv = document.querySelector('#resultados');

function mostrarResultado(texto) {
  resultadosDiv.innerHTML = texto;
}

function calcular() {

  const operacion = operacionSelect.value;
  const num1 = Number(numero1Input.value);
  const num2 = Number(numero2Input.value);

  let resultado;

  switch (operacion) {

    case 'ejercicio6':
      resultado = ejercicios.ejercicio6(num1);
      break;

    case 'ejercicio7':
      resultado = ejercicios.ejercicio7(num1, num2);
      break;

    case 'ejercicio8':
      resultado = ejercicios.ejercicio8(num1);
      break;

    case 'ejercicio9':
      resultado = ejercicios.ejercicio9(num1, num2);
      break;

    case 'ejercicio10':
      resultado = ejercicios.ejercicio10(num1);
      break;

    case 'ejercicio11':
      resultado = ejercicios.ejercicio11(
        [num1, num2],
        [num1, num2]
      );
      break;

    default:
      resultado = 'Operación no válida';
  }

  mostrarResultado(`📌 Resultado: ${JSON.stringify(resultado)}`);
}
function mostrarTest() {

  let resultados = [];

  // ✅ saludar
  if (ejercicios.saludar("Felipe") === "Hola Felipe, bienvenido a Felipe") {
    resultados.push("✅ saludar(👌)");
  } else {
    resultados.push("❌ saludar(👌)");
  }

  // ✅ despedir
  if (ejercicios.despedir("Felipe") === "Adiós Felipe") {
    resultados.push("✅ despedir(👌)");
  } else {
    resultados.push("❌ despedir(👌)");
  }

  // ✅ estadoSistema
  if (ejercicios.estadoSistema() === "Sistema activo") {
    resultados.push("✅ estadoSistema(👌)");
  } else {
    resultados.push("❌ estadoSistema👌)");
  }

  // ✅ sumar
  if (ejercicios.sumar(2, 3) === 5) {
    resultados.push("✅ sumar(👌)");
  } else {
    resultados.push("❌ sumar(👌)");
  }

  // ✅ restar
  if (ejercicios.restar(10, 5) === 5) {
    resultados.push("✅ restar(👌)");
  } else {
    resultados.push("❌ restar(👌)");
  }

  // ✅ ejercicio5
  if (ejercicios.ejercicio5(5) === 120) {
    resultados.push("✅ ejercicio5(👌)");
  } else {
    resultados.push("❌ ejercicio5(👌)");
  }

  // ✅ ejercicio6
  if (JSON.stringify(ejercicios.ejercicio6(3)) === JSON.stringify([3,2,1,0])) {
    resultados.push("✅ ejercicio6(👌)");
  } else {
    resultados.push("❌ ejercicio6(👌)");
  }

  // ✅ ejercicio7
  if (JSON.stringify(ejercicios.ejercicio7(1,10)) === JSON.stringify([2,4,6,8,10])) {
    resultados.push("✅ ejercicio7(👌)");
  } else {
    resultados.push("❌ ejercicio7(👌)");
  }

  // ✅ ejercicio8
  if (JSON.stringify(ejercicios.ejercicio8(10)) === JSON.stringify([1,3,5,7,9])) {
    resultados.push("✅ ejercicio8(👌)");
  } else {
    resultados.push("❌ ejercicio8(👌)");
  }

  // ✅ ejercicio9
  if (ejercicios.ejercicio9(2,3) === 8) {
    resultados.push("✅ ejercicio9(👌)");
  } else {
    resultados.push("❌ ejercicio9(👌)");
  }

  // ✅ ejercicio10
  if (JSON.stringify(ejercicios.ejercicio10(6)) === JSON.stringify([0,1,1,2,3,5])) {
    resultados.push("✅ ejercicio10(👌)");
  } else {
    resultados.push("❌ ejercicio10(👌)");
  }

  // ✅ ejercicio11
  if (
    JSON.stringify(
      ejercicios.ejercicio11([1,2],[3,4])
    ) === JSON.stringify([4,6])
  ) {
    resultados.push("✅ ejercicio11(👌)");
  } else {
    resultados.push("❌ ejercicio11(👌)");
  }

  resultadosDiv.innerHTML = resultados.join("<br>");
}

btncalcular.addEventListener('click', calcular);
btntest.addEventListener('click', mostrarTest);