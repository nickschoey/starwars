const initialState = {
  pending: false,
  vehicles: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VEHICLES':
      return state;
    default:
      return state;
  }
};
