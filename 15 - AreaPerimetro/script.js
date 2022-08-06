let input;
let result;
let form;
let areaBtn, perimeterBtn;

const showPerimeter = () => {
  result.innerText = form.checkValidity()
    ? `The perimeter of the circle is ${2 * Math.PI * input.value}`
    : "";
};

const showArea = () => {
  result.innerText = form.checkValidity()
    ? `The area of the circle is ${Math.PI * input.value * input.value}`
    : "";
};

const addValidation = (form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      event.stopPropagation();
    }

    form.classList.add("was-validated");
  });
};

const init = () => {
  input = document.getElementById("radio");
  result = document.getElementById("result");

  form = document.querySelector(".needs-validation");
  addValidation(form);
};

window.onload = init;
