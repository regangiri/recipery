const initialState = {
  recipeData: [],
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getRecipe":
      return {
        ...state,
        recipeData: action.payload,
      };
    case "fetchCarById":
      return {
        ...state,
        carId: action.payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;
