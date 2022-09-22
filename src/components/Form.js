import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import '../css/add.css';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const [bookValues, setBookValues] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setBookValues({
      ...bookValues,
      [e.target.name]: e.target.value,
    });
  };

  const addBookHandler = (e) => {
    e.preventDefault();
    const title = document.getElementsByName('title')[0].value;
    const author = document.getElementsByName('author')[0].value;
    const category = document.getElementsByName('category')[0].value;
    if (!title.length > 0 || !author.length > 0) return;
    const book = {
      title: bookValues.title,
      author: bookValues.author,
      category: bookValues.category,
      id: uuidv4(),
    };
    dispatch(addBook(book));
    setBookValues({
      title: '',
      author: '',
      category,
    });
  };

  return (
    <div className="book-form">
      <form className="form" onSubmit={addBookHandler}>
        <input
          type="text"
          required
          value={bookValues.title}
          onChange={handleChange}
          placeholder="Book Title"
          className="title-input"
          name="title"
        />
        <input
          type="text"
          required
          value={bookValues.author}
          onChange={handleChange}
          placeholder="Author"
          className="author-input"
          name="author"
        />
        <label htmlFor="category-select">
          <select
            className="book-category"
            onChange={handleChange}
            id="category-select"
            name="category"
            value={bookValues.category}
            required
          >
            <option disabled> Book </option>
            <option value="Programming"> Programming </option>
            <option value="Action"> Action </option>
            <option value="Fiction"> Fiction </option>
            <option value="Adventure"> Adventure </option>
            <option value="History"> History </option>
            <option value="Sci-fi"> Science Fiction </option>
            <option value="Thriller"> Thriller </option>
            <option value="Suspense"> Suspense </option>
            <option value="Romance"> Romance </option>
          </select>
        </label>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
