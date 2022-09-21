import React from 'react';
import { useSelector } from 'react-redux';
import '../css/card.css';
import Book from './Book';

const BookCard = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      {books.map((book) => (
        <Book key={book[0]} id={book[0]} title={book[1][0].title} author={book[1][0].author} />
      ))}
    </div>
  );
};

export default BookCard;
