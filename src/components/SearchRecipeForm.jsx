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
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(false);
  const [searching, setSearching] = useState(false);
  const [exclude, setExclude] = useState("");
  const [loadingIngredients, setLoadingIngredients] = useState(true);
  const recipeSearch = (e) => {
    e.preventDefault();
    setSearching(true);
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${process.env.API_KEY}&query=${query}&instructionsRequired=true&fillIngredients=true`
      )
      .then((res) => {
        if (res.data.results.length > 0) {
          setEmpty(false);
          setLoading(false);
          console.log(res.data.results);
          setRecipeData(res.data.results);
        } else {
          setEmpty(true);
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    if (showModal == false) {
      setLoadingIngredients(true);
    }
  }, [showModal]);

  const getIngredients = async (e, id) => {
    await axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?&apiKey=${process.env.API_KEY}`
      )
      .then((res) => {
        setLoadingIngredients(false);
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
          <label htmlFor="query">Search</label>
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
        {searching ? (
          loading ? (
            <h1>Loading...</h1>
          ) : recipeData.length > 0 ? (
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
          )
        ) : null}
      </div>
      <Modal open={showModal} setOpen={setShowModal}>
        {loadingIngredients ? (
          <h1>loading...</h1>
        ) : (
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
        )}
      </Modal>
    </div>
  );
}

export default SearchRecipeForm;
