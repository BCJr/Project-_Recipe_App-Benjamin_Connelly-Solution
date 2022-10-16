import React, { useState } from "react"

//component to display individual recipe, and button to delete that recipe by user

function Recipe ({index, deleteRecipe, recipe}) {

    const deleteHandler = () => deleteRecipe(index)

    return (
        <tr>
            <td><p>{recipe.name}</p></td>
            <td><p>{recipe.cuisine}</p></td>
            <td><img src={recipe.photo} /></td>
            <td><p>{recipe.ingredients}</p></td>
            <td><p>{recipe.preparation}</p></td>
            <td><button name="delete" onClick={deleteHandler}>Delete</button></td>
        </tr>
    )
}

export default Recipe
