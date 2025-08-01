let library = [
  { title: "Book A", author: "Author A", year: 2010, available: true },
  { title: "Book B", author: "Author B", year: 2015, available: true },
  { title: "Book C", author: "Author C", year: 2020, available: false },
];

function displayAvailableBooks() {
  console.log("Available Books:");
  library.forEach(book => {
    if (book.available) {
      console.log(`${book.title} by ${book.author} (${book.year})`);
    }
  });
}

function borrowBook(title) {
  for (let book of library) {
    if (book.title === title && book.available) {
      book.available = false;
      console.log(`${title} has been borrowed.`);
      return;
    }
  }
  console.log(`${title} is not available.`);
}

function addBook(newBook) {
  library.push(newBook);
  console.log(`Added book: ${newBook.title}`);
}

displayAvailableBooks();
borrowBook("Book A");
addBook({ title: "Book D", author: "Author D", year: 2022, available: true });
displayAvailableBooks();