import React, { useState } from "react";
import {
  StyledForm,
  StyledFormGroup,
  StyledInput,
  StyledBtn,
} from "./PostForm.styled";
import { v4 as uuidv4 } from "uuid";
import { postSpends } from "../../../../api/spend";
import { useMutation } from "@tanstack/react-query";

// 지출 기록을 추가하는 폼을 나타내는 컴포넌트
export const PostForm = ({ user }) => {
  // 입력 필드에 대한 상태 관리.
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [content, setContent] = useState("");

  const mutation = useMutation({ mutationFn: postSpends });

  // 지출을 추가하는 함수.
  const addSpends = (e) => {
    e.preventDefault();
    if (!date || !category || !amount || !content) {
      alert("항목을 모두 채워주세요!!");
      return;
    }

    // 새로운 지출 기록을 생성
    const newSpend = {
      id: uuidv4(),
      date,
      category,
      amount: parseFloat(amount), // 금액을 숫자형으로 변환
      content,
      createdBy: user.userId,
    };

    mutation.mutate(newSpend);

    // 입력 필드 초기화
    setDate("");
    setCategory("");
    setAmount("");
    setContent("");

    alert("성공적으로 등록되었습니다!");
  };

  return (
    <StyledForm onSubmit={addSpends}>
      <StyledFormGroup>
        날짜
        <StyledInput
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </StyledFormGroup>
      <StyledFormGroup>
        항목
        <StyledInput
          type="text"
          placeholder="지출 항목"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </StyledFormGroup>
      <StyledFormGroup>
        금액
        <StyledInput
          type="text"
          placeholder="지출 금액"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </StyledFormGroup>
      <StyledFormGroup>
        내용
        <StyledInput
          type="text"
          placeholder="지출 내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </StyledFormGroup>
      <StyledBtn type="submit">저장</StyledBtn>
    </StyledForm>
  );
};

export default PostForm;
