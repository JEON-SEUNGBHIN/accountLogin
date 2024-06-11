import React from 'react'
import { AuthContainer, AuthInContanier, AuthText, AuthInput, LoginBtn } from '../components/Auth/Auth.styled';

const MyPage = () => {
  return (
    <AuthContainer>
      <AuthInContanier>
        <AuthText>프로필 수정</AuthText>
        <AuthInput type="text" placeholder="닉네임 수정" />
        <AuthInput type="file"/>
        <LoginBtn>프로필 업데이트</LoginBtn>
      </AuthInContanier>
    </AuthContainer>
  );
}

export default MyPage