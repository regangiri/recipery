const initialState = {
  searching: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "searchToggle":
      return {
        ...state,
        searching: !state.searching,
      };
    default:
      return state;
  }
};

export default searchReducer;
