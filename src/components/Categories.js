import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkBookStatus } from '../redux/categories/categories';
import '../css/categories.css';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const statusChecker = () => {
    dispatch(checkBookStatus());
  };
  return (
    <div className="check-status">
      <button onClick={statusChecker} type="button">Check Status</button>
      <h5>{status}</h5>
    </div>
  );
};

export default Categories;
