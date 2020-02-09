export const CHANGE_SEARCH = 'CHANGE_SEARCH';
export const RESET_SEARCH = 'RESET_SEARCH';

export const changeSearch = payload => {
  return {
    type: CHANGE_SEARCH,
    payload
  };
};

export const resetSearch = () => {
  return {
    type: RESET_SEARCH
  };
};
