const initialState = {
  pending: false,
  films: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FILMS':
      return state;
    default:
      return state;
  }
};
