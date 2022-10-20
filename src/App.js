import Card from "./components/Card";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Header content="Quiz-App" />
      <main>
        <ul className="card-list">
          <Card />
          <Card />
          <Card />
        </ul>
      </main>
      <NavBar />
    </div>
  );
}

export default App;
