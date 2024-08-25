import React from 'react';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    // Optionally, add a confirmation dialog before deleting
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
    }
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;