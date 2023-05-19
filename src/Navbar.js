const Navbar = () => {
  return (
    <div className="navbar">
      <h1> Its Mango Season </h1>
      <nav className="links">
        <a className="about" href="/">
          About
        </a>
        <a className="price" href="/Price">
          Price
        </a>
      </nav>
    </div>
  );
};
export default Navbar;
