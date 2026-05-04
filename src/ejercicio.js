import {
  saludar,
  despedir,
  estadoSistema,
  sumar,
  restar,
  factorial
} from "./ejercicio.js";
import assert from "assert";

function ejecutarPruebas() {
  let pasadas = 0;
  let fallidas = 0;

  console.log("--- Iniciando Pruebas Unitarias ---\n");


  const r1 = saludar("Angela");
  if (r1 && r1.toLowerCase().includes("angela")) {
    console.log("✅ Test 1 pasado (saludar)");
    pasadas++;
  } else {
    console.log("❌ Test 1 fallido:", r1);
    fallidas++;
  }


  const actualEstado = estadoSistema();
  if (actualEstado && actualEstado.estado === "activo") {
    console.log("✅ Test 2 pasado (estado)");
    pasadas++;
  } else {
    console.log("❌ Test 2 fallido:", actualEstado);
    fallidas++;
  }


  if (sumar(5, 3) === 8) {
    console.log("✅ Test 3 pasado (sumar)");
    pasadas++;
  } else {
    console.log("❌ Test 3 fallido");
    fallidas++;
  }

 
  try {
    assert.strictEqual(factorial(5), 120, "Factorial de 5 debe ser 120");
    assert.strictEqual(factorial(0), 1, "Factorial de 0 debe ser 1");
    console.log("✅ Test factorial pasado");
    pasadas++;
  } catch (error) {
    console.log("❌ Error en test factorial:", error.message);
    fallidas++;
  }

  console.log(`\nResultados: ${pasadas} pasadas, ${fallidas} fallidas`);

  if (fallidas > 0) {
    console.log("⚠️ Algunas pruebas fallaron.");
     
  } else {
    console.log("🚀 ¡Todas las pruebas pasaron con éxito!");
  }
}


export const calc = {

  ejercicio6: (a) => {
    let numero = parseInt(a);
    if (isNaN(numero)) return "Número inválido";

    let texto = "";
    while (numero >= 0) {
      texto += numero + (numero > 0 ? ", " : ""); 
      numero--;
    }
    return texto;
  },

 
  ejercicio7: (a, b) => {
    let pares = [];
  
    let inicio = Math.min(a, b);
    let fin = Math.max(a, b);
    
    for (let i = inicio; i <= fin; i++) {
      if (i % 2 === 0) pares.push(i);
    }
    return pares;
  },

  ejercicio8: (a, b) => {
    let impares = [];
    let limite = parseInt(b);
    if (!isNaN(limite) && limite >= 1) {
      let i = 1;
      do {
        if (i % 2 !== 0) impares.push(i);
        i++;
      } while (i <= limite);
    }
    return impares;
  },

  ejercicio9: (a, b) => {
    let resultado = 1;
    for (let i = 1; i <= b; i++) {
      resultado *= a;
    }
    return resultado;
  },

  
  ejercicio10: (a, b) => {
    let secuencia = [a, b];
    let n = 10; 
    
    for (let i = 2; i < n; i++) {
      secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
    }
    return secuencia;
  }
};