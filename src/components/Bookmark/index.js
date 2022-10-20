import "./Bookmark.css";

function Bookmark() {
  return (
    <div className="card__button-bookmark">
      <button className="bookmark" aria-label="bookmark" type="button">
        <svg className="bookmark__icon" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
          <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
        </svg>
      </button>
    </div>
  );
}

export default Bookmark;
