import "./Card.css";
import Button from "../Button";
import Question from "../Question";
import Answer from "../Answer";
import TagList from "../TagList";
import Bookmark from "../Bookmark";
import { useState } from "react";

function Card({ question, answer, tag }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <li className="card-list__item">
      <article className="card">
        <Question content={question} />
        <Button onClick={() => (showAnswer ? setShowAnswer(false) : setShowAnswer(true))} />
        <Answer content={answer} showAnswer={showAnswer} />
        <TagList content={tag} />
        <Bookmark />
      </article>
    </li>
  );
}

export default Card;
