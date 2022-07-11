/* eslint-disable max-classes-per-file */

// ---------------------VARIABLES DECLARATION-----------------//
const booksUl = document.querySelector('#booksUl');
const addBtn = document.querySelector('#addBtn');

const sections = document.querySelectorAll('section');
const arrSections = Array.from(sections);

const links = document.querySelectorAll('.nav-a');
const arrLinks = Array.from(links);

// --------------------CLASSES--------------------------------//
class BookClass {
  // Method to create a new book
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

class BooksDataClass {
  // Method to create an array that will contains the books
  constructor() {
    return [];
  }
}

let books = new BooksDataClass();
const book1 = new BookClass(1, 'Lorem ipsum', 'Testeroo Testyy');
books.push(book1);
const book2 = new BookClass(2, 'Second book', 'Testeroo Testyy');
books.push(book2);

class InterfaceClass {
  // Method to generate an li element for book ul list
  static generateBooksLi = (book) => {
    // Create elements
    const bookLi = document.createElement('li');
    const pTitleAuthor = document.createElement('p');
    const btnRemove = document.createElement('button');

    // Add text to elements
    pTitleAuthor.textContent = `"${book.title}" by ${book.author}`;

    btnRemove.textContent = 'Remove';
    // Add atributes
    btnRemove.setAttribute('id', `${book.id}`);

    // Build li
    bookLi.appendChild(pTitleAuthor);
    bookLi.appendChild(btnRemove);

    return bookLi;
  }

  // Method to create booksUl
  static createBooksUl = () => {
    // Clean bookUl
    booksUl.textContent = ' ';
    // Generate ul
    books.forEach((book) => {
      booksUl.appendChild(InterfaceClass.generateBooksLi(book));
    });
  }

  // Method to remove a book from the array books
  static removeBook = (i) => {
    books = books.filter((book) => Number(book.id) !== Number(i));
    // Local storage
    localStorage.setItem('books', JSON.stringify(books));
    InterfaceClass.createBooksUl();
  }

  // Method to add a new book to the array books
  static addNewBook = () => {
    // Calculate book id
    let id = 0;
    if (books.length > 1) {
      const lastBook = books[books.length - 1];
      id = lastBook.id + 1;
    } else {
      id = 1;
    }

    // Get book's information from the add-book-frm form
    const title = document.querySelector('#bookTitle').value;
    const author = document.querySelector('#bookAuthor').value;
    // Create new book object
    const newBook = new BookClass(id, title, author);
    // Add the new book object to the books array
    books.push(newBook);
    // Local storage
    localStorage.setItem('books', JSON.stringify(books));
    InterfaceClass.createBooksUl();
  }

  // Method to show content dynamically
  static changeContent = (index) => {
    for (let i = 0; i < arrSections.length; i += 1) {
      if (index === i) {
        sections[i].classList.remove('hide');
        links[i].style.color = '#8ecae6';
      } else if (index !== i) {
        sections[i].classList.add('hide');
        links[i].style.color = '#fff';
      }
    }
  }
}

// -------------------EVENTS-----------------------------------//
addBtn.addEventListener('click', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Call method to add a book
  InterfaceClass.addNewBook();
  InterfaceClass.changeContent(0);
});

// Add eventListener to btnRemove
booksUl.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const { id } = e.target;
    InterfaceClass.removeBook(id);
  }
});

// Add an event listener to each tag a in nav-ul
arrLinks.forEach((link, i) => {
  link.addEventListener('click', () => {
    InterfaceClass.changeContent(i);
  });
});

window.addEventListener('load', () => {
  // Local storage
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  } else {
    localStorage.setItem('books', JSON.stringify(books));
  }

  // Create booksUl
  InterfaceClass.createBooksUl();
});

// date format
// date format
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const date = new Date();
document.querySelector('.date').innerHTML = `${months[date.getMonth()]} ${date.getDate()}  ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
