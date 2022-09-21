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
    if (!title.length > 0 || !author.length > 0) return;
    const book = {
      title: bookValues.title,
      author: bookValues.author,
      id: uuidv4(),
    };
    dispatch(addBook(book));
    setBookValues({
      title: '',
      author: '',
    });
  };

  return (
    <div>
      <form onSubmit={addBookHandler}>
        <input
          type="text"
          required
          value={bookValues.title}
          onChange={handleChange}
          placeholder="Book Title"
          name="title"
        />
        <input
          type="text"
          required
          value={bookValues.author}
          onChange={handleChange}
          placeholder="Author"
          name="author"
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
