import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Header from "../components/Header/Header"
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyPage from "../pages/MyPage";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

const PublicRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/home" />;
};

const SharedRouter = () => (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<PrivateRoute element={Home} />} />
      <Route path="/mypage" element={<PrivateRoute element={MyPage} />} />
      <Route path="/login" element={<PublicRoute element={Login} />} />
      <Route path="/signup" element={<PublicRoute element={SignUp} />} />
    </Routes>
  </Router>
);

export default SharedRouter;
