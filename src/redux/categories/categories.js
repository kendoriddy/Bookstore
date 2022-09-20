const CHECK = 'bookstore/category/CHECK';

const initialState = [];

export default function categories(state = initialState, action) {
  switch (action.type) {
    case CHECK:
      return 'Working on it';
    default:
      return state;
  }
}

export const checkBookStatus = () => ({
  type: CHECK,
});
