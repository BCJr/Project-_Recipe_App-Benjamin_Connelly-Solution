import React from "react";
import Recipe from "./Recipe"
// Create and display table for recipes, map recipes that exist with infor to render
// Call the recipe component with each recipe that exists with component and let user delete


function RecipeList({recipes, deleteRecipe}) {
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        { 
            recipes.map((recipe, index) => 
              ( <Recipe 
                key={index} 
                index={index} 
                deleteRecipe={deleteRecipe} 
                recipe={recipe} /> )
            ) 
          }
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;


