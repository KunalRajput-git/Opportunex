import SIGNUP_IMG from "../assets/signup.png";
import AuthWrapper from "../components/auth/AuthWrapper";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import AuthLabel from "../components/auth/AuthLabel";
import { isValidEmail, isValidPassword } from "../utils/validation";
import AuthError from "../components/auth/AuthError";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  let signIn = async () => {
    if (
      errors.name ||
      errors.email ||
      errors.password ||
      !name ||
      !email ||
      !password
    )
      return;
    else console.log("calling server...");
  };

  return (
    <AuthWrapper
      img={SIGNUP_IMG}
      heading="Welcome to Opportunex"
      sub_heading="Sign up continue"
      alt="welcome_img"
    >
      <AuthInput
        label="Name (required)"
        placeholder="Enter Name"
        type="name"
        callback={setName}
        setError={setError}
        value={name}
        validationMsg="Name can't be empty."
      />
      {errors.name && <AuthError error={errors.name} />}
      <AuthInput
        label="Email (required)"
        placeholder="Enter Email"
        type="email"
        callback={setEmail}
        setError={setError}
        validator={isValidEmail}
        validationMsg="Please enter a valid email."
        value={email}
      />
      {errors.email && <AuthError error={errors.email} />}

      <AuthInput
        label="Password (required)"
        placeholder="Enter Password"
        type="password"
        callback={setPassword}
        setError={setError}
        validator={isValidPassword}
        validationMsg="Password should be 8 character long."
        value={password}
      />
      {errors.password && <AuthError error={errors.password} />}

      <AuthButton btn_name="Create Account" callback={signIn} />
      <AuthLabel label_name="Already have an account" to="/login" />
    </AuthWrapper>
  );
};

export default Signup;
