import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Cards from "./pages/Cards";

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
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <Header content="Quiz-App" />
      <main>{page === "home" && <Cards cards={cards} />}</main>
      <NavBar currentPage={page} navigateTo={setPage} />
    </div>
  );
}

export default App;
