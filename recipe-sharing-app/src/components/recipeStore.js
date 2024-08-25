import { create } from "zustand";

export const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  /*fetchRecipes: async () => {
    try {
      const response = await fetch('https://api.example.com/recipes');
      const data = await response.json();
      set({ recipes: data });
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  },*/
  deleteRecipe: (id) => set((state) => ({ recipes: state.recipes.filter(recipe => recipe.id !== id) })),
  updateRecipe: (updatedRecipe) => {
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    }));
  },

}))
