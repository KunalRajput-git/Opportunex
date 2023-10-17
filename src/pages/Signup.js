import SIGNUP_IMG from "../assets/signup.png";
import AuthWrapper from "../components/auth/AuthWrapper";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import AuthLabel from "../components/auth/AuthLabel";

const Signup = () => {
  return (
    <AuthWrapper
      img={SIGNUP_IMG}
      heading="Welcome to Opportunex"
      sub_heading="Sign up continue"
      alt="welcome_img"
    >
      <AuthInput label="Name (required)" placeholder="Enter Name" type="name" />
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
      <AuthButton btn_name="Create Account" />
      <AuthLabel label_name="Already have an account" to="/login" />
    </AuthWrapper>
  );
};

export default Signup;
