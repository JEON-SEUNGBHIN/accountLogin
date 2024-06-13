import styled from "styled-components";

export const UpdateFormStyle = styled.form`
  width: 60%;
  background-color: white;
  padding: 3rem;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
`;

export const UpdateInputStyle = styled.input`
  margin: 1rem 0;
  padding: 0.5rem;
  border: 1px solid #b4b4b4;
  border-radius: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const UpdateBtnStyle = styled.button`
  background-color: #ff5100;
  color: white;
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export const UpdateBtnStyleDelete = styled(UpdateBtnStyle)`
  background-color: red;
`;

export const UpdateBtnStyleBack = styled(UpdateBtnStyle)`
  background-color: gray;
`;
