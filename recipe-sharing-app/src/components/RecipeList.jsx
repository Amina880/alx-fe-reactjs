import { useRecipeStore } from "./recipeStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";

  const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    /*const fetchRecipes = useRecipeStore((state) => state.fetchRecipes);

  // Fetch recipes when the component mounts
  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);*/



    return (
      <div>
        <nav>
            <Link to="/">Recipe Details </Link>
            <Link to="/recipelist">Recipe List </Link>
        </nav>
         {Array.isArray(filteredRecipes) && filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => {
          if (!recipe) return null; // Check if the recipe is defined
          return (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          );
        })
      ) : (
        <p>No recipes found. Please add some recipes.</p>
      )}
    </div>
    );
  };



export default RecipeList;