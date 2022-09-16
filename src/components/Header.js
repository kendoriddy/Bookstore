import React from 'react';
import '../css/header.css';
import { BsPersonFill } from 'react-icons/bs';
import Navbar from './Navbar';

const Header = () => (
  <div className="header">
    <div className="navs">
      <h3>Bookstore CMS</h3>
      <Navbar />
    </div>
    <div className="oval">
      <div className="icon">
        <BsPersonFill />
      </div>
    </div>
  </div>
);

export default Header;
