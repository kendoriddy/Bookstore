import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../css/add.css';

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

  return (
    <div>
      <form>
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
