import Card from "../components/Card";

function Cards({ cards }) {
  return (
    <ul className="card-list">
      {cards.map((card) => {
        return <Card key={card.id} cardDetails={card} />;
      })}
    </ul>
  );
}

export default Cards;
