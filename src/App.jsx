import { useEffect, useState } from "react";
import "./App.css";
import GlobalStyles from "./components/GlobalStyled";
import { AuthProvider } from "./context/AuthContext";
import SharedRouter from "./shared/SharedRouter";
import { getUserInfo } from "./api/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) {
        setUser({
          userId: res.id,
          nickname: res.nickname,
          avator: res.avator,
        });
      }
    });
  });

  console.log("로그인된 유저 정보: ", user);

  return (
    <AuthProvider>
      <GlobalStyles />
      <SharedRouter setUser={setUser} />
    </AuthProvider>
  );
}

export default App;
