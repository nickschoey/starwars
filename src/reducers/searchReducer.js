import { CHANGE_SEARCH, RESET_SEARCH } from '../actions/search';

const initialState = {
  text: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return { ...state, text: action.payload };
    case RESET_SEARCH:
      return { ...state, text: initialState };
    default:
      return state;
  }
};
