let msg;
let input;

const putSpaces = (string) => {
  return string.split("").join(" ");
};

const showMessage = () => {
  msg.innerText = putSpaces(input.value);
};

const init = () => {
  msg = document.getElementById("resultado");
  input = document.getElementById("input");
  input.addEventListener("keyup", showMessage);
};

window.onload = init;
