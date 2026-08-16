function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

let myLibrary = [];
const booksBody = document.getElementById("books-body");
const submitBtn = document.getElementById("submit-btn");

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

function displayOneBook(book) {
  const row = document.createElement("tr");
  const titleCell = document.createElement("td");
  const authorCell = document.createElement("td");
  const pagesCell = document.createElement("td");
  const readCell = document.createElement("td");
  const removeCell = document.createElement("td");
  const removeButton = document.createElement("button");
  const statusCell = document.createElement("td");
  const statusButton = document.createElement("button");

  titleCell.textContent = book.title;
  authorCell.textContent = book.author;
  pagesCell.textContent = book.pages;
  readCell.textContent = book.read;
  removeButton.dataset.id = book.id;
  removeButton.textContent = "Remove";
  statusButton.textContent = "Status";

  row.appendChild(titleCell);
  row.appendChild(authorCell);
  row.appendChild(pagesCell);
  row.appendChild(readCell);

  removeCell.appendChild(removeButton);
  statusCell.appendChild(statusButton);

  row.appendChild(removeCell);
  row.appendChild(statusCell);

  booksBody.appendChild(row);
}

function displayAllBooks() {
  myLibrary.forEach((book) => {
    displayOneBook(book);
  });
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary(title.value, author.value, pages.value, read.value);
  let oneBook = new Book(title.value, author.value, pages.value, read.value);
  displayOneBook(oneBook);
  title.value = "";
  author.value = "";
  pages.value = "";
  read.value = "";
});

addBookToLibrary("hello", "me", 453, "read");
addBookToLibrary("2", "hey", 453, "read");
addBookToLibrary("3", "book 3", 3333, "read");
addBookToLibrary("4", "me", 444, "read");

displayAllBooks();
