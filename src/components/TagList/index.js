import "./TagList.css";

import Tag from "../Tag";

function TagList({ tags }) {
  return (
    <ul className="card__tag-list">
      {tags.map((tag, index) => (
        <Tag key={index} content={tag} />
      ))}
    </ul>
  );
}

export default TagList;
