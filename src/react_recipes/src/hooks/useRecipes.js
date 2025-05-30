import { useState, useEffect } from "react";
import { getRecipes, saveRecipes, createRecipe } from "../services/recipe.service";

export function useRecipes() {
    const [recipes, setRecipes] = useState(getRecipes);

    useEffect(() => {
        saveRecipes(recipes);
    }, [recipes]);

    function addRecipe(title, description) {
        const newRecipe = createRecipe(title, description);
        setRecipes((current) => [...current, newRecipe]);
    }

    function deleteRecipe(id) {
        setRecipes((current) => current.filter((recipe) => recipe.id !== id));
    }

    function updateRecipe(id, title, description) {
        setRecipes((current) =>
            current.map((recipe) =>
                recipe.id === id ? { ...recipe, title, description } : recipe
            )
        );
    }

    return { recipes, addRecipe, deleteRecipe, updateRecipe };      
}
