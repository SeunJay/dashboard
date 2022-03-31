import styled from 'styled-components';

export const UserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const UserItem = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-right: 2rem;
  label {
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: rgb(151, 150, 150);
  }
  input {
    height: 4rem;
    padding: 1rem;
    border: 1px solid gray;
    border-radius: 5px;
  }
  select {
    height: 4rem;
    border-radius: 5px;
  }
`;

export const UserRadio = styled.div`
  input {
    margin-top: 1.5rem;
  }
  label {
    margin: 1rem;
    font-size: 1.8rem;
    color: #555;
  }
`;

export const UserButton = styled.button`
  width: 20rem;
  border: none;
  background-color: #1876f2;
  color: white;
  padding: 0.7rem 1rem;
  font-weight: 600;
  border-radius: 1rem;
  margin-top: 3rem;
  cursor: pointer;
`;
