import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import books from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books,
  categories: categoriesReducer,
});
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
