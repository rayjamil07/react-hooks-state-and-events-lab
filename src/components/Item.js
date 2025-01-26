import React, {useState} from "react";


function Item(props) {
  const { inCart, setInCart} = useState(false)

  const { name, category } = props;

  function AddToCart() {
    setInCart((inCart) => !inCart)
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={AddToCart} className={inCart ? "Add" : "Remove"}>{inCart ? "Remove From" : "Add to"}Cart</button>
    </li>
  );
}

export default Item;
