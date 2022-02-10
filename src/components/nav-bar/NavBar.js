import React from 'react';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

import {
  NavBarContainer,
  NavBarWrapper,
  Logo,
  TopLeft,
  TopRight,
  IconContainer,
  IconBadge,
  Avatar,
} from './navbar.styles';

const NavBar = () => {
  const randNum = () => Math.floor(Math.random() * 99) + 1;
  return (
    <NavBarContainer>
      <NavBarWrapper>
        <TopLeft>
          <Logo>Logo</Logo>
        </TopLeft>

        <TopRight>
          <IconContainer>
            <NotificationsNone />
            <IconBadge>2</IconBadge>
          </IconContainer>

          <IconContainer>
            <Language />
            <IconBadge>3</IconBadge>
          </IconContainer>

          <IconContainer>
            <Settings />
          </IconContainer>

          <Avatar
            src={`https://randomuser.me/api/portraits/men/${randNum()}.jpg`}
            alt='avatar'
          />
        </TopRight>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
