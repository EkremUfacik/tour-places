import NavbarStle from "./navbar.module.css";

const Navbar = () => {
  return (
    <ul className={NavbarStle.navbar}>
      <li>ABOUT US</li>
      <li>FOR YOU</li>
      <li>SERVICES</li>
      <li>BLOG</li>
      <li>CONTACT</li>
    </ul>
  );
};

export default Navbar;
