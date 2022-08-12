import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import SearchRecipeForm from "../components/SearchRecipeForm";
import LandingPage from "./LandingPage";

export default function Home() {
  return (
    <div className="font-poppins">
      <Navbar />
      <LandingPage />
      {/* <SearchRecipeForm /> */}
    </div>
  );
}
