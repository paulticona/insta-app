
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "../pages/Search";
import UserInfo from "../pages/Userinfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/user/:username" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
