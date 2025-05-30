import RecipeItem from "./RecipeItem";

const RecipeList = ({ recipes, deleteRecipe, onEdit }) => {
  return (
    <section>
      <div className="container">
        <h2>Recipes</h2>
        <p>{recipes.length === 0 ? "No recipes yet." : `${recipes.length} recipe(s)`}</p>
        <div className="recipes">
          {recipes.map((recipe) => (
            <RecipeItem
              key={recipe.id}
              {...recipe}
              deleteRecipe={deleteRecipe}
              onEdit={onEdit}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeList;
