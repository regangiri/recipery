import Link from "next/link";
import CalorieCount from "../components/CalorieCount";
import LandingBanner from "../components/LandingBanner";

function LandingPage() {
  return (
    <div>
      <LandingBanner />
      <div className="landing-page-content">
        <CalorieCount />
      </div>
    </div>
  );
}

export default LandingPage;
