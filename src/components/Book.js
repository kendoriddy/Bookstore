import React from 'react';
import '../css/card.css';
import { PropTypes } from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div>
      <div className="card-container">
        <div className="left-side">
          <span className="class-of">Action</span>
          <h2 className="title">{title}</h2>
          <span className="author">{author}</span>
        </div>
        <div>
          <button type="button">Remove</button>
        </div>
      </div>
    </div>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
