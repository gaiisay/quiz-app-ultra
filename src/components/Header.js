import styled from "styled-components";

function Header() {
  return (
    <StyledHeader className="header">
      <h1>Quiz-App</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 0;
  background: var(--primary);
  border-bottom: 1px solid var(--black);

  h1 {
    text-align: center;
  }
`;

export default Header;
