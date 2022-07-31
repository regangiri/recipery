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
        `https://api.spoonacular.com/recipes/findByNutrients?&apiKey=${
          process.env.API_KEY
        }&maxCalories=${calorieInput}&minCalories=${calorieInput - 500}`
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
        `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.API_KEY}&timeFrame=day&targetCalories=${calorieInput}`
      )
      .then((res) => {
        const dailyMeal = res.data;
        dispatch(fetchDailyMealSuccess(dailyMeal));
      })
      .catch((err) => console.log(err));
  };
};
