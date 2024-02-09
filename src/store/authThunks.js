import axios from "axios";
import { authActions } from "./authSlice";
import { SERVER_DOWN_MSG } from "./constants";

export const createAccount =
  (user, setIsLoading, setReqError) => async (dispatch) => {
    try {
      await axios.post("user/signup", user);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      const { response } = error;
      if (response) {
        setReqError(response.data.error.message);
      } else {
        setReqError(SERVER_DOWN_MSG);
      }
    }
  };

export const login =
  (user, setIsLoading, setReqError, navigate) => async (dispatch) => {
    try {
      const { data } = await axios.post("user/signin", user);
      setIsLoading(false);
      data.data.loggedin = true;
      dispatch(authActions.setUser(data.data));
      navigate("/tracker");
    } catch (error) {
      setIsLoading(false);
      const { response } = error;
      if (response) {
        console.log("ERROR : ", response);
        setReqError(response.data.error.message);
      } else {
        setReqError(SERVER_DOWN_MSG);
      }
    }
  };
