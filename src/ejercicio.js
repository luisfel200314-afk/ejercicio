const VERSION = '1.2.0';
export function saludar(nombre) {
  return `Hola ${nombre}, bienvenido a Felipe`;
}

 export function despedir(nombre) {
  return `Adiós ${nombre}`;
}
export function estadoSistema() {
  return "Sistema activo";
}
export function sumar(a, b) {
  return a + b;
}
export function restar(a, b) {
  return a - b;
}
export function healthcheck() {
  return {
    status: 'ok',
    version: VERSION,
    timestamp: new Date().toISOString(),
    message: 'Sistemas Felipe funcionando correctamente'
  };
}

export function ejercicio5(numero) {
  let factorial = 1;

  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }

  return factorial;
}

export function ejercicio6(n) {
  let texto = [];

  while (n >= 0) {
    texto.push(n);
    n--;
  }

  return texto;
}

export function ejercicio7(a, b) {
  let pares = [];

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    if (i % 2 === 0) pares.push(i);
  }

  return pares;
}

export function ejercicio8(n) {
  let impares = [];

  let i = 1;
  while (i <= n) {
    if (i % 2 !== 0) impares.push(i);
    i++;
  }

  return impares;
}

export function ejercicio9(a, b) {
  let resultado = 1;

  for (let i = 1; i <= b; i++) {
    resultado *= a;
  }

  return resultado;
}

export function ejercicio10(n) {
  let a = 0, b = 1;
  let serie = [];

  for (let i = 0; i < n; i++) {
    serie.push(a);
    let temp = a + b;
    a = b;
    b = temp;
  }

  return serie;
}

export function ejercicio11(a, b) {
  let resultado = [];

  for (let i = 0; i < a.length; i++) {
    resultado.push(a[i] + b[i]);
  }

  return resultado;
}