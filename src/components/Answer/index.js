import "./Answer.css";

function Answer({ content, showAnswer }) {
  return (
    <p className={showAnswer ? "card__answer card__answer--active" : "card__answer"}>{content}</p>
  );
}

export default Answer;
