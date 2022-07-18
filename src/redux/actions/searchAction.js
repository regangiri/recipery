export const toggleSearch = () => {
  return {
    type: "searchToggle",
  };
};

export const searchButtonToggle = () => {
  return (dispatch) => {
    dispatch(toggleSearch());
  };
};
