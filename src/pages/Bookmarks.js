import Card from "../components/Card";

function Bookmarks({ cards }) {
  return (
    <ul className="card-list">
      {cards.map((card) => {
        return card.isBookmarked && <Card key={card.id} cardDetails={card} />;
      })}
    </ul>
  );
}

export default Bookmarks;
