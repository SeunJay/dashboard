import styled from 'styled-components';
import { DeleteOutline } from '@material-ui/icons';

export const TheList = styled.div`
  flex: 4;
`;
export const ListItem = styled.div`
  display: flex;
  align-items: center;
`;
export const ListImage = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;
export const EditButton = styled.button`
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.primary ? 'DarkMagenta' : 'SeaGreen')};
  color: white;
  cursor: pointer;
  margin-right: 2rem;
`;
export const MyDeleteOutline = styled(DeleteOutline)`
  color: red;
  cursor: pointer;
`;



export const ItemContainer = styled.div`
  flex: 4;
  padding: 2rem;
`;


export const ItemTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const ItemAddButton = styled.button`
  width: 8rem;
  border: none;
  padding: 0.5rem;
  background-color: indigo;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
  font-size: 1.6rem;
  text-transform: uppercase;
`;

export const ItemShowImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${(props) => (props.mr ? '2rem' : '0px')};
`;


export const ItemUploadImg = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
  object-fit: cover;
  margin-right: 2rem;
`;


export const ItemUpdateButton = styled.button`
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  background-color: midnightblue;
  color: white;
  font-weight: 600;
`;


export const ItemUpload = styled.div`
  display: flex;
  align-items: center;
`;
