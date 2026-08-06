function Book(title, author, pages, read) {
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

addBookToLibrary("The Hobbit", "j.j.Tolkin", 295, "not read yet");
addBookToLibrary("Best Book", "James Donald", 129, "read");
addBookToLibrary("Unknown soldier", "Thomas", 854, "not read yet");

const booksDiv = document.getElementById("books-div");

function displayEachBook(myLibrary) {
  for (let i = 0; i < myLibrary.length; i++) {
    const bookCard = document.createElement("div");
    bookCard.textContent = myLibrary[i].info();
    booksDiv.appendChild(bookCard);
  }
  return booksDiv.textContent;
}

displayEachBook(myLibrary);
