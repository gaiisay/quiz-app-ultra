import "./NavItem.css";

function NavItem({ children, active }) {
  if (active) {
    return (
      <li className="navigation__list-item navigation__list-item--active">
        <a className="navigation__link" href="/index.html" aria-label="go to home page">
          {children}
        </a>
      </li>
    );
  } else {
    return (
      <li className="navigation__list-item">
        <a className="navigation__link" href="/index.html" aria-label="go to home page">
          {children}
        </a>
      </li>
    );
  }
}

export default NavItem;
