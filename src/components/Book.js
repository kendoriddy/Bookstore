import React from 'react';
import '../css/card.css';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { title, author, id } = props;

  const removeHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <div className="card-container">
        <div className="left-side">
          <span className="class-of">Action</span>
          <h2 className="title">{title}</h2>
          <span className="author">{author}</span>
        </div>
        <div>
          <button type="button" onClick={removeHandler}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
