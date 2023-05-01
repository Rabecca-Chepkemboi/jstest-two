// Create a function called getAvailableBooks that returns an array of all available
// books.

function getAvailableBooks() {
    const books = [
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
        isAvailable: true },
        { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
        isAvailable: false },
        { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
        1866, isAvailable: true },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
        isAvailable: false },
        { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
        ];
  return myLibrary.filter(book => book.available);
}
const availableBooks = getAvailableBooks();
console.log(availableBooks);


// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.

function getBooksByAuthor(authorName) {
    const books = [
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
        isAvailable: true },
        { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
        isAvailable: false },
        { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
        1866, isAvailable: true },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
        isAvailable: false },
        { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
        ];
  
    const authorsBook = books.filter(book => book.author === authorName);
    return authorsBook;
  }
  const authorsBook = getBooksByAuthor();
  console.log(authorsBook);



// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).

function addNewBook(book) {
    const required = ['title', 'author', 'publicationYear', 'isAvailable'];
    if (required.every(myBook => book.hasOwnProperty(myBook))) {
      library.push(book);
    }
  }
  

  
  
  