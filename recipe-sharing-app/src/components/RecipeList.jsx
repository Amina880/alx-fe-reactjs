import { useRecipeStore } from "./recipeStore";
import { useEffect } from "react";

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    /*const fetchRecipes = useRecipeStore((state) => state.fetchRecipes);

  // Fetch recipes when the component mounts
  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);*/



    return (
      <div>
         {Array.isArray(recipes) && recipes.length > 0 ? (
        recipes.map((recipe) => {
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