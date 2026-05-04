import {
  saludar,
  sumar,
  restar,
  factorial,
  ejercicio1,
  ejercicio2,
  ejercicio3,
  ejercicio4,
  ejercicio5
} from "./ejercicio.js";

export function ejecutarTest() {
  const res = [];

  res.push(saludar("Angela").includes("Angela") ? "✔ saludar" : "❌ saludar");
  res.push(sumar(2,2) === 4 ? "✔ sumar" : "❌ sumar");
  res.push(restar(5,3) === 2 ? "✔ restar" : "❌ restar");
  res.push(factorial(5) === 120 ? "✔ factorial" : "❌ factorial");
  res.push(ejercicio1().length === 10 ? "✔ ejercicio1" : "❌ ejercicio1");
  res.push(ejercicio2() === 5050 ? "✔ ejercicio2" : "❌ ejercicio2");
  res.push(Array.isArray(ejercicio3(1,10)) ? "✔ ejercicio3" : "❌ ejercicio3");
  res.push(ejercicio4().length === 10 ? "✔ ejercicio4" : "❌ ejercicio4");
  res.push(ejercicio5(5) === 120 ? "✔ ejercicio5" : "❌ ejercicio5");

  return res;
}