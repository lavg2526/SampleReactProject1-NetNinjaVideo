import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1> Its Mango Season </h1>
      <nav className="links">
        <a className="about" href="/Info">
          Info
        </a>
        <a className="about" href="/About">
          About
        </a>
        <a className="price" href="/Price">
          Price
        </a>
        {/* // we can use Link tag to get data from JS bundle 
        <Link className="about" to="/About">
          About
        </Link>
        <Link className="price" to="/Price">
          Price
        </Link> */}
      </nav>
    </div>
  );
};
export default Navbar;
