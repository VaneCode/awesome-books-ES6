// Import modules
import DataClass from './classData.js';
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
    const books = DataClass.getBooks();
    books.forEach((book) => {
      domElements.booksUl.appendChild(BooksUlClass.generateBooksLi(book));
    });
  }

  // Method to remove a book from the array books
  static removeBookUI = (i) => {
    // Delete the book in the storage
    DataClass.removeBookData(i);
    // Refresh the bookUl in the UI
    BooksUlClass.createBooksUl();
  }

  // Method to add a new book to the array books
  static addNewBook = (title, author) => {
    // Add the book in the storage
    DataClass.addBookData(title, author);
    // Refresh the bookUl in the UI
    BooksUlClass.createBooksUl();
  }
}