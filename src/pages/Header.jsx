import Navbar from "../components/Navbar";
import Summary from "../components/Summary";

const Header = ({ showBackdropHandaler }) => {
  return (
    <section className='header'>
      <Navbar showBackdropHandaler={showBackdropHandaler} />
      <Summary />
    </section>
  );
};

export default Header;
