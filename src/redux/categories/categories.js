const CHECK = 'bookstore/categories/CHECK';

const reducer = (state = [], action) => {
  switch (action.type) {
    case CHECK:
      return 'under construction';
    default:
      return state;
  }
};

export const checkBookStatus = () => ({
  type: CHECK,
});

export default reducer;
