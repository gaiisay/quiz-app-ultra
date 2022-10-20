import NavItem from "../NavItem";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <NavItem />
        <NavItem />
        <NavItem />
      </ul>
    </nav>
  );
}

export default NavBar;
