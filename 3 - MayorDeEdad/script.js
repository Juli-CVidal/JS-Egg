var input;
window.onload = init;

function init() {
  input = document.getElementById("ageInput");
  input.addEventListener("keyup", showMessage);
  input.addEventListener("click", showMessage);
}

function showMessage() {
  let p = document.getElementById("mensaje");
  let msg = getMessage(input.value);
  p.innerText = msg;
}

function getMessage(age) {
  return "" == age ? "" : `Usted es ${18 > age ? "menor" : "mayor"} de edad`;
}
