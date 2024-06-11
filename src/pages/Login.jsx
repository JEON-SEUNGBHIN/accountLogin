import React from "react";
import {
  AuthContainer,
  AuthInContanier,
  AuthText,
  AuthInput,
  LoginBtn,
  SignBtn,
} from "../components/Auth/Auth.styled";

const Login = () => {
  return (
    <AuthContainer>
      <AuthInContanier>
        <AuthText>LOGIN</AuthText>
        <AuthInput type="text" placeholder="아이디" />
        <AuthInput type="password" placeholder="비밀번호" />
        <LoginBtn>로그인</LoginBtn>
        <SignBtn>회원가입</SignBtn>
      </AuthInContanier>
    </AuthContainer>
  );
};
export default Login;
