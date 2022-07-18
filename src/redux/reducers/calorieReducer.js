const initialState = {
  calorieData: [],
  dailyMealPlan: [],
};

const calorieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchCalorieInput":
      return {
        ...state,
        calorieData: action.payload,
      };
    case "fetchDailyMeal":
      return {
        ...state,
        dailyMealPlan: action.payload,
      };
    default:
      return state;
  }
};

export default calorieReducer;
