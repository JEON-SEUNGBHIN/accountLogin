import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
// 기타 필요한 컴포넌트 임포트

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/home",
    element: <Home />
  },
  // 기타 라우트
]);

export default router;
