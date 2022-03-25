import styled from 'styled-components';


export const LgWidgetContainer = styled.div`
flex: 2;
-webkit-box-shadow: 0rem 0rem 1.5rem -1rem rgba(0, 0, 0, 0.75);
box-shadow: 0rem 0rem 1.5rem -1rem rgba(0, 0, 0, 0.75);
padding: 2rem;
`


export const LgWidgetTitle = styled.h3`
font-size: 2.2rem;
font-weight: 600;
`


export const LgWidgetButton = styled.button`
padding: 0.5rem 0.7rem;
border: none;
border-radius: 1rem;
background-color:${props => props.bgColor || "#ebf1fe"};
color:${props => props.fdColor || "#2a7ade"};
`


export const LgWidgetTable = styled.table`
width: 100%;
border-spacing: 2rem;
`


export const LgWidgetTh = styled.th`
text-align: left;
`


export const LgWidgetUser = styled.td`
display: flex;
align-items: center;
font-weight: 600;
`

export const LgWidgetImg = styled.img`
width: 4rem;
height: 4rem;
border-radius: 50%;
object-fit: cover;
margin-right: 1rem;
`


export const LightTd = styled.td`
font-weight: 300;
`
