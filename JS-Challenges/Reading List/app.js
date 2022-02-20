const books = [
  { title: "Harry Potter", author: "JK Rowling", read: false, date: "1997" },
  {
    title: "The Lord of the Rings.",
    author: "J. R. R. Tolkien",
    read: false,
    date: "1948",
  },
  {
    title: "Beyond good and evil.",
    author: "Friedrich Nietzsche",
    read: false,
    date: "1886",
  },
];

books.map((book) => {
  const para = document.createElement("p");
  return `
  ${para.append(`${book.title} was written by ${book.author} in ${book.date} `)}
  ${document.body.append(para)}
  `;
});

const tagCounter = document.getElementById("tagCounter");
const length = document.querySelectorAll("p");

tagCounter.innerText = `There are ${length.length} paragraphs on this page `;
