class Book {
  constructor(isbn, title, author, numOfPages) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
  }
}

const showMessage = (book) => {
  let msg = document.getElementById("result");
  msg.innerText = `${book.isbn}: ${book.title} \nAuthor:${book.author}, ${book.numOfPages} pages`;
};

const generateBook = () => {
  const form = document.getElementById("bookForm");
  return new Book(
    form.isbn.value,
    form.title.value,
    form.author.value,
    form.numOfPages.value
  );
};

const addValidation = (form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.checkValidity()
      ? showMessage(generateBook())
      : event.stopPropagation();
    form.classList.add("was-validated");
  });
};

const init = () => {
  const form = document.querySelector(".needs-validation");
  addValidation(form);
};

window.onload = init;
