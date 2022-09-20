import React from 'react';
import { useSelector } from 'react-redux';
import '../css/card.css';
import Book from './Book';

const BookCard = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} id={book.id} title={book.title} author={book.author} />
      ))}
    </div>
  );
};

export default BookCard;
