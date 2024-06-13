import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  UpdateFormStyle,
  UpdateInputStyle,
  ButtonContainer,
  UpdateBtnStyle,
  UpdateBtnStyleDelete,
  UpdateBtnStyleBack,
} from "./PostEdit.styled";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSpend, putSpend, deleteSpend } from "../../../../api/spend";

export const PostEdit = () => {
  const { id } = useParams(); // useParams 훅을 사용하여 URL에서 id 파라미터 추출
  const navigate = useNavigate();

  const {
    data: selectedSpend,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["spends", id],
    queryFn: getSpend,
  });

  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (selectedSpend) {
      setDate(selectedSpend.date);
      setCategory(selectedSpend.category);
      setAmount(selectedSpend.amount);
      setContent(selectedSpend.content);
    }
  }, [selectedSpend]);

  const mutationDelete = useMutation({
    mutationFn: deleteSpend,
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleDelete = () => {
    const isConfirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (isConfirmed) {
      mutationDelete.mutate(id);
    }
  };

  const mutationEdit = useMutation({
    mutationFn: putSpend,
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleEdit = (e) => {
    e.preventDefault();
    const updatedSpend = {
      id: id,
      date: date,
      category: category,
      amount: parseFloat(amount),
      content: content,
    };
    const isConfirmed = window.confirm("정말로 수정하시겠습니까?");
    if (isConfirmed) {
      mutationEdit.mutate(updatedSpend);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!selectedSpend) {
    return <div>해당 항목을 찾을 수 없습니다.</div>;
  }

  return (
    <UpdateFormStyle onSubmit={handleEdit}>
      날짜
      <UpdateInputStyle
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      항목
      <UpdateInputStyle
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      금액
      <UpdateInputStyle
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      내용
      <UpdateInputStyle
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <ButtonContainer>
        <UpdateBtnStyle type="submit">수정</UpdateBtnStyle>
        <UpdateBtnStyleDelete type="button" onClick={handleDelete}>
          삭제
        </UpdateBtnStyleDelete>
        <UpdateBtnStyleBack type="button" onClick={() => navigate(-1)}>
          뒤로 가기
        </UpdateBtnStyleBack>
      </ButtonContainer>
    </UpdateFormStyle>
  );
};
