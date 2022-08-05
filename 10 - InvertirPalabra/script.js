let msg;
let input;

const init = () => {
  msg = document.getElementById("resultado");
  input = document.getElementById("input");
  input.addEventListener("keyup", showMessage);
};

const showMessage = () => {
  msg.innerText = reverseString(input.value);
};

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

window.onload = init;
