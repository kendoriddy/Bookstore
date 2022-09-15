import React from 'react';
import '../css/header.css';
import { BsPersonFill } from 'react-icons/bs';

const Header = () => (
  <div className="header">
    <div className="navs">
      <h3>Bookstore CMS</h3>
      <nav>BOOKS</nav>
      <nav>CATEGORIES</nav>
    </div>
    <div className="oval">
      <div className="icon">
        <BsPersonFill />
      </div>
    </div>
  </div>
);

export default Header;
