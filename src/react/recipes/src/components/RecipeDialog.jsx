import RecipeForm from "./RecipeForm";

const RecipeDialog = ({ onClose, onSubmit, initialData }) => {
    return (
        <div className="dialog-overlay">
            <div className="dialog">
                <h2>{initialData ? "Edit Recipe" : "New Recipe"}</h2>
                <RecipeForm
                    onSubmit={onSubmit}
                    onCancel={onClose}
                    initialTitle={initialData?.title}
                    initialDescription={initialData?.description}
                />
            </div>
        </div>
    );
};

export default RecipeDialog;
