import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import HomePage from "../components/HomePage";
import Companies from "../pages/Companies";
import Tracker from "../pages/Tracker";
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/ForgotPassword";
import Signup from "../pages/Signup";
import ResetPassword from "../pages/ResetPassword";
import CompanyLanding from "../components/company_components/CompanyLanding";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/tracker" element={<Tracker />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};

export default AppRoutes;
