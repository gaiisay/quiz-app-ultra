import "./Button.css";

function Button({ onClick }) {
  return (
    <button className="card__button-answer" type="button" onClick={onClick}>
      Show answer
    </button>
  );
}

export default Button;
