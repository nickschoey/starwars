import {
  CHANGE_SEARCH,
  RESET_SEARCH,
  ENABLE_VISIBLE,
  DISABLE_VISIBLE
} from '../actions/search';

const initialState = {
  text: '',
  visible: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return { ...state, text: action.payload };
    case RESET_SEARCH:
      return { ...state, text: initialState };
    case ENABLE_VISIBLE:
      return { ...state, visible: true };
    case DISABLE_VISIBLE:
      return { ...state, visible: false };
    default:
      return state;
  }
};
