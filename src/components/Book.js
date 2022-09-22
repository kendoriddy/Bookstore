import React from 'react';
import '../css/card.css';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../redux/books/books';
import { percentage, ProgressBar } from './ProgressBar';

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
        <div className="left-buttons">
          <button className="left-btns comments" type="button" onClick={removeHandler}>
            Comments
          </button>
          <span className="separator">|</span>
          <button className="left-btns remove" type="button" onClick={removeHandler}>
            Remove
          </button>
          <span className="separator">|</span>
          <button className="left-btns edit" type="button" onClick={removeHandler}>
            Edit
          </button>
        </div>
      </div>
      <div className="middle-bar">
        <div>
          <ProgressBar />
        </div>
        <div>
          <div className="percent">{`${percentage}%`}</div>
          <div className="completed">completed</div>
        </div>
      </div>
      <div className="bars" />
      <div className="right-side">
        <div className="current-chap">Current Chapter</div>
        <div className="current-chap">Chapter 17</div>
        <button type="button" className="update-prog">Update progress</button>
      </div>
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
