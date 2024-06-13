import { BoxStyle, MonthBox } from "./Months.styled";

const Months = ({ spends, setSelectedMonth, selectedMonth }) => {
  // 월 클릭 이벤트를 처리하는 함수
  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };

  return (
    // 월 선택 박스 스타일을 적용한 컴포넌트
    <BoxStyle>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
        // 각 월을 표시하는 컴포넌트
        <MonthBox
          key={month}
          onClick={() => handleMonthClick(month)}
          // spends가 정의되었는지 확인하고, 정의되어 있다면 some 함수를 호출
          isActive={
            spends &&
            spends.some(
              (spend) => new Date(spend.date).getMonth() === month - 1
            )
          }
          // 선택된 월인지 여부에 따라 스타일을 변경
          isSelected={month === selectedMonth}
        >
          {month}월
        </MonthBox>
      ))}
    </BoxStyle>
  );
};

export default Months;
