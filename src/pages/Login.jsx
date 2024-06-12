import React, { useContext, useState } from "react";
import {
  AuthContainer,
  AuthForm,
  AuthText,
  AuthInput,
  LoginBtn,
  SignBtn,
} from "../components/Auth/Auth.styled";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../api/auth";

const Login = ({ setUser }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    e.preventDefault();
    const { userId, nickname, avatar } = await login({
      id: id,
      password: password,
    });

    setUser({ userId, nickname, avatar });
  };

  return (
    <AuthContainer>
      <AuthForm onSubmit={handleLogin}>
        <AuthText>LOGIN</AuthText>
        <AuthInput
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디"
        />
        <AuthInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        <LoginBtn type="submit">로그인</LoginBtn>
        <Link to={"/signup"}>
          <SignBtn>회원가입</SignBtn>
        </Link>
      </AuthForm>
    </AuthContainer>
  );
};
export default Login;
