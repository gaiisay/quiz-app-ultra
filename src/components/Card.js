import styled from "styled-components";

import TagList from "./TagList";
import Bookmark from "./Bookmark";
import { useState } from "react";
import Delete from "./Delete";

function Card({ cardDetails, deleteCard, toggleBookmark }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <StyledCardListItem>
      <StyledCard>
        <StyledQuestion>{cardDetails.question}</StyledQuestion>
        <StyledButton onClick={() => (showAnswer ? setShowAnswer(false) : setShowAnswer(true))}>
          Show Answer
        </StyledButton>
        <StyledAnswer showAnswer={showAnswer}>{cardDetails.answer}</StyledAnswer>
        <TagList tags={cardDetails.tags} />
        <Bookmark isBookmarked={cardDetails.isBookmarked} toggleBookmark={toggleBookmark} cardId={cardDetails.id} />
        <Delete cardId={cardDetails.id} deleteCard={deleteCard} />
      </StyledCard>
    </StyledCardListItem>
  );
}

const StyledCardListItem = styled.li`
  margin: 0 0 4rem;
`;

const StyledCard = styled.article`
  border: 1px solid var(--black);
  padding: 2rem;
  text-align: center;
  position: relative;
`;
const StyledAnswer = styled.p`
  margin: 0 2rem;
  font-style: italic;
  display: ${({ showAnswer }) => (showAnswer ? "block" : "none")};
`;

const StyledQuestion = styled.h2`
  margin: 0 0 2rem;
`;

const StyledButton = styled.button`
  background: var(--secondary);
  color: var(--white);
  border: none;
  display: block;
  margin: 0 auto 2rem auto;
  padding: 1rem;

  &:hover {
    opacity: 0.75;
    cursor: pointer;
  }
`;

export default Card;
