let input;

const getLargestWord = (string) => {
  return string.split(" ").sort((a, b) => b.length - a.length)[0];
};

const showMessage = () => {
  document.getElementById("resultado").innerText = getLargestWord(input.value);
};

const init = () => {
  input = document.getElementById("input");
  input.addEventListener("keyup", showMessage);
};

window.onload = init;
