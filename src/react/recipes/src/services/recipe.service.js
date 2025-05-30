const STORAGE_KEY = "RECIPES";

export function getRecipes() {
    const localItems = localStorage.getItem(STORAGE_KEY);
    return localItems ? JSON.parse(localItems) : [];
}

export function saveRecipes(recipes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
}

export function createRecipe(title, description) {
    return {
        id: crypto.randomUUID(),
        title,
        description,
    };
}
