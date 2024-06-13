import React, { useState } from "react";
import {
  AuthContainer,
  AuthForm,
  AuthText,
  AuthInput,
  LoginBtn,
} from "../components/Auth/Auth.styled";
import { updateProfile } from "../api/auth";
import { useNavigate } from "react-router-dom";

const MyPage = ({ user, setUser }) => {
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null); // Corrected spelling
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nickname", nickname);
    if (avatar) {
      formData.append("avatar", avatar); // Corrected spelling
    }

    try {
      const response = await updateProfile(formData);

      if (response.success) {
        // Corrected spelling
        setUser({
          ...user,
          nickname: response.nickname,
          avatar: response.avatar, // Corrected spelling
        });
        navigate("/");
      } else {
        console.error("프로필 업데이트 실패", response);
      }
    } catch (error) {
      console.error("프로필 업데이트 중 오류 발생", error);
    }
  };

  return (
    <AuthContainer>
      <AuthForm onSubmit={handleUpdate}>
        <AuthText>프로필 수정</AuthText>
        <AuthInput
          type="text"
          placeholder="닉네임 수정"
          minLength="1"
          maxLength="10"
          onChange={(e) => setNickname(e.target.value)}
        />
        <AuthInput
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])} // Get the file object
        />
        <LoginBtn type="submit">프로필 업데이트</LoginBtn>
      </AuthForm>
    </AuthContainer>
  );
};

export default MyPage;
