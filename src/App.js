import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  
  //highest level state is list of recipes
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // use recipe index to find it and delete it, used in RecipeList
  const deleteRecipe = (recipeIndex) => 
    setRecipes(recipes.filter((ignored, index) => 
      index !== recipeIndex));
  
  // callback to shortcut edit recipes object and add new recipe to state
  const createRecipe = (recipe) => setRecipes([...recipes, recipe])

  
  // call RecipeList with state of all recipes and component to delete one by index
  // call RecipeCreate with ability to edit add a recipe to list of all recipes
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
