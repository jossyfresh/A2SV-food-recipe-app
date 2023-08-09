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
    <div className="bg-gray-200 ">
      <Navbar />
      <div className="">
        <h1 className="text-4xl text-center mt-10">Food Recipe App</h1>
      </div>
      {isLoading ? (
        <div className="w-[90%] grid md:grid-cols-4 grid-cols-3 items-center align-center gap-20 mt-20 mx-auto">
          {[...Array(8)].map((_, index) => (
            <div
              className=" h-[348px] rounded-md border bg-yellow-200 rounded-t-full shadow-md hover:shadow-lg"
              key={index}
            >
              <div className="w-full h-[238px] rounded-full bg-yellow-100  "></div>
              <div className="flex items-center justify-center">
                <h1 className="text-center text-lg mt-5"></h1>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="lg:w-[90%] w-full px-7 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 items-center align-center gap-20 mt-20 mx-auto">
          {recipes.meals?.map((recipe: any) => (
            <Link to={`/detail/${recipe.idMeal}`}>
              <div
                className=" sm:h-[320px] lg:h-[348px] rounded-md border bg-yellow-200 rounded-t-full shadow-md hover:shadow-lg"
                key={recipe.idMeal}
              >
                <img
                  src={recipe.strMealThumb}
                  alt="food"
                  className="w-full sm:h-[190px] lg:h-[238px] rounded-full  "
                />
                <div className="flex items-center justify-center">
                  <h1 className="text-center text-lg mt-5">{recipe.strMeal}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
