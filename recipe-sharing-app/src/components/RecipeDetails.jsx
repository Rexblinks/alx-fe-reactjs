import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = ({ recipeId }) => {
  const idNum = Number(recipeId);
  const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === idNum));
  const [editing, setEditing] = useState(false);

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setEditing((s) => !s)}>
          {editing ? 'Cancel edit' : 'Edit recipe'}
        </button>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>

      {editing && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Edit</h3>
          <EditRecipeForm recipe={recipe} onFinish={() => setEditing(false)} />
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
