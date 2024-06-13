import React, { useState } from "react";
import { InStyledBox } from "../components/Home/Home.styled";
import Month from "../components/Home/Posts/Months/Month";
import PostForm from "../components/Home/Posts/PostForm/PostForm";
import PostList from "../components/Home/Posts/PostList/PostList";

const Home = ({ user }) => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  return (
    <>
      <InStyledBox>
        <Month
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
      </InStyledBox>
      <InStyledBox>
        <PostForm user={user} />
      </InStyledBox>
      <InStyledBox>
        <PostList selectedMonth={setSelectedMonth} />
      </InStyledBox>
    </>
  );
};

export default Home;
