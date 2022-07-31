import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import RecipeCalorieResult from "./RecipeCalorieResult";

export default function PopularRecipe() {
  const [popularRecipes, setPopularRecipes] = useState([]);

  const getRecipe = () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&number=20`
      )
      .then((res) => {
        setPopularRecipes(res.data.recipes);
        console.log(res.data.recipes);
      });
  };
  useEffect(() => {
    getRecipe();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,

    lazyLoad: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 4000,
        },
      },
    ],
  };
  return (
    <div className=" pt-12 pb-8 lg:pb-0">
      <div className="h-96  lg:h-full">
        <h1 className="text-4xl text-text drop-shadow-sm font-semibold text-center pb-8 font-typography">
          Popular Recipe
        </h1>
        <Slider {...settings}>
          {popularRecipes.map((recipe) => {
            return (
              <RecipeCalorieResult
                title={recipe.title}
                img={recipe.image}
                key={recipe.id}
                id={recipe.id}
                calories={recipe.calories}
                classname={
                  "bg-primary mx-2 my-4 border-2 w-full h-full text-center flex flex-col items-center justify-center rounded-md"
                }
                imgClassName={"w-full h-64"}
                titleClassName={"font-bold my-4 text-center h-14 w-60 mx-auto"}
              />
              // </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
