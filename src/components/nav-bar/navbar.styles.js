import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  width: 100%;
  height: 5rem;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavBarWrapper = styled.div`
  height: 100%;
  padding: 2rem 2rem;
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
`;

export const Logo = styled.span`
  font-weight: bold;
  font-size: 3rem;
  color: maroon;
  cursor: pointer;
`;

export const TopLeft = styled.div``;

export const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 1rem;
  color: #555;
`;

export const IconBadge = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 0.5rem;
  right: 0px;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

export const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  cursor: pointer;
`;
