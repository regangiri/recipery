import axios from "axios";

export const getIngredientsSuccess = (data) => {
  return {
    type: "getRecipe",
    payload: data,
  };
};

export const getIngredients = (id) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?&apiKey=${process.env.API_KEY}`
      )
      .then((res) => {
        // console.log(res.data.analyzedInstructions[0].steps);
        // setCookingStep(res.data.analyzedInstructions[0].steps);
        // console.log(res.data.cuisines);
        // setCuisine(res.data.cuisines);
        // console.log(res.data.extendedIngredients);
        // setIngredients(res.data.extendedIngredients);
        // console.log(id);
        const data = res.data;
        dispatch(getIngredientsSuccess(data));
      });
  };
};
