import "./NavItem.css";

function NavItem({ children, active }) {
  return (
    <li
      className={
        active ? "navigation__list-item navigation__list-item--active" : "navigation__list-item"
      }
    >
      <a className="navigation__link" href="/index.html" aria-label="go to home page">
        {children}
      </a>
    </li>
  );
}

export default NavItem;
