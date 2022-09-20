const CHECK = 'bookstore/category/CHECK';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHECK:
      return 'Working on it';
    default:
      return state;
  }
}
