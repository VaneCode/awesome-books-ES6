//Import js modules
import * as domElements from './modules/domElements.js';
import classDynamicContent from './modules/classDynamicContent';
import classBooksUl from './modules/dynamic.js';

// -------------------EVENTS-----------------------------------//
domElements.addBtn.addEventListener('click', (e) => {
    // Prevent actual submit
    e.preventDefault();

    // Get book's information from the add-book-frm form
    const title = domElements.titleInp.value;
    const author = domElements.authorInp.value;

    // Call method to add a book
    classBooksUl.addNewBook(title, author);

    //Clean the form
    domElements.titleInp.value = '';
    domElements.authorInp.value = '';

    classDynamicContent.changeContent(0);
});

// Add eventListener to btnRemove
domElements.booksUl.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const { id } = e.target;
        classBooksUl.removeBook(id);
    }
});

// Add an event listener to each tag a in nav-ul
domElements.arrLinks.forEach((link, i) => {
    link.addEventListener('click', () => {
        classDynamicContent.changeContent(i);
    });
});

//---------------------------------LOAD PAGE---------------------------//
window.addEventListener('load', () => {
    // Local storage
    if (localStorage.getItem('books')) {
        books = JSON.parse(localStorage.getItem('books'));
    } else {
        localStorage.setItem('books', JSON.stringify(books));
    }

    // Create booksUl
    classBooksUl.createBooksUl();
});

