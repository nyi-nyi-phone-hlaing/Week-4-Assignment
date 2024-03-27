import React, { useContext } from "react";
import Cart from "./Cart";
import { ItemContext } from "../context/ItemContext";

const CartList = ({ hideBackdropHandaler }) => {
  const { items, totalAmount } = useContext(ItemContext);
  const totalPrice = `$${totalAmount.toFixed(2)}`;
  return (
    <section className='cart-ctr'>
      <header>
        <h1>Cart List</h1>
        <button onClick={hideBackdropHandaler}>Close</button>
      </header>
      <div className='cart-list'>
        {items.length < 1 ? (
          <h1>No Items in your cart !!</h1>
        ) : (
          <>
            {items.map((item) => (
              <Cart key={item.id} item={item} />
            ))}
          </>
        )}
      </div>
      <div className='footer'>
        <p>
          Total Price <span>{totalPrice}</span>
        </p>
        {items.length < 1 ? (
          <button onClick={hideBackdropHandaler}>Add Items Now</button>
        ) : (
          <button>Order Now</button>
        )}
      </div>
    </section>
  );
};

export default CartList;
