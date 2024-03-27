import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

const Cart = ({ item }) => {
  const { id, price, emoji, amount, name, stock } = item;

  const { addItem, removeItem } = useContext(ItemContext);
  const decreseItem = () => {
    removeItem(id);
  };
  const increseItem = () => {
    if (amount < stock) {
      addItem({ ...item, amount: 1 });
    } else {
      alert("Out of Stock!");
    }
  };
  return (
    <div className='cart'>
      <h2>{emoji}</h2>
      <h1>{name.toUpperCase()}</h1>
      <p className='price'>${price}</p>
      <div className='count'>
        <button onClick={decreseItem}>-</button>
        <p>{amount}</p>
        <button onClick={increseItem}>+</button>
      </div>
    </div>
  );
};

export default Cart;
