import "./Card.css";
import Button from "../Button";
import Question from "../Question";
import Answer from "../Answer";
import TagList from "../TagList";
import Bookmark from "../Bookmark";

function Card() {
  return (
    <li className="card-list__item">
      <article className="card">
        <Question />
        <Button />
        <Answer />
        <TagList />
        <Bookmark />
      </article>
    </li>
  );
}

export default Card;
