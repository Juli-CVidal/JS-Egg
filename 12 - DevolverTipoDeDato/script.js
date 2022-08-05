let input;

const getType = (value) => {
  return typeof value;
};

const showMessage = () => {
  document.getElementById(
    "resultado"
  ).innerText = `El valor ingresado es un:${getType(input.value)}`;
};

const init = () => {
  input = document.getElementById("input");
  input.addEventListener("keyup", showMessage);
};

window.onload = init;
