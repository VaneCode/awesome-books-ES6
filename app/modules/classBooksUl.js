// Import modules
import BookClass from './classBook.js';
import books from './classData.js';
import * as domElements from './domElements.js';

// Class to manage books Ul
export default class BooksUlClass {
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
    domElements.booksUl.textContent = ' ';
    // Generate ul
    books.forEach((book) => {
      domElements.booksUl.appendChild(BooksUlClass.generateBooksLi(book));
    });
  }

  // Method to remove a book from the array books
  static removeBook = (i) => {
    books = books.filter((book) => Number(book.id) !== Number(i));
    // Local storage
    localStorage.setItem('books', JSON.stringify(books));
    BooksUlClass.createBooksUl();
  }

  // Method to add a new book to the array books
  static addNewBook = (title, author) => {
    // Calculate book id
    let id = 0;
    if (books.length > 1) {
      id = books[books.length - 1] + 1;
    } else {
      id = 1;
    }

    // Get book's information from the add-book-frm form
    // const title = document.querySelector('#bookTitle').value;
    // const author = document.querySelector('#bookAuthor').value;
    // Create new book object
    const newBook = new BookClass(id, title, author);
    // Add the new book object to the books array
    books.push(newBook);
    // Local storage
    localStorage.setItem('books', JSON.stringify(books));
    BooksUlClass.createBooksUl();
  }
}