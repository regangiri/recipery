import { combineReducers } from "redux";
import calorieReducer from "./calorieReducer";
import searchReducer from "./searchReducer";
import paymentReducer from "./paymentReducer";
import recipeReducer from "./recipeReducer";

export const reducers = {
  calorieReducer,
  searchReducer,
  paymentReducer,
  recipeReducer,
};

export default combineReducers({
  ...reducers,
});
