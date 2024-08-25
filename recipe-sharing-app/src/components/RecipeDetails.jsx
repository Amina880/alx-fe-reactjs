import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";
import { useRecipeStore } from "./recipeStore";
import AddRecipeForm from "./AddRecipeForm";

 const RecipeDetail = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <EditRecipeForm />
        <DeleteRecipeButton />
        <AddRecipeForm />
        {/* Render EditRecipeForm and DeleteRecipeButton here */}
      </div>
    );
  };
  export default RecipeDetail