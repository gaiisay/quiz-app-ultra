import styled from "styled-components";

function TagList({ tags }) {
  return (
    <StyledTagList className="card__tag-list">
      {tags.map((tag, index) => (
        <StyledTag key={tag + index}>{tag}</StyledTag>
      ))}
    </StyledTagList>
  );
}

const StyledTagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 20px;
`;
const StyledTag = styled.li`
  background-color: var(--secondary);
  color: var(--white);
  border-radius: 4px;
  padding: 0 5px;
`;

export default TagList;
