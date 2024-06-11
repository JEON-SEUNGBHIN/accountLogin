import React from "react";
import {
  AuthContainer,
  AuthInContanier,
  AuthText,
  AuthInput,
  LoginBtn,
  SignBtn,
} from "../components/Auth/Auth.styled";

const SignUp = () => {
  return (
    <AuthContainer>
      <AuthInContanier>
        <AuthText>SignUp</AuthText>
        <AuthInput type="text" placeholder="아이디" />
        <AuthInput type="password" placeholder="비밀번호" />
        <AuthInput type="text" placeholder="닉네임"/>
        <SignBtn>회원가입</SignBtn>
      </AuthInContanier>
    </AuthContainer>
  );
};

export default SignUp;
