let enteredNumbers = [];
let input;
let addBtn;
let min = 0;
let max = 0;
let avg = 0;
let results;

function init() {
  input = document.getElementById("number");
  addBtn = document.getElementById("addBtn");
  addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addNumber();
  });
  
  results = document.getElementById("results");
  results.style.display = "none";
}

function addNumber() {
  let enteredNumber = parseInt(input.value);
  if (enteredNumber == 0) {
    disableInputs();
    showResults();
    return;
  }
  enteredNumbers = [...enteredNumbers, enteredNumber];
  let length = enteredNumbers.length;

  min =
    length === 1 ? enteredNumber : min < enteredNumber ? min : enteredNumber;

  max =
    length === 1 ? enteredNumber : max > enteredNumber ? max : enteredNumber;

  avg = enteredNumbers.reduce((a, b) => a + b, 0) / length;

  input.value = "";
}

function disableInputs() {
  input.disabled = true;
  addBtn.disabled = true;
}

function showResults() {
  let minNumber = document.getElementById("minNumber");
  minNumber.innerText = `El menor número ingresado es: ${min}`;

  let maxNumber = document.getElementById("maxNumber");
  maxNumber.innerText = `El mayor número ingresado es: ${max}`;

  let avgNumber = document.getElementById("avgNumber");
  avgNumber.innerText = `Y el promedio de los números ingresados es: ${avg}`;
  results.style.display = "block";
}

window.onload = init;
