import React, { useState } from "react";
import {
  AuthContainer,
  AuthForm,
  AuthText,
  AuthInput,
  SignBtn,
} from "../components/Auth/Auth.styled";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";

const SignUp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (id.length < 4 || id.length > 8) {
      alert("아이디는 4~12글자 이내로만 가능합니다!!");
      return;
    }

    if (password.length < 4 || password.length > 8) {
      alert("비밀번호는 4~12글자 이내로만 가능합니다!!");
      return;
    }

    if (nickname.length < 4 || nickname.length > 8) {
      alert("닉네임은 4~8글자 이내로만 가능합니다!!");
      return;
    }

    const response = await register({
      id: id,
      password: password,
      nickname: nickname,
    });
    if (response) {
      confirm("회원가입이 완료되었습니다!!");
      navigate("/login");
    }
  };

  return (
    <AuthContainer>
      <AuthForm onSubmit={handleSignUp}>
        <AuthText>SignUp</AuthText>
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
        <AuthInput
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임"
        />
        <SignBtn type="submit">회원가입</SignBtn>
      </AuthForm>
    </AuthContainer>
  );
};

export default SignUp;
