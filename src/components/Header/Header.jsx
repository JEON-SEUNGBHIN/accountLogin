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
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      logout();
      navigate("/");
    }
  };

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
          {isAuthenticated && <HeaderText to={"/mypage"}>내 프로필</HeaderText>}
        </LeftContainer>
        <RightContainer>
          {isAuthenticated ? (
            <>
              <HeaderText>유저이름</HeaderText>
              <HeaderBtn onClick={handleLogout}>로그아웃</HeaderBtn>
            </>
          ) : (
            <>
              <HeaderBtn onClick={() => navigate("/login")}>로그인</HeaderBtn>
            </>
          )}
        </RightContainer>
      </HeaderInContainer>
    </HeaderContainer>
  );
};

export default Header;
