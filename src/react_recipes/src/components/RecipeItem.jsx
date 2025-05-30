const RecipeItem = ({ id, title, description, deleteRecipe, onEdit }) => {
  return (
    <div className="recipe-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => onEdit({ id, title, description })}>Edit</button>
      <button onClick={() => deleteRecipe(id)}>Delete</button>
    </div>
  );
};

export default RecipeItem;
