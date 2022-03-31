import styled from "styled-components";
import { DeleteOutline } from "@material-ui/icons";


export const TheList = styled.div`
    flex: 4;
`
export const ListItem = styled.div`
    display: flex;
    align-items: center;
`
export const ListImage = styled.img`
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1rem;
`
export const EditButton = styled.button`
    border: none;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    background-color: ${props => props.primary ? "DarkMagenta" : "SeaGreen"};
    color: white;
    cursor: pointer;
    margin-right: 2rem;
`
export const MyDeleteOutline = styled(DeleteOutline)`
    color: red;
    cursor: pointer;
`