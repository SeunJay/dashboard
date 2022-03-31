import styled from 'styled-components';

import { Publish } from '@material-ui/icons';

export const UserContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const ShowUser = styled.div`
  flex: 1;
  padding: 2rem;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const UpdateUser = styled.div`
  flex: 2;
  padding: 2rem;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 2rem;
`;

export const ShowUserTop = styled.div`
  display: flex;
  align-items: center;
`;

export const ShowUserBottom = styled.div`
  margin-top: 2rem;
`;

export const ShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

export const FontWeight = styled.span`
  font-weight: ${(props) => (props.bolder ? '600' : '300')};
`;

export const UserShowTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;

export const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0px;
  color: #444;
  .showIcon {
    font-size: 1.6rem !important;
  }
  .showInfoTitle {
    margin-left: 1rem;
  }
`;

export const UpdateTitle = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
`;

export const UpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const UpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  label {
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
  }
  input {
    border: none;
    width: 25rem;
    height: 3rem;
    border-bottom: 1px solid gray;
  }
`;

export const UpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MyPublish = styled(Publish)`
  cursor: pointer;
`;
