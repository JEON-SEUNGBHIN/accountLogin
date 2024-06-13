import React, { useContext, useEffect } from "react";
import {
  HeaderContainer,
  HeaderInContainer,
  LeftContainer,
  RightContainer,
  HeaderHome,
  HeaderText,
  HeaderBtn,
  HeaderAvator,
} from "./Header.styled";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ user }) => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  if (!isAuthenticated) return null;

  return (
    <HeaderContainer>
      <HeaderInContainer>
        <LeftContainer>
          <HeaderHome to={"/home"}>HOME</HeaderHome>
          <HeaderText to={"/mypage"}>내 프로필</HeaderText>
        </LeftContainer>
        <RightContainer>
          {user && (
            <>
              <HeaderAvator src={user.avatar} alt="avatar" />
              <HeaderText to={"/mypage"}>{user.nickname}</HeaderText>
            </>
          )}
          <HeaderBtn onClick={logout}>로그아웃</HeaderBtn>
        </RightContainer>
      </HeaderInContainer>
    </HeaderContainer>
  );
};

export default Header;
