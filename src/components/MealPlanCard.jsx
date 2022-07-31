import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./Modal";

function MealPlanCard({ meal }) {
  const [dataRecipePlan, setDataRecipePlan] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.API_KEY}&includeNutrition=true`
      )
      .then((res) => {
        setDataRecipePlan(res.data);
        console.log(res.data);
      });
  }, [meal.id]);

  return (
    <div>
      <div className="meal-plan-card flex flex-col w-96 h-full border-2 pb-6 my-10 mx-2 rounded-xl">
        {/* <p className="font-bold">{meal.id}</p> */}
        <p className="font-bold my-4 text-center h-14">{meal.title}</p>
        <img src={dataRecipePlan.image} alt="" className="my-2" />
        <p>calories:{dataRecipePlan?.nutrition?.nutrients[0]?.amount}</p>
        <button onClick={() => setShowModal(true)}>Get Recipes</button>
      </div>
      <Modal open={showModal} setOpen={setShowModal}>
        <div className="max-h-96 lg:max-w-[50rem] lg:max-h-[30rem] overflow-scroll overflow-x-hidden">
          <h3>{dataRecipePlan?.title}</h3>
          <h3 className="font-bold">Ingredients</h3>
          <div className="ingredients-container my-3 columns-3">
            {dataRecipePlan?.extendedIngredients?.map((ingredient) => {
              return (
                <ul className="ingredient">
                  <li>{ingredient.name}</li>
                </ul>
              );
            })}
          </div>
          <div className="step flex flex-col my-3">
            <h3 className="font-bold">Steps</h3>
            {dataRecipePlan?.analyzedInstructions[0]?.steps?.map((step) => {
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

export default MealPlanCard;
