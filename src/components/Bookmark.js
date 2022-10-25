import styled from "styled-components";

function Bookmark({ isBookmarked, cardId, toggleBookmark }) {
  return (
    <StyledBookmarkWrapper>
      <StyledBookmarkButton
        isBookmarked={isBookmarked}
        aria-label="bookmark"
        onClick={() => {
          toggleBookmark(cardId);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
        </svg>
      </StyledBookmarkButton>
    </StyledBookmarkWrapper>
  );
}

const StyledBookmarkWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: -1.5rem;
`;
const StyledBookmarkButton = styled.button`
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--secondary);
  color: ${({ isBookmarked }) => (isBookmarked ? "var(--black)" : "var(--white)")};

  &:hover {
    cursor: pointer;
  }

  svg {
    fill: currentcolor;
    width: 2em;
  }
`;

export default Bookmark;
