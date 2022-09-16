import React from 'react';
import '../css/card.css';
import Book from './Book';

const BookCard = () => {
  const books = [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      id: 1,
    },
    {
      title: 'Years End',
      author: 'Friend Amana',
      id: 2,
    },
    {
      title: 'Auspice,',
      author: 'Ryan Musa',
      id: 3,
    },
    {
      title: 'Broad Shoulders',
      author: 'Ben Sharp',
      id: 4,
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
    </div>
  );
};

export default BookCard;
