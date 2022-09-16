import React from 'react';
import '../css/add.css';

const Form = () => (
  <div>
    <form>
      <input type="text" required placeholder="Book Title" />
      <input type="text" required placeholder="Author" />
      <input type="button" value="Submit" />
    </form>
  </div>
);

export default Form;
