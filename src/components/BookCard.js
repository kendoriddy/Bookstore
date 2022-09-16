import React from 'react';
import '../css/card.css';

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
        <div key={book.id} className="card-container">
          <div className="left-side">
            <span className="class-of">Action</span>
            <h2 className="title">{book.title}</h2>
            <span className="author">{book.author}</span>
          </div>
          <div>
            <button type="button">Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
