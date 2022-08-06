let input;
let array;

const showOriginal = () => {
  document.getElementById(
    "original"
  ).innerText = `The original array is: ${array}`;
};

const showCropped = () => {
  document.getElementById(
    "modified"
  ).innerText = `The cropped array is ${array.slice(0, -2)}`;
};

const loadArray = () => {
  array = input.value.split(",");
};

const addValidation = (form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    loadArray();
    input.setCustomValidity(array.length < 3 ? "array too short" : "");
    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      showOriginal();
      showCropped();
    }
    form.classList.add("was-validated");
  });
};

const init = () => {
  input = document.getElementById("array");
  form = document.querySelector(".needs-validation");
  addValidation(form);
};

window.onload = init;
