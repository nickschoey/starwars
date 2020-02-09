export const CHANGE_SEARCH = 'CHANGE_SEARCH';
export const RESET_SEARCH = 'RESET_SEARCH';
export const ENABLE_VISIBLE = 'ENABLE_VISIBLE';
export const DISABLE_VISIBLE = 'DISABLE_VISIBLE';

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

export const enableVisible = () => {
  return {
    type: ENABLE_VISIBLE
  };
};

export const disableVisible = () => {
  return {
    type: DISABLE_VISIBLE
  };
};
