export function saludar(nombre) {
  return `Hola ${nombre}`;
}

export function despedir(nombre) {
  return `Adiós ${nombre}`;
}

export function estadoSistema() {
  return { estado: "activo" };
}

export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function factorial(n) {
  if (n === 0) return 1;

  let r = 1;
  for (let i = 1; i <= n; i++) r *= i;
  return r;
}

export function ejercicio1() {
  return Array.from({ length: 10 }, (_, i) => i + 1);
}

export function ejercicio2() {
  let s = 0;
  for (let i = 1; i <= 100; i++) s += i;
  return s;
}

export function ejercicio3(a, b) {
  let r = [];
  for (let i = a; i <= b; i++) r.push(i);
  return r;
}

export function ejercicio4() {
  return Array.from({ length: 10 }, (_, i) => (i + 1) * 2);
}

export function ejercicio5(n) {
  return factorial(n);
}