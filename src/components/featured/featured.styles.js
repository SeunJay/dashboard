import styled from 'styled-components';

export const FeaturedContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FeaturedItem = styled.div`
  flex: 1;
  margin: 0 2rem;
  padding: 3rem;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: 0 0 1.5rem -1rem rgba(0, 0, 0, 0.75);
`;  

export const FeaturedTitle = styled.span`
  font-size: 2rem;
`;

export const FeaturedMoneyContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  .featuredMoney {
    font-size: 3rem;
    font-weight: 600;
  }
  .featuredMoneyRate {
    display: flex;
    align-items: center;
    margin-left: 2rem;
  }
  .featuredIcon {
    font-size: 1.4rem;
    margin-left: 0.5rem;
    color: green;
  }
  .featuredIcon.negative {
    color: red;
  }
`;

export const FeaturedSub = styled.span`
  font-size: 1.5rem;
  color: gray;
`;
