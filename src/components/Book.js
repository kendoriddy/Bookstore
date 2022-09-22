import React from 'react';
import '../css/card.css';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    title, author, id, category,
  } = props;

  const removeHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="card-container">
      <div className="left-side">
        <div>
          <span className="class-of">{category}</span>
          <h2 className="title">{title}</h2>
          <span className="author">{author}</span>
        </div>
        <div>
          <button type="button" onClick={removeHandler}>
            Comments
          </button>
          <button type="button" onClick={removeHandler}>
            Remove
          </button>
          <button type="button" onClick={removeHandler}>
            Edit
          </button>
        </div>
      </div>
      <div className="middle-bar">Progress</div>
      <div className="right-side">Chapter</div>
    </div>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
