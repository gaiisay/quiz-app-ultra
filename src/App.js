import Card from "./components/Card";
import NavItem from "./components/NavItem";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <ul className="card-list">
          <Card />
          <Card />
        </ul>
      </main>
      <nav className="navigation">
        <ul className="navigation-list">
          <NavItem />
          <NavItem />
          <NavItem />
        </ul>
      </nav>
    </div>
  );
}

export default App;
