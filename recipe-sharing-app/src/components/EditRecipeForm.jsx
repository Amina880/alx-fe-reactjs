import React, { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipeId, onClose }) => {
  const editRecipe = useRecipeStore((state) => state.updatedRecipe);
  const recipes = useRecipeStore((state) => state.recipes);
  const recipe = recipes.find((r) => recipe.id === recipeId);

  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
  });

  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title,
        ingredients: recipe.ingredients.join(', '),
        instructions: recipe.instructions,
      });
    }
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.title.trim() || !formData.ingredients.trim() || !formData.instructions.trim()) {
      alert('All fields are required.');
      return;
    }

    const updatedRecipe = {
      ...recipe,
      title: formData.title.trim(),
      ingredients: formData.ingredients.split(',').map((ingredient) => ingredient.trim()),
      instructions: formData.instructions.trim(),
    };

    editRecipe(updatedRecipe);
    onClose();
  };

  return (
    <div className="edit-recipe-form">
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="ingredients">Ingredients (comma-separated):</label>
          <input
            type="text"
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditRecipeForm;