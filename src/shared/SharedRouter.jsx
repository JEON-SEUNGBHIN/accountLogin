import React, { useContext } from "react";
import { Navigate, Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyPage from "../pages/MyPage";
import { AuthContext } from "../context/AuthContext";

// PrivateRoute : 로그인이 필요한 페이지에 접근할 수 있도록 하는 컴포넌트
// 로그인이 되어있지 않은 사용자는 login 페이지로 리다이렉트
const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

// PublicRoute : 로그인이 필요없는 페이지에 접근할 수 있도록 하는 컴포넌트
// 로그인이 되어있는 사용자는 home으로 리다이렉트
const PublicRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/" />;
};

const SharedRouter = ({ user, setUser }) => (
  <BrowserRouter>
    <Header user={user} setUser={setUser} />
    <Routes>
      <Route path="/" element={<PrivateRoute element={Home} user={user} />} />
      <Route
        path="/mypage"
        element={
          <PrivateRoute element={MyPage} setUser={setUser} user={user} />
        }
      />
      <Route
        path="/login"
        element={<PublicRoute element={Login} setUser={setUser} />}
      />
      <Route path="/signup" element={<PublicRoute element={SignUp} />} />
    </Routes>
  </BrowserRouter>
);

export default SharedRouter;
