import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const ListContainer = styled.div`
  width: 100%;
`;

export const ListUl = styled.ul`
  width: 100%;
  margin: 0 auto;
`;

export const ListLi = styled.li`
  width: 90%;
  display: flex;
  color: #ff7700;
  justify-content: space-between;
  border: 1px solid lightgray;
  margin: 1rem auto;
  padding: 1rem;
  cursor: pointer;
`;

export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 0.2rem;
`;

export const Content = styled.div`
  flex: 1;
`;

export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: auto;
`;

export const NoSpends = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  color: gray;
`;
