import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {

  const [toggle, setToggle] = useState(false);
  // const [items, setItems] = useState
 
  const appClass = setToggle ? "App dark" : "App light"

  function changeTheme(){
    setToggle((toggle) => !toggle)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeTheme}>{toggle ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
