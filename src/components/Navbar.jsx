import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

const Navbar = ({ showBackdropHandaler }) => {
  const { items } = useContext(ItemContext);
  const totalCart = items.reduce((currentVal, item) => {
    return currentVal + item.amount;
  }, 0);
  return (
    <nav>
      <h1>SHOP.io</h1>
      <button onClick={showBackdropHandaler}>
        Cart <span>({totalCart})</span>
      </button>
    </nav>
  );
};

export default Navbar;
