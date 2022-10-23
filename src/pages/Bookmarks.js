import Card from "../components/Card";

function Bookmarks({ cards, toggleBookmark }) {
  return (
    <ul className="card-list">
      {cards.map((card) => {
        return card.isBookmarked && <Card key={card.id} cardDetails={card} toggleBookmark={toggleBookmark} />;
      })}
    </ul>
  );
}

export default Bookmarks;
