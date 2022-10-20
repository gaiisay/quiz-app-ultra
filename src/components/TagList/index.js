import "./TagList.css";

import Tag from "../Tag";

function TagList() {
  return (
    <ul className="card__tag-list">
      <Tag />
      <Tag />
      <Tag />
    </ul>
  );
}

export default TagList;
