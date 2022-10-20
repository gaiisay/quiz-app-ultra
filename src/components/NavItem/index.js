import "./NavItem.css";

function NavItem({ children, name, active, onClick }) {
  return (
    <li
      className={
        "navigation__list-item" + (name === active ? " navigation__list-item--active" : "")
      }
    >
      <a className="navigation__link" href="#test" aria-label="go to home page" onClick={onClick}>
        {children}
      </a>
    </li>
  );
}

export default NavItem;
