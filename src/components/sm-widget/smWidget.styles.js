import styled from 'styled-components';

export const SmWidgetContainer = styled.div`
  flex: 1;
  box-shadow: 0px 0px 1.5rem -1rem rgba(0, 0, 0, 0.75);
  padding: 2rem;
  margin-right: 2rem;
`;

export const SmWidgetTitle = styled.span`
  font-size: 2.2rem;
  font-weight: 600;
`;

export const SmWidgetImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const SmWidgetList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  .SmWidgetListItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0rem;
  }
`;

export const SmWidgetUser = styled.div`
  display: flex;
  flex-direction: column;
  .SmWidgetUsername {
    font-weight: 600;
  }
  .SmWidgetUserTitle {
    font-weight: 300;
  }
`;


export const SmWidgetButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 1rem;
  padding: 0.7rem 1rem;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
  .SmWidgetIcon {
    font-size: 1.6rem !important;
    margin-right: 0.5rem;
  }
`;
