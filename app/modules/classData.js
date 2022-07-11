// Import modules
import BookClass from './classBook.js';

export default class DataClass {
  static getBooks() {
    let books = [];
    // Local storage
    if (localStorage.getItem('books')) {
      books = JSON.parse(localStorage.getItem('books'));
    } else {
      localStorage.setItem('books', JSON.stringify(books));
    }

    return books;
  }

  static addBookData(title, author) {
    const books = DataClass.getBooks();

    // Calculate book id
    let id = 0;
    if (books.length > 1) {
      id = books[books.length - 1] + 1;
    } else {
      id = 1;
    }

    // Create new book object
    const newBook = new BookClass(id, title, author);
    // Add the new book object to the books array
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBookData(i) {
    let books = DataClass.getBooks();
    books = books.filter((book) => Number(book.id) !== Number(i));
    // Local storage
    localStorage.setItem('books', JSON.stringify(books));
  }
}