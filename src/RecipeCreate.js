import React, { useState } from "react"

// Receive user input as a form, on submission capture state and reset form to placeholders


function RecipeCreate({createRecipe}) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  //empty state values
  const initialFormData = {
  
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };  
  
  // initialize state and with empty state values
  const [ formData, setFormData ] = useState(initialFormData);

  // shortcut to intial empty state
  const resetForm = () => setFormData(initialFormData);
  
  // change state of indivitual input in object of array-like keypairs
  const editValue = function({target}) {
    const newData = {...formData, [target.name]: target.value}
    setFormData(newData) 
  };

  // on submission by user move form's state to app-level state for list
  const submitHandler = function(event) {
    event.preventDefault()
    createRecipe(formData)
    resetForm()
  };

  // create display form with table and submit button
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td><input 
                type="text" 
                value={formData.name} //key
                onChange={editValue} //pair
                name="name" 
                required placeholder="Name" /></td>
            <td><input 
                type="text" 
                value={formData.cuisine} 
                onChange={editValue} 
                name="cuisine" 
                required placeholder="Cuisine" /></td>
            <td><input 
                type="url" 
                value={formData.photo} 
                onChange={editValue} 
                name="photo" 
                required placeholder="URL" /></td>    
            <td><textarea 
                type="text" 
                value={formData.ingredients} 
                onChange={editValue} 
                name="ingredients" 
                required placeholder="Ingredients" /></td>
            <td><textarea
                type="text"
                value={formData.preparation}
                onChange={editValue}
                name="preparation"
                required
                placeholder="Preparation" /></td>
            <td>
              <button type="submit">Create</button> 
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate
