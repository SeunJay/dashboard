import React from 'react';

import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarTitle,
  SidebarList,
  SidebarListItem,
  MyLineStyle,
  MyTimeline,
  MyTrendingUp,
  MyPermIdentity,
  MyStorefront,
  MyAssessment,
  MyLocalAtm,
  MyDrafts,
  MyFeedback,
  MyForum,
  MyWork,
  MyPieChart,
  MyReceipt,
} from './sidebar.styles.js';

const SideBar = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <MyLineStyle />
              Home
            </SidebarListItem>
            <SidebarListItem>
              <MyTimeline />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <MyTrendingUp />
              Sales
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>

        <SidebarMenu>
          <SidebarTitle>All Menu</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <MyPermIdentity />
              Users
            </SidebarListItem>
            <SidebarListItem>
              <MyStorefront />
              Products
            </SidebarListItem>
            <SidebarListItem>
              <MyAssessment />
              Reports
            </SidebarListItem>
            <SidebarListItem>
              <MyLocalAtm />
              Transactions
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>

        <SidebarMenu>
          <SidebarTitle>Connect</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <MyDrafts />
              Mail
            </SidebarListItem>
            <SidebarListItem>
              <MyFeedback />
              Feedback
            </SidebarListItem>
            <SidebarListItem>
              <MyForum />
              Messages
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Employees</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <MyWork />
              Manage
            </SidebarListItem>
            <SidebarListItem>
              <MyPieChart />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <MyReceipt />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
