const books = document.querySelector('.obect-class');
const inputTitle = document.querySelector('#title-id');
const inputAuthor = document.querySelector('#author-id');
const addBtn = document.querySelector('#add--btn');
const  Val_title = inputTitle.value;
const Val_author =  inputAuthor.value;

class Obectstore {
  constructor(title, author) {
    this.BookTitle = title;
    this.BookAuthor = author;
  }
}
const BOOK = new Obectstore($(Val_title), $(Val_author));


