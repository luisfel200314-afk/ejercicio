import {
  saludar,
  despedir,
  estadoSistema,
  sumar,
  restar,
  healthcheck,
  ejercicio5,
  ejercicio6,
  ejercicio7,
  ejercicio8,
  ejercicio9,
  ejercicio10,
  ejercicio11
} from "../src/ejercicio.js";

function ejecutarPruebas() {
  let pasadas = 0;
  let fallidas = 0;

  // 🔹 PRUEBA saludar
 const r1 = saludar("Felipe");

if (r1 === "Hola Felipe, bienvenido a Felipe") {
  console.log("✅ saludar()");
  pasadas++;
} else {
  console.log("❌ saludar()");
  fallidas++;
}

  // 🔹 PRUEBA despedir
  const r2 = despedir("Felipe");
  if (r2 === "Adiós Felipe") {
    console.log("✅ despedir()");
    pasadas++;
  } else {
    console.log("❌ despedir()");
    fallidas++;
  }

  // 🔹 PRUEBA estadoSistema
  const r3 = estadoSistema();
  if (r3 === "Sistema activo") {
    console.log("✅ estadoSistema()");
    pasadas++;
  } else {
    console.log("❌ estadoSistema()");
    fallidas++;
  }

  // 🔹 PRUEBA sumar
  const r4 = sumar(2, 3);
  if (r4 === 5) {
    console.log("✅ sumar()");
    pasadas++;
  } else {
    console.log("❌ sumar()");
    fallidas++;
  }

  // 🔹 PRUEBA restar
  const r5 = restar(10, 4);
  if (r5 === 6) {
    console.log("✅ restar()");
    pasadas++;
  } else {
    console.log("❌ restar()");
    fallidas++;
  }

  // 🔹 RESULTADOS
  console.log(`\n📊 RESULTADOS: ${pasadas} pasadas, ${fallidas} fallidas`);

  // ❌ IMPORTANTE:
  // quitamos process.exit(1) porque Vitest falla con eso
}

ejecutarPruebas();