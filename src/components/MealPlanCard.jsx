import React, { useState, useEffect } from "react";
import axios from "axios";

function MealPlanCard({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=25b65521ba854ab197f6c3e63c06fbe8`
      )
      .then((res) => {
        setImageUrl(res.data.image);
        console.log(res.data);
      });
  }, [meal.id]);

  return (
    <div>
      <div className="meal-plan-card">
        <p>{meal.id}</p>
        <p>{meal.title}</p>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
}

export default MealPlanCard;
