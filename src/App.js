import Card from "./components/Card";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Header content="Quiz-App" />
      <main>
        <ul className="card-list">
          <Card
            question='Which former US president was nicknamed "Teddy" after he
              refused to shoot a defenseless black bear?'
            answer="Theodore Roosevelt"
            tag="#teddybear"
          />
          <Card
            question="Daniel Radcliffe became a global star in the film industry due to
              his performance in which film franchise?"
            answer="Harry Potter"
            tag="#danielradcliffe"
          />
          <Card
            question="In the Kingdom Heart series who provides the english voice for
              Master Eraqus?"
            answer="Mark Hamill"
            tag="#kingdomheart"
          />
        </ul>
      </main>
      <NavBar />
    </div>
  );
}

export default App;
