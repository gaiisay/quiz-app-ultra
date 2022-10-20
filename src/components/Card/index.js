import "./Card.css";
import Button from "../Button";
import Question from "../Question";
import Answer from "../Answer";
import TagList from "../TagList";
import Bookmark from "../Bookmark";

function Card({ question, answer, tag }) {
  return (
    <li className="card-list__item">
      <article className="card">
        <Question content={question} />
        <Button />
        <Answer content={answer} />
        <TagList content={tag} />
        <Bookmark />
      </article>
    </li>
  );
}

export default Card;
