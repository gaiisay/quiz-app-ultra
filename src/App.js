import Card from "./components/Card";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

const cards = [
  {
    id: 1,
    question:
      'Which former US president was nicknamed "Teddy" after he refused to shoot a defenseless black bear?',
    answer: "Theodore Roosevelt",
    tags: ["#usa", "#president", "#teddybear"],
  },
  {
    id: 2,
    question:
      "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    answer: "Harry Potter",
    tags: ["#danielradcliffe", "#hewhomustnotbenamed", "#abracadabra"],
  },
  {
    id: 3,
    question: "In the Kingdom Heart series who provides the english voice for Master Eraqus?",
    answer: "Mark Hamill",
    tags: ["#kingdomheart", "#mastereraqus", "#english voices"],
  },
];

function App() {
  return (
    <div className="App">
      <Header content="Quiz-App" />
      <main>
        <ul className="card-list">
          {cards.map((card) => {
            return <Card key={card.id} cardDetails={card} />;
          })}
        </ul>
      </main>
      <NavBar />
    </div>
  );
}

export default App;
