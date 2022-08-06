let val1, val2;

const getNumberFromInterval = (limits) => {
  return Math.floor(Math.random() * (limits[1] - limits[0])) + limits[0];
};

const getRandomArray = (limits, len) => {
  return Array(len)
    .fill()
    .map(() => getNumberFromInterval(limits));
};

const showArrays = () => {
  const limits = [Math.min(val1, val2), Math.max(val1, val2)];
  let arr1 = getRandomArray(limits, 5);
  let arr2 = getRandomArray(limits, 5);

  document.getElementById("msg").innerText = "The generated arrays are:";
  document.getElementById("array1").innerText = arr1;
  document.getElementById("array2").innerText = arr2;
};

const loadData = () => {
  val1 = document.getElementById("num1").value;
  val2 = document.getElementById("num2").value;
};

const addValidation = (form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      loadData();
      showArrays();
    }

    form.classList.add("was-validated");
  });
};

const init = () => {
  form = document.querySelector(".needs-validation");
  addValidation(form);
};

window.onload = init;
