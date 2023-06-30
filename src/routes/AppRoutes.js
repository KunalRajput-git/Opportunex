import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import HomePage from "../components/HomePage";
import Companies from "../pages/Companies";
import Tracker from "../pages/Tracker";
import Profile from "../pages/Profile";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/tracker" element={<Tracker />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
