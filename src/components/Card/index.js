import "./Card.css";
import Button from "../Button";
import Question from "../Question";
import Answer from "../Answer";
import TagList from "../TagList";
import Bookmark from "../Bookmark";
import { useState } from "react";
import Delete from "../Delete";

function Card({ cardDetails, deleteCard, toggleBookmark }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <li className="card-list__item">
      <article className="card">
        <Question content={cardDetails.question} />
        <Button onClick={() => (showAnswer ? setShowAnswer(false) : setShowAnswer(true))} />
        <Answer content={cardDetails.answer} showAnswer={showAnswer} />
        <TagList tags={cardDetails.tags} />
        <Bookmark isBookmarked={cardDetails.isBookmarked} toggleBookmark={toggleBookmark} cardId={cardDetails.id} />
        <Delete cardId={cardDetails.id} deleteCard={deleteCard} />
      </article>
    </li>
  );
}

export default Card;
