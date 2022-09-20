const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    id: 1,
  },
  {
    title: 'Years End',
    author: 'Friend Amana',
    id: 2,
  },
  {
    title: 'Auspice,',
    author: 'Ryan Musa',
    id: 3,
  },
  {
    title: 'Broad Shoulders',
    author: 'Ben Sharp',
    id: 4,
  },
];

export default function books(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});
