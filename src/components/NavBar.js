/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";

function NavBar({ currentPage, navigateTo }) {
  return (
    <StyledNav>
      <StyledNavList>
        <StyledNavListItem currentPage={currentPage} name="home">
          <StyledNavButton onClick={() => navigateTo("home")}>
            <svg viewBox="0 0 24 24">
              <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
            </svg>
          </StyledNavButton>
        </StyledNavListItem>
        <StyledNavListItem currentPage={currentPage} name="bookmarks">
          <StyledNavButton onClick={() => navigateTo("bookmarks")}>
            <svg viewBox="0 0 24 24">
              <path d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
            </svg>
          </StyledNavButton>
        </StyledNavListItem>
        <StyledNavListItem currentPage={currentPage} name="create">
          <StyledNavButton onClick={() => navigateTo("create")}>
            <svg viewBox="0 0 24 24">
              <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
          </StyledNavButton>
        </StyledNavListItem>
        <StyledNavListItem currentPage={currentPage} name="profile">
          <StyledNavButton onClick={() => navigateTo("profile")}>
            <svg viewBox="0 0 24 24">
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
            </svg>
          </StyledNavButton>
        </StyledNavListItem>
      </StyledNavList>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background: var(--primary);
  border-top: 1px solid var(--black);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;
const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const StyledNavListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;

  background-color: ${({ currentPage, name }) => (currentPage === name ? "var(--secondary-light)" : null)};

  &:not(:first-child) {
    border-left: 1px solid var(--black);
  }
`;
const StyledNavButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1em;
  padding: 1.5em 0.5em;
  width: 100%;
  height: 100%;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  svg {
    height: 1.5em;
    width: 1.5em;
  }
`;

export default NavBar;
