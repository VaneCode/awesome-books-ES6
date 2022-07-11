// Import modules
import BookClass from './classBook.js';

export default class BooksDataClass {
  // Method to create an array that will contains the books
  constructor() {
    return [];
  }
}

// Inicialate array of objects books
const books = new BooksDataClass();
// Add basic information to array objects books
const book1 = new BookClass(1, 'Lorem ipsum', 'Testeroo Testyy');
books.push(book1);
const book2 = new BookClass(2, 'Second book', 'Testeroo Testyy');
books.push(book2);