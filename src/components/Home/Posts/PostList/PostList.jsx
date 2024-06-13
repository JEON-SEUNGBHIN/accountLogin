import React, { useEffect, useState } from "react";
import {
  ListContainer,
  ListUl,
  StyledLink,
  ListLi,
  ContentContainer,
  Content,
  LeftDiv,
  RightDiv,
  NoSpends,
} from "./PostList.styled";
import { useQuery } from "@tanstack/react-query";
import { getSpends } from "../../../../api/spend";

// 지출 목록을 표시하는 컴포넌트
export const PostList = ({ selectedMonth }) => {
  // useQuery를 통해 데이터를 불러옵니다. queryKey와 queryFn을 적절히 사용합니다.
  const {
    data: spends = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["spends", selectedMonth], // queryKey에 selectedMonth를 추가합니다.
    queryFn: () => getSpends(selectedMonth), // queryFn으로 getSpends 함수를 사용합니다.
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  const filteredSpends = selectedMonth
    ? spends.filter(
        (spend) => new Date(spend.date).getMonth() === selectedMonth - 1
      )
    : spends;

  return (
    <ListContainer>
      {/* 필터된 지출 목록이 있을 경우 */}
      {spends.length > 0 ? (
        <ListUl>
          {/* 각 지출 항목을 링크로 표시 */}
          {spends.map((spend) => (
            <StyledLink key={spend.id} to={`/update/${spend.id}`}>
              <ListLi>
                <LeftDiv>
                  <div style={{ color: "#aeaeae" }}>{spend.date} - {spend.createdBy}</div>
                  <ContentContainer>
                    <Content>
                      {spend.category} - {spend.content}
                    </Content>
                  </ContentContainer>
                </LeftDiv>
                <RightDiv>
                  <div>{spend.amount} 원</div>
                </RightDiv>
              </ListLi>
            </StyledLink>
          ))}
        </ListUl>
      ) : (
        // 지출이 없는 경우 메시지 표시
        <NoSpends>지출이 없습니다</NoSpends>
      )}
    </ListContainer>
  );
};

export default PostList;
