var inp1;
var inp2;
var opc;

function getMessage() {
  const num1 = inp1.value;
  const num2 = inp2.value;
  const operation = opc.value.toUpperCase();
  let res = 0;

  if ("" == num1 || "" == num2) {
    return "No se ha ingresado uno de los números";
  }

  if ("" == operation) {
    return "No se ha especificado la operación";
  }

  switch (operation) {
    case "S":
      return `El resultado de la suma es ${num1 + num2}`;
    case "R":
      return `El resultado de la resta es ${num1 - num2}`;
    case "M":
      return `El resultado de la multiplicación es ${num1 * num2}`;
    case "D":
      return num2 != 0
        ? `El resultado de la suma es ${num1 + num2}`
        : "No se puede dividir por 0";
  }

  return "No se ha ingresado una opción válida";
}

function showResult() {
  const msg = getMessage();
  const p = document.getElementById("mensaje");
  p.innerText = msg;
}

function init() {
  inp1 = document.getElementById("num1");
  inp2 = document.getElementById("num2");
  opc = document.getElementById("opc");
}

window.onload = init;
