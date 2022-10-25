import { useEffect, useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Bookmarks from "./pages/Bookmarks";
import Cards from "./pages/Cards";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import { cardList } from "./db";

function App() {
  const [page, setPage] = useState(() => {
    return localStorage.getItem("currentPage") ?? "home";
  });
  const [cards, setCards] = useState(() => {
    return JSON.parse(localStorage.getItem("yourCards")) ?? cardList;
  });

  useEffect(() => {
    localStorage.setItem("yourCards", JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem("currentPage", page);
  }, [page]);

  function appendCard(question, answer, tag) {
    setCards((oldCards) => {
      const newCards = [
        ...oldCards,
        {
          id: oldCards[oldCards.length - 1].id + 1,
          question: question,
          answer: answer,
          tags: [...tag],
          isBookmarked: false,
        },
      ];
      return newCards;
    });
  }

  function deleteCard(cardId) {
    setCards((oldCards) => {
      const newCards = oldCards.filter((card) => card.id !== cardId);
      return newCards;
    });
  }

  function toggleBookmark(cardId) {
    setCards((oldCards) => {
      const newCards = oldCards.map((card) => {
        if (card.id === cardId && card.isBookmarked === true) {
          return { ...card, isBookmarked: false };
        } else if (card.id === cardId && card.isBookmarked === false) {
          return { ...card, isBookmarked: true };
        } else return card;
      });
      return newCards;
    });
  }

  return (
    <div className="App">
      <Header />
      <main>
        {page === "home" && <Cards cards={cards} deleteCard={deleteCard} toggleBookmark={toggleBookmark} />}
        {page === "bookmarks" && <Bookmarks cards={cards} toggleBookmark={toggleBookmark} />}
        {page === "create" && <Create createQuestion={appendCard} setPage={setPage} />}
        {page === "profile" && <Profile />}
      </main>
      <NavBar currentPage={page} navigateTo={setPage} />
    </div>
  );
}

export default App;
