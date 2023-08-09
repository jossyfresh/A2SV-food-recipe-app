import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function DetailPage() {
  const [food, setFood] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      setFood(data.meals[0]);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  // Get the value of idMeal from the food state variable
  const idMeal = food?.idMeal;
  // Get the value of strMeal from the food state variable
  const strMeal = food?.strMeal;
  // Get the value of strCategory from the food state variable
  const strCategory = food?.strCategory;
  // Get the value of strArea from the food state variable
  const strArea = food?.strArea;
  // Get the value of strInstructions from the food state variable
  const strInstructions = food?.strInstructions;
  // Get the value of strMealThumb from the food state variable
  const strMealThumb = food?.strMealThumb;
  // Get the value of strTags from the food state variable
  const strTags = food?.strTags;
  // Get the value of strYoutube from the food state variable
  const strYoutube = food?.strYoutube;
  // Get the value of strIngredient1 from the food state variable
  const strIngredient1 = food?.strIngredient1;
  // Get the value of strIngredient2 from the food state variable
  const strIngredient2 = food?.strIngredient2;
  // Get the value of strIngredient3 from the food state variable
  const strIngredient3 = food?.strIngredient3;
  // Get the value of strIngredient4 from the food state variable
  const strIngredient4 = food?.strIngredient4;

  return (
    <div className="bg-blue-200">
      <Navbar />
      <div className="text-xl bg-blue-200 justify-center flex h-32 items-center">
        <h1 className="text-3xl">{strMeal}</h1>
      </div>
      <div className="flex justify-center">
        <img
          src={strMealThumb}
          alt="food"
          className="w-96 h-80 rounded-lg shadow-md shadow-blue-300 hover:shadow-blue-500"
        />
      </div>
      <div className="flex justify-center mt-5">
        <h1 className="text-2xl">Category: {strCategory}</h1>
      </div>
      <div className="flex justify-center mt-5">
        <h1 className="text-2xl">Ingredients:</h1>
      </div>
      <div className="flex justify-center mt-5">
        <ul className="flex gap-5">
          <li>{strIngredient1}</li>
          <li>{strIngredient2}</li>
          <li>{strIngredient3}</li>
          <li>{strIngredient4}</li>
        </ul>
      </div>
      <div className="flex justify-center mt-5 w-[80%] mx-auto ">
        <h1 className="text-2xl">Instructions:</h1>
      </div>
      <div className="flex justify-center mt-5 w-[80%] self-center mx-auto">
        <p className="text-center">{strInstructions}</p>
      </div>
    </div>
  );
}

export default DetailPage;
