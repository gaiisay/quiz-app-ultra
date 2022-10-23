import Card from "../components/Card";

function Cards({ cards, deleteCard, toggleBookmark }) {
  return (
    <ul className="card-list">
      {cards.map((card) => {
        return <Card key={card.id} cardDetails={card} deleteCard={deleteCard} toggleBookmark={toggleBookmark} />;
      })}
    </ul>
  );
}

export default Cards;
