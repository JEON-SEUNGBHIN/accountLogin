import React from "react";
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
  const {
    data: spends = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["spends"], // selectedMonth 제거
    queryFn: getSpends, // selectedMonth 제거
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // selectedMonth 값으로 필터링
  const filteredSpends = selectedMonth
    ? spends.filter(
        (spend) => new Date(spend.date).getMonth() === selectedMonth - 1
      )
    : spends;

  return (
    <ListContainer>
      {/* 필터된 지출 목록이 있을 경우 */}
      {filteredSpends.length > 0 ? ( // spends 대신 filteredSpends 사용
        <ListUl>
          {/* 각 지출 항목을 링크로 표시 */}
          {filteredSpends.map((spend) => ( // spends 대신 filteredSpends 사용
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
