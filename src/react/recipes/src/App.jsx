import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeDialog from "./components/RecipeDialog";
import RecipeList from "./components/RecipeList";
import { useRecipes } from "./hooks/useRecipes";

function App() {
  const { recipes, addRecipe, deleteRecipe, updateRecipe } = useRecipes();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);

  const handleOpenNew = () => {
    setEditingRecipe(null);
    setDialogOpen(true);
  };

  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
    setEditingRecipe(null);
  };

  const handleSubmit = (title, description) => {
    if (editingRecipe) {
      updateRecipe(editingRecipe.id, title, description);
    } else {
      addRecipe(title, description);
    }
    handleClose();
  };

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <button onClick={handleOpenNew}>New Recipe</button>
        </div>
        <RecipeList
          recipes={recipes}
          deleteRecipe={deleteRecipe}
          onEdit={handleEdit}
        />
        {dialogOpen && (
          <RecipeDialog
            onClose={handleClose}
            onSubmit={handleSubmit}
            initialData={editingRecipe}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
