import { useState } from "react";
import axios from "axios";

function SearchRecipeForm() {
  const [query, setQuery] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  const [cookingStep, setCookingStep] = useState([]);
  const [cuisine, setCuisine] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const recipeSearch = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?&apiKey=25b65521ba854ab197f6c3e63c06fbe8&query=${query}&instructionsRequired=true&fillIngredients=true`
      )
      .then((res) => {
        console.log(res.data.results);
        setRecipeData(res.data.results);
      });
  };

  const getIngredients = async (e, id) => {
    await axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?&apiKey=25b65521ba854ab197f6c3e63c06fbe8`
      )
      .then((res) => {
        console.log(res.data.analyzedInstructions[0].steps);
        setCookingStep(res.data.analyzedInstructions[0].steps);
        console.log(res.data.cuisines);
        setCuisine(res.data.cuisines);
        console.log(res.data.extendedIngredients);
        setIngredients(res.data.extendedIngredients);
        console.log(id);
        return console.log(cookingStep, cuisine, ingredients, id);
      });
  };
  return (
    <div>
      <div className="form-container flex justify-center items-center my-10">
        <form>
          <label htmlFor="query">Cari resep</label>
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
            name="query"
          />
          <button onClick={recipeSearch}>search</button>
        </form>
      </div>

      <div className="container">
        {recipeData.map((data, index) => {
          return (
            // <ul>
            //   <li>{data.title}</li>
            //   <img src={data.image} alt="" />
            //   <button onClick={getIngredients(data)}>get recipe</button>
            // </ul>
            <div className="card" key={index}>
              <div className="title">
                <p>{data.title}</p>
              </div>
              <div className="image-card">
                <img src={data.image} alt="" />
              </div>
              <div
                className="button"
                onClick={(e) => getIngredients(e, data.id)}
              >
                <button>get recipe</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchRecipeForm;
