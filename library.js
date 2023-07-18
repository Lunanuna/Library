let myLibrary = [];

function Book(title, author, pages, read){
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
}

function render(){
 let libraryEl = document.querySelector("#library");
libraryEl.innerHTML = ""; //not to make it duplicated
 for (let i = 0; i < myLibrary.length; i++){
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `
    <p>Title: <span class="type-color">${book.title}</span></p>
    <p>Author: <span class="type-color">${book.author}</span></p>
    <p>Pages: <span class="type-color">${book.pages}</span></p>
    <p>Status: <span class="type-color">${book.read ? "Read" : "Not Read Yet"}</span></p>
    <button onclick="removeBook(${i})">Remove</button>
    <button onclick="toggleRead(${i})">Toggle Read</button>
    `;
    bookEl.classList.toggle('added-book');
    libraryEl.appendChild(bookEl);
 }
 
};

Book.prototype.toggleRead = function(){
    this.read = !this.read;
};

function toggleRead(index){
    myLibrary[index].toggleRead();
    render();
}

function removeBook(index){
    myLibrary.splice(index,1);
    render();
}

function addBookToLibrary(){
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
  
}



let newBookBtn = document.querySelector("#newBookBtn");
newBookBtn.addEventListener("click", function(){
  let newBookBtn = document.querySelector("#newBookForm");
  
   let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let read = document.getElementById("read");

  title.value = "";
  author.value="";
  pages.value="";
  read.checked="";

  newBookForm.style.display="block";
});

let submitBtn = document.querySelector("#subBtn");
submitBtn.addEventListener("click", function(e){
  
  e.preventDefault();
  addBookToLibrary();
  
  let submitBtn = document.querySelector("#newBookForm");
  newBookForm.style.display="none";
  
  
});

document.querySelector("#newBookForm").addEventListener("submit", function(event){
  event.preventDefault();
  addBookToLibrary();
});
