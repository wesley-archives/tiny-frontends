import { useState, useEffect } from "react";

const RecipeForm = ({ onSubmit, onCancel, initialTitle = "", initialDescription = "" }) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  useEffect(() => {
    setTitle(initialTitle);
    setDescription(initialDescription);
  }, [initialTitle, initialDescription]);

  function handleSubmit(e) {
    e.preventDefault();
    if (title.length < 3) return;
    onSubmit(title, description);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="recipe-title">Title</label>
        <input
          type="text"
          id="recipe-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="recipe-description">Description</label>
        <textarea
          id="recipe-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="dialog-buttons">
        <button type="submit">{initialTitle ? "Update" : "Add"}</button>
        {onCancel && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default RecipeForm;
