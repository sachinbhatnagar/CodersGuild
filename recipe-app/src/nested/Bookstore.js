import React from "react";
import Card from "./Card";

function Bookstore({ myBeautifulBooks }) {
  return (
    <>
      {myBeautifulBooks.books.map((book) => {
        return <Card key={book.isbn} book={book} />;
      })}
    </>
  );
}

export default Bookstore;
