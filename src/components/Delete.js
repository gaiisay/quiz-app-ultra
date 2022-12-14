import styled from "styled-components";

function Delete({ cardId, deleteCard }) {
  return (
    <StyledDeleteWrapper>
      <StyledDeleteButton aria-label="delete" onClick={() => deleteCard(cardId)}>
        <svg viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6H17V19C17 19.5304 16.7891 20.0391 16.4141 20.4142C16.039 20.7893 15.5304 21 15 21H5C4.46957 21 3.96077 20.7893 3.58569 20.4142C3.21062 20.0391 3 19.5304 3 19V6Z" />
          <path d="M0 6H3.6499C4.0476 5.99919 4.43609 5.87988 4.76562 5.65723C5.09516 5.43457 5.35086 5.11868 5.5 4.75L6.5 2.26001C6.64757 1.88946 6.90252 1.57145 7.23218 1.34692C7.56184 1.1224 7.951 1.00161 8.34985 1H11.6499C12.0488 1.00161 12.4379 1.1224 12.7676 1.34692C13.0972 1.57145 13.3524 1.88946 13.5 2.26001L14.5 4.75C14.6498 5.12026 14.9068 5.43725 15.2383 5.66003C15.5698 5.88282 15.9605 6.00119 16.3599 6H20" />
          <path d="M13.4999 10L6.49988 17" />
          <path d="M13.4999 17L6.49988 10" />
        </svg>
      </StyledDeleteButton>
    </StyledDeleteWrapper>
  );
}

const StyledDeleteWrapper = styled.div`
  position: absolute;
  left: 1rem;
  top: -1.5rem;
`;
const StyledDeleteButton = styled.button`
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--secondary-light);
  color: var(--white);

  &:hover {
    cursor: pointer;
  }

  svg {
    fill: var(--white);
    stroke: var(--secondary);
    stroke-width: 1.4;
    width: 2em;
  }
`;

export default Delete;
