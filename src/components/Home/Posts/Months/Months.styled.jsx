import styled from "styled-components";

export const BoxStyle = styled.div`
  width: 100%;
  padding: 0.5rem;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MonthBox = styled.div`
  margin: 0.2rem;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: ${({ isSelected }) => (isSelected ? "#fcba77" : "#ededed")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  padding: 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #fcba77;
    color: white;

  }
`;