import styled, { css } from 'styled-components';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  LocalAtm,
  Assessment,
  Drafts,
  Feedback,
  Forum,
  Work,
  Receipt,
  PieChart,
} from '@material-ui/icons';

export const SidebarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 5rem);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 5rem;
`;

export const SidebarWrapper = styled.div`
  padding: 2rem;
  color: #555;
`;

export const SidebarMenu = styled.div`
  margin-bottom: 1rem;
  border: 1px solid red;
`;

export const SidebarTitle = styled.h3`
  font-size: 1.3rem;
  color: rgb(187, 186, 186);
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0.5rem;
`;

export const SidebarListItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 1rem;

  &:hover {
    background-color: rgb(240, 240, 255);
  }
`;

const sharedStyle = css`
  margin-right: 0.5rem;
  font-size: 2rem !important;
`;

export const MyLineStyle = styled(LineStyle)`
  ${sharedStyle}
`;

export const MyTimeline = styled(Timeline)`
  ${sharedStyle}
`;

export const MyTrendingUp = styled(TrendingUp)`
  ${sharedStyle}
`;

export const MyPermIdentity = styled(PermIdentity)`
  ${sharedStyle}
`;

export const MyStorefront = styled(Storefront)`
  ${sharedStyle}
`;

export const MyAssessment = styled(Assessment)`
  ${sharedStyle}
`;

export const MyLocalAtm = styled(LocalAtm)`
  ${sharedStyle}
`;

export const MyDrafts = styled(Drafts)`
  ${sharedStyle}
`;

export const MyFeedback = styled(Feedback)`
  ${sharedStyle}
`;

export const MyForum = styled(Forum)`
  ${sharedStyle}
`;
export const MyWork = styled(Work)`
  ${sharedStyle}
`;
export const MyPieChart = styled(PieChart)`
  ${sharedStyle}
`;
export const MyReceipt = styled(Receipt)`
  ${sharedStyle}
`;
