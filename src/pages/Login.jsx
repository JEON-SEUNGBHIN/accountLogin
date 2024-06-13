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
import { loginLogic } from "../api/auth";
import { AuthContext } from "../context/AuthContext";

const Login = ({setUser}) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { accessToken, userId, nickname, avatar } = await loginLogic({
      id: id,
      password: password,
    });
    login(accessToken); // 로그인 함수 호출
    setUser({ userId, nickname, avatar }); // 사용자 정보 설정
    navigate("/"); // 홈페이지로 이동
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
