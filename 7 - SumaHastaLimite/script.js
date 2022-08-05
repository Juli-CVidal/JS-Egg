var input;
var limit;
var addBtn;
var res = parseInt(0);
var p;
window.onload = init;

function init() {
  p = document.getElementById("mensaje");
  input = document.getElementById("input");
  addBtn = document.getElementById("addNumber");
  hideInput("input");
  hideInput("addNumber");
}

function showMessage() {
  p.innerText = `Suma actual: ${res}`;
  if (res >= limit) {
    disableInput();
  }
}

function keepAdding() {
  var value = input.value;
  res += parseInt(value);
  showMessage();
}

function disableInput() {
  p.innerText = `Se ha superado el límite de ${limit}!`;
  document.querySelector("#addNumber").disabled = true;
}

function setLimit() {
  limit = document.getElementById("limit").value;
  hideInput("limit");
  hideInput("setLimit");
  showInput("input");
  showInput("addNumber");
}

function hideInput(input1) {
  document.getElementById(input1).style.display = "none";
}

function showInput(input1) {
  document.getElementById(input1).style.display = "block";
}
