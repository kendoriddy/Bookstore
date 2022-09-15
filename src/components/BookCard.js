import React from 'react';
import '../css/card.css';

const BookCard = () => (
  <div className="card-container">
    <div className="left-side">
      <span className="class-of">Action</span>
      <h2 className="title">The Hunger Games</h2>
      <span className="author">Suzanne Collins</span>
    </div>
    <div>
      <button type="button">Comments</button>
      {' '}
      |
      {' '}
      <button type="button">Remove</button>
      {' '}
      |
      {' '}
      <button type="button">Edit</button>
      {' '}
    </div>
  </div>
);

export default BookCard;
