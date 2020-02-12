import { CHANGE_VIEW } from '../actions/navigation';

const initialState = {
  view: 'people'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return { ...state, view: action.payload };
    default:
      return state;
  }
};
