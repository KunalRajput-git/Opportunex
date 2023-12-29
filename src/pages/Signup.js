import SIGNUP_IMG from "../assets/signup.png";
import AuthWrapper from "../components/auth/AuthWrapper";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import AuthLabel from "../components/auth/AuthLabel";
import { useEffect, useState } from "react";
import { isValidEmail, isValidPassword } from "../utils/validation";
import { handleSetError } from "../utils/error-handler";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    errorState: false,
    errorName: "",
    errorMsg: "",
  });

  let signIn = async () => {
    if (name == "") {
      handleSetError(true, "emptyName", "Please enter your name.", setError);
    } else if (email == "")
      handleSetError(true, "emptyEmail", "Please enter your email.", setError);
    else if (password == "")
      handleSetError(
        true,
        "emptyPassword",
        "Please enter your password.",
        setError
      );
    else {
      try {
        let user = await axios.post(
          "http://localhost:8080/opportunex/api/v1/user/signup",
          {
            name,
            email,
            password,
          }
        );
      } catch (error) {
        const { data } = error.response;
        console.log("ERR : ", data);
      }

      setName("");
      setEmail("");
      setPassword("");
    }
  };

  // useEffect(() => console.log(error), [password, email]);

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
        value={name}
      />
      {error.errorState && error.errorName == "emptyName" && (
        <h3 className="text-red-600 mt-2"> {error.errorMsg}</h3>
      )}
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

      {error.errorState &&
        (error.errorName == "email" || error.errorName == "emptyEmail") && (
          <h3 className="text-red-600 mt-2"> {error.errorMsg}</h3>
        )}

      <AuthInput
        label="Password (required)"
        placeholder="Enter Password"
        type="password"
        callback={setPassword}
        setError={setError}
        validator={isValidPassword}
        validationMsg="Please enter a valid password"
        value={password}
      />
      {error.errorState &&
        (error.errorName == "password" ||
          error.errorName == "emptyPassword") && (
          <h3 className="text-red-600 mt-2"> {error.errorMsg}</h3>
        )}
      <AuthButton btn_name="Create Account" callback={signIn} />
      <AuthLabel label_name="Already have an account" to="/login" />
    </AuthWrapper>
  );
};

export default Signup;
