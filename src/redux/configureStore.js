import { combineReducers, configureStore } from '@reduxjs/toolkit';
import books from './books/Books';
import categories from './categories/Categories';

const rootReducer = combineReducers({
  books,
  categories,
});
const store = configureStore({ reducer: rootReducer });

export default store;
