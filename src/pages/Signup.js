import SIGNUP_IMG from "../assets/signup.png";
import AuthWrapper from "../components/auth/AuthWrapper";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import AuthLabel from "../components/auth/AuthLabel";
import {
  isEmptyInput,
  isValidEmail,
  isValidPassword,
  validateInputs,
} from "../utils/validation";
import AuthError from "../components/auth/AuthError";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const state = useSelector(state=>state);
  console.log(state);
  let signIn = async () => {
    if (
      isEmptyInput(name, "name", setError) ||
      isEmptyInput(email, "email", setError) ||
      isEmptyInput(password, "password", setError)
    )
      return;
    else if (errors.name || errors.email || errors.password) return;
    else {
      let user = { name, email, password };
      try {
        let data = await axios.post(
          "http://localhost:8080/opportunex/api/v1/user/signup",
          user
        );
        console.log(data);
      } catch (error) {
        console.log("ERROR : ", error);
        console.log(
          "Oops! We're unable to connect to our services at the moment"
        );
      }
    }
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
