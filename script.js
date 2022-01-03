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
  
