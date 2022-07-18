import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./Modal";

function SearchRecipeForm() {
  const [query, setQuery] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  const [cookingStep, setCookingStep] = useState([]);
  const [cuisine, setCuisine] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [showModal, setShowModal] = useState(false);

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
  // const recipeSearchByCalories = () => {
  //   axios
  //     .get(
  //       `https://api.spoonacular.com/recipes/complexSearch?&apiKey=25b65521ba854ab197f6c3e63c06fbe8&maxCalories=${calorieBorder}&instructionsRequired=true&fillIngredients=true`
  //     )
  //     .then((res) => {
  //       console.log(res.data.results);
  //       setRecipeData(res.data.results);
  //     });
  // };

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

  // useEffect(() => {
  //   recipeSearchByCalories();
  // }, []);

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
            className="text-left text-sm mx-8 rounded-2xl py-2 px-6 border-2 border-accent"
          />
          <button
            className="border-2 bg-primary text-text hover:bg-text hover:text-primary px-6 py-2 font-semibold rounded-xl border-accent"
            onClick={recipeSearch}
          >
            search
          </button>
        </form>
      </div>

      <div className="container flex flex-wrap sm:flex-row flex-col justify-center items-center">
        {recipeData.length > 0 ? (
          recipeData.map((data, index) => {
            return (
              <div
                className="card flex flex-col border-2 py-2 mx-3 my-2 items-center rounded-2xl bg-primary"
                key={index}
              >
                <div className="title">
                  <p className="my-2 text-sm font-bold font-poppins">
                    {data.title}
                  </p>
                </div>
                <div className="image-card w-full">
                  <img src={data.image} alt="" />
                </div>
                <div
                  className="button"
                  onClick={(e) => {
                    setShowModal(true);
                    getIngredients(e, data.id);
                  }}
                >
                  <button className="border-2 rounded-xl bg-primary text-text hover:bg-secondary hover:text-primary px-6 py-2 my-2 border-accent font-semibold">
                    get recipe
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1>sorry, We can't find a recipe with that name</h1>
        )}
      </div>
      <Modal open={showModal} setOpen={setShowModal}>
        <div className="max-h-96 lg:max-w-[50rem] lg:max-h-[30rem] overflow-scroll overflow-x-hidden">
          <h3 className="font-bold">Ingredients</h3>
          <div className="ingredients-container my-3 columns-3">
            {ingredients.map((ingredient) => {
              return (
                <ul className="ingredient">
                  <li>{ingredient.name}</li>
                </ul>
              );
            })}
          </div>
          <div className="step flex flex-col my-3">
            <h3 className="font-bold">Steps</h3>
            {cookingStep.map((step) => {
              return (
                <div>
                  {step.number} {step.step}
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SearchRecipeForm;
