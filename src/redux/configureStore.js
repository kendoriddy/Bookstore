import { combineReducers, configureStore } from '@reduxjs/toolkit';
import books from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books,
  categories: categoriesReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
