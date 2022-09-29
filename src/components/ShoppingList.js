import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import itemData from "../data/items";

function ShoppingList() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState(itemData);
  const [search, setSearch] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function onSearchChange(e){
    setSearch(e.target.value)
  }
  let itemsToDisplay;
  if(search !== '') {
    console.log(search)
    itemsToDisplay = items.filter(item => {
      return item.name.toLowerCase().includes(search.toLowerCase())
    })
  } else {
    itemsToDisplay = items.filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    });
  }

  function onItemFormSubmit (newItem) {
    setItems([...items, newItem])
  }


  return (
    <div className="ShoppingList">
      <ItemForm items={items} setItems={setItems} onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
