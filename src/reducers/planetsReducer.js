const initialState = {
  pending: false,
  planets: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PLANETS':
      return state;
    default:
      return state;
  }
};
