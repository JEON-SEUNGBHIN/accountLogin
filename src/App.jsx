import { RouterProvider } from "react-router-dom";
import "./App.css";
import GlobalStyles from "./components/GlobalStyled";
import Header from "./layout/Header";
import router from "./routes/router";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
