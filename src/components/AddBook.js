import React from 'react';
import '../css/add.css';

const AddBook = () => (
  <div className="add-container">
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" required placeholder="Book Title" />
      <input type="text" required placeholder="Author" />
      <input type="button" value="Submit" />
    </form>
  </div>
);

export default AddBook;
