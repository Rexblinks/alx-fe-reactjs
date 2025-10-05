import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe, onFinish }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ ...recipe, title: title.trim(), description: description.trim() });
    if (onFinish) onFinish();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Recipe title"
      />
      <br />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Recipe description"
      />
      <br />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
