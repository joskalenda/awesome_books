const Container = document.querySelector('.container');
const inputTitle = document.querySelector('#title-id');
const inputAuthor = document.querySelector('#author-id');
const addBtn = document.querySelector('#btn');

class ObjectBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.removeButton = [];
    this.booksList = [];
    
  }
  createElement(list) {
    let books = '';
    list.forEach((div) => {
      books += `<article class="author-title-div">
      <h3>${div.authorBook}</h3>
      <h3>${div.titleBook}</h3>
      <button class="rmBtn">Remove</button>
      </article>`;
    });

    Container.innerHTML = books;
    this.removeButton = document.querySelectorAll('button.rmBtn');
    this.removeButton.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
    e.preventDefault();
    this.removeBook(index);
    });
    });
  }
  
  removeBook(id) {
    this.booksList = JSON.parse(localStorage.getItem('storageFormData'));
    const filteredArray = this.booksList.filter((book) => this.booksList.indexOf(book) !== id);
    localStorage.setItem('storageFormData', JSON.stringify(filteredArray));
    this.createElement(filteredArray);
  }
  
