import { useContext, useState } from "react";
import { BoxStyle, MonthBox } from "./Months.styled";

export const Month = ({ selectedMonth, setSelectedMonth }) => {
  // 월 클릭 이벤트를 처리하는 함수
  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };

  return (
    // 월 선택 박스 스타일을 적용한 컴포넌트
    <BoxStyle>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
        <MonthBox
          key={month}
          onClick={() => handleMonthClick(month)}
          isSelected={month === selectedMonth}
        >
          {month}월
        </MonthBox>
      ))}
    </BoxStyle>
  );
};

export default Month;
