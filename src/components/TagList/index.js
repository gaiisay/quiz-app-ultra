import "./TagList.css";

import Tag from "../Tag";

function TagList({ content }) {
  return (
    <ul className="card__tag-list">
      <Tag content={content} />
    </ul>
  );
}

export default TagList;
