import {saludar, estadoSistema, sumar, healtCheack} from "../src/app.js"

function ejecutarPruebas(){
    let pasadas = 0;
    let fallidas = 0;

    const r1 = saludar("Martinez")
    if (r1.includes("Martinez")){
        console.log ("Test 1 pasado: funcion saludar en Martinez es correcta")
        pasadas++;
    } else {
        console.log("Test 1 fallido: ", r1);
        fallidas++;
    }

    const actualEstado = estadoSistema();
    import {
  saludar,
  despedir,
  estadoSistema,
  sumar,
  restar,
  factorial,
  ejercicio1,
  ejercicio2,
  ejercicio3,
  ejercicio4,
  ejercicio5
} from "../src/ejercicio.js";

import assert from "assert";

function ejecutarPruebas() {
  let pasadas = 0;
  let fallidas = 0;

  // =====================
  // BASE (PROFESOR)
  // =====================

  // SALUDAR
  try {
    assert.strictEqual(saludar("angela").includes("angela"), true);
    console.log("✔ saludar OK");
    pasadas++;
  } catch (e) {
    console.log("❌ saludar FAIL");
    fallidas++;
  }

  // DESPEDIR
  try {
    assert.strictEqual(despedir("angela").includes("angela"), true);
    console.log("✔ despedir OK");
    pasadas++;
  } catch (e) {
    console.log("❌ despedir FAIL");
    fallidas++;
  }

  // ESTADO SISTEMA
  try {
    assert.strictEqual(estadoSistema().estado, "activo");
    console.log("✔ estadoSistema OK");
    pasadas++;
  } catch (e) {
    console.log("❌ estadoSistema FAIL");
    fallidas++;
  }

  // SUMAR
  try {
    assert.strictEqual(sumar(5, 3), 8);
    console.log("✔ sumar OK");
    pasadas++;
  } catch (e) {
    console.log("❌ sumar FAIL");
    fallidas++;
  }

  // RESTAR
  try {
    assert.strictEqual(restar(5, 3), 2);
    console.log("✔ restar OK");
    pasadas++;
  } catch (e) {
    console.log("❌ restar FAIL");
    fallidas++;
  }

  // FACTORIAL
  try {
    assert.strictEqual(factorial(5), 120);
    assert.strictEqual(factorial(0), 1);
    console.log("✔ factorial OK");
    pasadas++;
  } catch (e) {
    console.log("❌ factorial FAIL");
    fallidas++;
  }

  // =====================
  // EJERCICIOS (1–5)
  // =====================

  // EJERCICIO 1
  try {
    assert.strictEqual(ejercicio1().length, 10);
    console.log("✔ ejercicio1 OK");
    pasadas++;
  } catch {
    console.log("❌ ejercicio1 FAIL");
    fallidas++;
  }

  // EJERCICIO 2
  try {
    assert.strictEqual(ejercicio2(), 5050);
    console.log("✔ ejercicio2 OK");
    pasadas++;
  } catch {
    console.log("❌ ejercicio2 FAIL");
    fallidas++;
  }

  // EJERCICIO 3
  try {
    const r = ejercicio3(1, 10);
    assert.ok(Array.isArray(r));
    console.log("✔ ejercicio3 OK");
    pasadas++;
  } catch {
    console.log("❌ ejercicio3 FAIL");
    fallidas++;
  }

  // EJERCICIO 4
  try {
    assert.strictEqual(ejercicio4().length, 10);
    console.log("✔ ejercicio4 OK");
    pasadas++;
  } catch {
    console.log("❌ ejercicio4 FAIL");
    fallidas++;
  }

  // EJERCICIO 5
  try {
    assert.strictEqual(ejercicio5(5), 120);
    console.log("✔ ejercicio5 OK");
    pasadas++;
  } catch {
    console.log("❌ ejercicio5 FAIL");
    fallidas++;
  }

  // =====================
  // RESULTADO FINAL
  // =====================
  console.log(`\n📊 RESULTADOS: ${pasadas} pasadas, ${fallidas} fallidas`);

  if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();
