import "./Card.css";
import Button from "../Button";
import Question from "../Question";
import Answer from "../Answer";
import TagList from "../TagList";
import Bookmark from "../Bookmark";

function Card() {
  return (
    <article className="card">
      <Question />
      <Button />
      <Answer />
      <TagList />
      <Bookmark />
    </article>
  );
}

export default Card;
