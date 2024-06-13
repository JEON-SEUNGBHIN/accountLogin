import React, { useEffect, useState } from "react";
import {
  ListContainer,
  ListUl,
  StyledLink,
  ListLi,
  LeftDiv,
  ContentContainer,
  Content,
  LeftDiv,
  RightDiv,
  NoSpends,
} from "./PostList.styled";

// 지출 목록을 표시하는 컴포넌트
const PostList = ({ filteredSpends }) => {
  // filteredSpends가 변경될 때마다 spends 상태 업데이트
  const [spends, setSpends] = useState(filteredSpends || []);

  useEffect(() => {
    setSpends(filteredSpends || []);
  }, [filteredSpends]);

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
                  <div style={{ color: "#aeaeae" }}>{spend.date}</div>
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
