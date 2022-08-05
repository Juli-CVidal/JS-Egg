class Person {
  constructor(name, gender, weight, height) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.height = height;
  }
}

const showMessage = (person) => {
  let h3 = document.getElementById("resultado");
  h3.innerText = `${person.name}, ${person.gender}, ${person.weight}kgs., ${person.height}mts.`;
};

const generatePerson = () => {
  const form = document.getElementById("registro");
  return new Person(
    form.name.value,
    form.gender.value,
    form.weight.value,
    form.height.value
  );
};

const addValidation = (form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.checkValidity()
      ? showMessage(generatePerson())
      : event.stopPropagation();
    form.classList.add("was-validated");
  });
};

const init = () => {
  const form = document.querySelector(".needs-validation");
  addValidation(form);
};

window.onload = init;
