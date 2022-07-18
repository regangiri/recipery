import Link from "next/link";
import { useState, useEffect } from "react";
import SearchRecipeForm from "./SearchRecipeForm";
import { fetchCalorie, fetchDailyMeal } from "../redux/actions/calorieAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import MealPlanCard from "./MealPlanCard";

function CalorieCount() {
  const [umur, setUmur] = useState(0);
  const [tb, setTb] = useState(0);
  const [bb, setBb] = useState(0);
  const [gender, setGender] = useState("laki");
  const [calorieNeeds, setCalorieNeeds] = useState(2000);
  const [searching, setSearching] = useState(false);
  const [showDailyMealPlan, setShowDailyMealPlan] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();

  const { calorieData } = useSelector((state) => state.calorieReducer);
  const { dailyMealPlan } = useSelector((state) => state.calorieReducer);

  const CountCalorieNeeds = (e) => {
    e.preventDefault();
    if (gender == "laki") {
      setCalorieNeeds(Math.floor(66.5 + 13.75 * bb + 5.003 * tb - 6.75 * umur));
    } else {
      setCalorieNeeds(
        Math.floor(655.1 + 9.563 * bb + 1.85 * tb - 4.676 * umur)
      );
    }
  };

  useEffect(() => {
    dispatch(fetchCalorie(calorieNeeds));
    dispatch(fetchDailyMeal(calorieNeeds));
    console.log(calorieNeeds);
  }, [calorieNeeds]);

  return (
    <div className="calorie-count-container">
      <form
        onSubmit={CountCalorieNeeds}
        className="calorie-needs flex flex-col max-w-md items-center  sm:items-start"
      >
        <h3>Count your calorie needs</h3>
        <div className="flex flex-col sm:flex-row items-center mx-2">
          <label className="w-24" htmlFor="umur">
            Age
          </label>
          <input
            onChange={(e) => setUmur(e.target.value)}
            className="mx-3 p-1 border-2 border-black rounded-md w-48"
            type="number"
            name="umur"
            min="0"
            max="120"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center mx-2">
          <label className="w-24" htmlFor="umur">
            Height
          </label>
          <input
            onChange={(e) => setTb(e.target.value)}
            className="mx-3 p-1 border-2 border-black rounded-md w-48"
            type="number"
            name="tb"
            min="0"
            max="999"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center mx-2">
          <label className="w-24" htmlFor="bb">
            Weight
          </label>
          <input
            onChange={(e) => setBb(e.target.value)}
            className="mx-3 p-1 border-2 border-black rounded-md w-48"
            type="number"
            name="bb"
            min="0"
            max="999"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center mx-2">
          <label className="w-24" htmlFor="gender">
            Gender
          </label>
          <select
            onChange={(e) => setGender(e.target.value)}
            className="mx-3 p-1 border-2 border-black rounded-md w-48"
            name="gender"
            id="gender"
          >
            <option value="laki">Laki-laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
          <button>Calculate</button>
        </div>
      </form>
      <div className="result">
        <h3>Your Calorie Needs : {calorieNeeds}</h3>

        <button
          onClick={() => setShowDailyMealPlan(!showDailyMealPlan)}
          className="m-1 px-6 py-3 border-2 rounded-2xl bg-primary text-text hover:bg-text hover:text-primary"
        >
          Set Daily Meal Plan
        </button>

        <button
          onClick={() => setSearching(!searching)}
          className="m-1 px-6 py-3 border-2 rounded-2xl bg-primary text-text hover:bg-text hover:text-primary"
        >
          Search Recipe
        </button>
      </div>

      <div className="recipe-result-by-calorie flex flex-wrap items-center justify-center">
        {searching
          ? calorieData.map((data) => {
              return (
                <div className="mx-8 my-4 border-2 w-96 h-full">
                  <div>
                    <h3>{data.title}</h3>
                    <p>{data.id}</p>
                    <p>{data.readyInMinutes}</p>
                  </div>
                  <img src={data.image} alt="" />
                </div>
              );
            })
          : null}
      </div>
      <div className="recipe-result-by-calorie flex flex-wrap items-center justify-center">
        {showDailyMealPlan
          ? dailyMealPlan.meals.map((meal) => {
              return <MealPlanCard key={meal.id} meal={meal} />;
            })
          : null}
      </div>
    </div>
  );
}

export default CalorieCount;
