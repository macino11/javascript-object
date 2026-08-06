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

addBookToLibrary("The Hobbit", "j.j.Tolkin", 295, "not read yet");
addBookToLibrary("Best Book", "James Donald", 129, "read");
addBookToLibrary("Unknown soldier", "Thomas", 854, "not read yet");


const booksBody = document.getElementById("books-body");

function displayEachBook(myLibrary) {
  for (let i = 0; i < myLibrary.length; i++) {
    const row = document.createElement("tr")
    const titleCell = document.createElement("td")
    const authorCell = document.createElement("td")
    const pagesCell = document.createElement("td")
    const readCell = document.createElement("td")

    titleCell.textContent = myLibrary[i].title
    authorCell.textContent = myLibrary[i].author
    pagesCell.textContent = myLibrary[i].pages
    readCell.textContent = myLibrary[i].read
    
    
    booksBody.appendChild(row) 
    row.appendChild(titleCell) 
    row.appendChild(authorCell) 
    row.appendChild(pagesCell) 
    row.appendChild(readCell) 
  }
}

displayEachBook(myLibrary)