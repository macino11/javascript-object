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

const myLibrary = [];

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
  console.log(myLibrary);
  displayEachBook(myLibrary);
});

const booksBody = document.getElementById("books-body");

function displayEachBook(myLibrary) {
  for (let i = 0; i < myLibrary.length; i++) {
    const row = document.createElement("tr");
    const titleCell = document.createElement("td");
    const authorCell = document.createElement("td");
    const pagesCell = document.createElement("td");
    const readCell = document.createElement("td");


    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;
    readCell.textContent = myLibrary[i].read;

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);

    booksBody.appendChild(row);

  }
}


