import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const getfoodrecipeofb = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
    );
    const data = await response.json();
    console.log(data);
    setRecipes(data);
    setIsLoading(false);
    console.log(recipes);
  };

  React.useEffect(() => {
    getfoodrecipeofb();
  }, []);

  return (
    <div className="bg-blue-200 ">
      <Navbar />
      <div className="bg-blue-200">
        <h1 className="text-4xl text-center mt-10">Food Recipe App</h1>
      </div>
      {isLoading ? (
        <div className="w-[80%] grid grid-cols-4 items-center align-center gap-20 mt-20 mx-auto">
          {[...Array(8)].map((_, index) => (
            <div className="h-48 rounded-md animate-pulse" key={index}>
              <div className="bg-blue-300 h-full w-full rounded-lg shadow-md"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-[80%] grid grid-cols-4 items-center align-center gap-20 mt-20 mx-auto">
          {recipes.meals?.map((recipe: any) => (
            <div className=" h-48 rounded-md" key={recipe.idMeal}>
              <Link to={`/detail/${recipe.idMeal}`}>
                <img
                  src={recipe.strMealThumb}
                  alt="food"
                  className="w-full h-full rounded-lg shadow-md shadow-blue-300 hover:shadow-blue-500"
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
