import React from "react";
import {
  HeaderContainer,
  HeaderInContainer,
  LeftContainer,
  RightContainer,
  HeaderHome,
  HeaderText,
  HeaderBtn,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInContainer>
        <LeftContainer>
          <HeaderHome>HOME</HeaderHome>
          <HeaderText>내 프로필</HeaderText>
        </LeftContainer>
        <RightContainer>
          <HeaderText>유저이름</HeaderText>
          <HeaderBtn>로그인</HeaderBtn>
        </RightContainer>
      </HeaderInContainer>
    </HeaderContainer>
  );
};

export default Header;
