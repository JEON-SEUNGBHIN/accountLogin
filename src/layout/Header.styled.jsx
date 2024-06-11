import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #ff5500;
  margin-bottom: 3rem;
  padding: 1.5rem;
  justify-content: center;
`;

export const HeaderInContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderHome = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin-right: 5rem;
`;

export const HeaderText = styled.h4`
  color: white;
  font-size: 1.2rem;
`

export const HeaderBtn = styled.button`
  margin-left: 2.5rem;
  padding: 0.5rem 1.5rem;
  background-color: #ff6a00;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  font-weight: 900;
  cursor: pointer;
`;