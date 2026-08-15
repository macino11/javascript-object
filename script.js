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

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

const submitBtn = document.getElementById("submit-btn");

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let bookTitle = title.value;
  let bookAuthor = author.value;
  let bookPages = pages.value;
  let bookRead = read.value;
  addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
  displayNewBook(myLibrary);

  title.value = "";
  author.value = "";
  pages.value = "";
  read.value = "";
});

const booksBody = document.getElementById("books-body");

function displayNewBook() {
  const row = document.createElement("tr");
  const titleCell = document.createElement("td");
  const authorCell = document.createElement("td");
  const pagesCell = document.createElement("td");
  const readCell = document.createElement("td");
  const removeCell = document.createElement("td");
  const removeButton = document.createElement("button");

  titleCell.textContent = myLibrary.at(-1).title;
  authorCell.textContent = myLibrary.at(-1).author;
  pagesCell.textContent = myLibrary.at(-1).pages;
  readCell.textContent = myLibrary.at(-1).read;
  removeButton.dataset.id = myLibrary.at(-1).id;
  removeButton.textContent = "Remove";

  removeButton.addEventListener("click", (event) => {
    myLibrary = myLibrary.filter(item => item.id !== event.target.dataset.id)
    row.remove()
    console.log(myLibrary)
  })

  row.appendChild(titleCell);
  row.appendChild(authorCell);
  row.appendChild(pagesCell);
  row.appendChild(readCell);
  removeCell.appendChild(removeButton);
  row.appendChild(removeCell);

  booksBody.appendChild(row);
  console.log(myLibrary)
}


