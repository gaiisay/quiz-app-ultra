import "./Header.css";

function Header({ content }) {
  return (
    <header className="header">
      <h1 className="header__title">{content}</h1>
    </header>
  );
}

export default Header;
