var input;
window.onload = init;

function init() {
  input = document.getElementById("num");
  console.log("hola");
  input.addEventListener("keyup", showMessage);
  input.addEventListener("click", showMessage);
}

function showMessage() {
  let p = document.getElementById("mensaje");
  let msg = getMessage();
  console.log(msg);
  p.innerText = msg;
}

function getMessage() {
  let inp = input.value;
  return "" == inp
    ? ""
    : `El número ingresado ${
        0 == inp
          ? "no es ni par ni impar"
          : 0 == inp % 2
          ? "es par"
          : "es impar"
      }`;
}
