class Book{
  constructor(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
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
  statusButton.dataset.id = book.id;

  removeButton.addEventListener("click", (event) => {
    let newLibrary = myLibrary.filter(
      (item) => item.id !== event.target.dataset.id,
    );
    myLibrary = newLibrary;
    displayAllBooks();
  });

  //This changes the status
  Book.prototype.toggleRead = function () {
    if (this.read === "read") {
      this.read = "not read yet";
    } else if (this.read === "not read yet") {
      this.read = "read";
    }
  };

  //Get the book's id and if it is same with the button's id then change the status
  statusButton.addEventListener("click", (event) => {
    if (book.id === event.target.dataset.id) {
      book.toggleRead();
      readCell.textContent = book.read;
    }
  });

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
  booksBody.innerHTML = "";
  myLibrary.forEach((book) => {
    displayOneBook(book);
  });
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary(title.value, author.value, pages.value, read.value);
  displayAllBooks();
  title.value = "";
  author.value = "";
  pages.value = "";
  read.value = "";
});
