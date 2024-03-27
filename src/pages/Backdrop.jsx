import CartList from "../components/CartList";

const Backdrop = ({ showBackdrop, hideBackdropHandaler }) => {
  return (
    <>
      {showBackdrop && (
        <section className='backdrop'>
          <CartList hideBackdropHandaler={hideBackdropHandaler} />
        </section>
      )}
    </>
  );
};

export default Backdrop;
