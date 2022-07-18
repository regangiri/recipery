import axios from "axios";

export const fetchCalorieSuccess = (calorie) => {
  return {
    type: "fetchCalorieInput",
    payload: calorie,
  };
};

export const fetchDailyMealSuccess = (dailyMeal) => {
  return {
    type: "fetchDailyMeal",
    payload: dailyMeal,
  };
};

export const fetchCalorie = (calorieInput) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByNutrients?&apiKey=25b65521ba854ab197f6c3e63c06fbe8&maxCalories=${calorieInput}&minCalories=${
          calorieInput - 500
        }`
      )
      .then((res) => {
        const calorieResult = res.data;
        console.log(res.data);

        dispatch(fetchCalorieSuccess(calorieResult));
      });
  };
};

export const fetchDailyMeal = (calorieInput) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=acd33669900f407bac473cccf57cfbf1&timeFrame=day&targetCalories=${calorieInput}`
      )
      .then((res) => {
        const dailyMeal = res.data;
        dispatch(fetchDailyMealSuccess(dailyMeal));
      })
      .catch((err) => console.log(err));
  };
};
