import WELCOME_IMG from "../assets/welcome.png";
import AuthButton from "../components/auth_components/AuthButton";
import AuthInput from "../components/auth_components/AuthInput";
import AuthLabel from "../components/auth_components/AuthLabel";
import AuthWrapper from "../components/auth_components/AuthWrapper";

const Login = () => {
  return (
    <AuthWrapper
      img={WELCOME_IMG}
      heading="Welcome Back"
      sub_heading="Login to continue"
      alt="welcomeback_img"
    >
      <AuthInput
        label="Email (required)"
        placeholder="Enter Email"
        type="email"
      />
      <AuthInput
        label="Password (required)"
        placeholder="Enter Password"
        type="password"
      />
      <AuthLabel label_name="Forgot Password" to="/forgot-password" />
      <AuthButton btn_name="Login" />
      <AuthLabel label_name="Don't have an account yet" to="/signup" />
    </AuthWrapper>
  );
};

export default Login;
