import React from "react";
import {
  AuthContainer,
  AuthForm,
  AuthText,
  AuthInput,
  LoginBtn,
} from "../components/Auth/Auth.styled";

const MyPage = () => {
  return (
    <AuthContainer>
      <AuthForm>
        <AuthText>프로필 수정</AuthText>
        <AuthInput type="text" placeholder="닉네임 수정" />
        <AuthInput type="file" />
        <LoginBtn>프로필 업데이트</LoginBtn>
      </AuthForm>
    </AuthContainer>
  );
};

export default MyPage;
