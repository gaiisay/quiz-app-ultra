import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Bookmarks from "./pages/Bookmarks";
import Cards from "./pages/Cards";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import { cards } from "./db";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <Header content="Quiz-App" />
      <main>
        {page === "home" && <Cards cards={cards} />}
        {page === "bookmarks" && <Bookmarks cards={cards} />}
        {page === "create" && <Create />}
        {page === "profile" && <Profile />}
      </main>
      <NavBar currentPage={page} navigateTo={setPage} />
    </div>
  );
}

export default App;
