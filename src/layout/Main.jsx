import { useState } from "react";
import Backdrop from "../pages/Backdrop";
import Header from "../pages/Header";
import Products from "../pages/Products";

const Main = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);

  const hideBackdropHandaler = () => {
    setShowBackdrop(false);
  };

  const showBackdropHandaler = () => {
    setShowBackdrop(true);
  };

  return (
    <section className='Main'>
      <Header showBackdropHandaler={showBackdropHandaler} />
      <Products />
      <Backdrop
        showBackdrop={showBackdrop}
        hideBackdropHandaler={hideBackdropHandaler}
      />
    </section>
  );
};

export default Main;
