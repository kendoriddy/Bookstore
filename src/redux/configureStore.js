import { combineReducers, configureStore } from '@reduxjs/toolkit';
import books from './books/Books.js';
import categories from './categories/Categories.js';

const rootReducer = combineReducers({
  books,
  categories,
});
const store = configureStore({ reducer: rootReducer });

export default store;
