const books = [
  { title: "Harry Potter", author: "JK Rowling", read: false },
  { title: "The Lord of the Rings.", author: "J. R. R. Tolkien", read: false },
  {
    title: "Beyond good and evil.",
    author: "Friedrich Nietzsche",
    read: false,
  },
];

books.forEach((book) => {
  if (book.read !== true) {
    console.log("Go read it");
  }
});
