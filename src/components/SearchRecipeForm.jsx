import { useState } from "react";
import axios from "axios";

function SearchRecipeForm() {
  const [query, setQuery] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  const recipeSearch = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.spoonacular.com/food/menuItems/search?&apiKey=acd33669900f407bac473cccf57cfbf1&query=${query}`
      )
      .then((res) => {
        console.log(res.data);
        setRecipeData(res.data.menuItems);
      });
  };

  const getIngredients = (id) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?&apiKey=acd33669900f407bac473cccf57cfbf1`
      )
      .then((res) => console.log(res));
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
        {recipeData.map((data) => {
          return (
            <ul>
              <li>{data.title}</li>
              <img src={data.image} alt="" />
              <button onClick={getIngredients(data.id)}>get recipe</button>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default SearchRecipeForm;
