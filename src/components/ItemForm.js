import React, { useState } from "react";
import { v4 as uuid } from "uuid";
// import items from "../data/items";

function ItemForm({ onItemFormSubmit }) {

  const [category, setCategory] = useState('Produce')
  const [name, setName] = useState("")

  function formSubmit (e) {
    e.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: name,
      category: category,
    };
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={formSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
