import React, { useState, useEffect } from "react";
import { Modal } from "./Modal";
import axios from "axios";

function RecipeCalorieResult(props) {
  const [recipeData, setRecipeData] = useState([]);
  const [cookingStep, setCookingStep] = useState([]);
  const [cuisine, setCuisine] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getIngredients = async (e, id) => {
    await axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?&apiKey=${process.env.API_KEY}`
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
      <div className={`${props.classname}`}>
        <div>
          <h3 className={`${props.titleClassName}`}>{props.title}</h3>
          <p>Calories :{props.calories}</p>
        </div>
        <img src={props.img} alt="" className={`${props.imgClassName}`} />
        <button
          onClick={(e) => {
            setShowModal(true);
            getIngredients(e, props.id);
          }}
          className="px-3 py-1 my-3 border-2 rounded-xl"
        >
          Get Recipes
        </button>
      </div>
      <Modal open={showModal} setOpen={setShowModal}>
        <div className="max-h-96 lg:max-w-[50rem] lg:max-h-[30rem] overflow-scroll overflow-x-hidden">
          <h3>{props.title}</h3>
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

export default RecipeCalorieResult;
