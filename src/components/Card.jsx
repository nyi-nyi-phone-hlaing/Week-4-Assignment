import { useContext, useState } from "react";
import { ItemContext } from "../context/ItemContext";

const Card = ({ product }) => {
  const { id, emoji, name, description, price, stock } = product;
  const [currentAmount, setCurrentAmount] = useState(1);
  const { addItem } = useContext(ItemContext);

  const decreseItem = () => {
    if (currentAmount > 0) {
      setCurrentAmount((prev) => prev - 1);
    }
  };
  const increseItem = () => {
    if (currentAmount < stock) {
      setCurrentAmount((prev) => prev + 1);
    } else {
      alert("Out of Stock!");
    }
  };

  const addToCartHandler = () => {
    addItem({
      id,
      name,
      price,
      emoji,
      stock,
      amount: currentAmount,
    });
  };

  return (
    <div className='card' key={id}>
      <h2>{emoji}</h2>
      <h1>{name.toUpperCase()}</h1>
      <p>{description}</p>
      <p className='price'>${price}</p>
      <div className='count'>
        <button onClick={decreseItem}>-</button>
        <p>{currentAmount}</p>
        <button onClick={increseItem}>+</button>
      </div>
      <button onClick={addToCartHandler}>Add to Cart</button>
    </div>
  );
};

export default Card;
