import React, { useContext } from "react";
import {
  HeaderContainer,
  HeaderInContainer,
  LeftContainer,
  RightContainer,
  HeaderHome,
  HeaderText,
  HeaderBtn,
} from "./Header.styled";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {};

  // 현재 위치가 로그인 페이지 or 회원가입 페이지인지 확인
  const isLogin = location.pathname === "/login";
  const isSignup = location.pathname === "/signup";

  // 로그인 페이지이거나, 회원가입 페이지인 경우, 헤더를 렌더링하지 않음
  if (isLogin || isSignup) return null;

  return (
    <HeaderContainer>
      <HeaderInContainer>
        <LeftContainer>
          <HeaderHome to={"/home"}>HOME</HeaderHome>
          <HeaderText to={"/mypage"}>내 프로필</HeaderText>
        </LeftContainer>
        <RightContainer>
          <HeaderText to={"/mypage"}>유저 이름</HeaderText>
          <HeaderBtn onClick={() => navigate("/login")}>로그인</HeaderBtn>
        </RightContainer>
      </HeaderInContainer>
    </HeaderContainer>
  );
};

export default Header;
