import { useState, useEffect } from "react";

function CalorieCount() {
  const [umur, setUmur] = useState(0);
  const [tb, setTb] = useState(0);
  const [bb, setBb] = useState(0);
  const [gender, setGender] = useState("laki");
  const [calorieNeeds, setCalorieNeeds] = useState(2000);

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
    console.log(calorieNeeds);
  }, [calorieNeeds]);

  return (
    <form onSubmit={CountCalorieNeeds} className="calorie-needs">
      <h3>Count your calorie needs</h3>
      <label htmlFor="umur">Age</label>
      <input
        onChange={(e) => setUmur(e.target.value)}
        className="mx-1 p-1 border-2 border-black rounded-md"
        type="number"
        name="umur"
        min="0"
        max="120"
      />
      <label htmlFor="umur">Height</label>
      <input
        onChange={(e) => setTb(e.target.value)}
        className="mx-1 p-1 border-2 border-black rounded-md"
        type="number"
        name="tb"
      />
      <label htmlFor="bb">Weight</label>
      <input
        onChange={(e) => setBb(e.target.value)}
        className="mx-1 p-1 border-2 border-black rounded-md"
        type="number"
        name="bb"
      />
      <label htmlFor="gender">Gender:</label>
      <select
        onChange={(e) => setGender(e.target.value)}
        className="mx-1 p-1 border-2 border-black rounded-md"
        name="gender"
        id="gender"
      >
        <option value="laki">Laki-laki</option>
        <option value="perempuan">Perempuan</option>
      </select>
      <button
      //   onClick={CountCalorieNeeds}
      >
        Calculate
      </button>
    </form>
  );
}

export default CalorieCount;
