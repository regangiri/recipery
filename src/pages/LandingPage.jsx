import Link from "next/link";
import CalorieCount from "../components/CalorieCount";
import LandingBanner from "../components/LandingBanner";
import PopularRecipe from "../components/PopularRecipe";

function LandingPage() {
  return (
    <div className="bg-secondary">
      <LandingBanner />
      <div className="popular-slider-container w-full py-10  overflow-y-hidden">
        {/* <PopularRecipe /> */}
      </div>
      <div className="landing-page-content flex flex-col justify-center items-center w-full">
        <CalorieCount />
      </div>
    </div>
  );
}

export default LandingPage;
