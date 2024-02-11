import axios from "axios";
import { companyActions } from "./companiesSlice";
import { SERVER_DOWN_MSG } from "./constants";
import { authActions } from "./authSlice";

export const fetchCompanies =
  (setIsLoading, token, currentPageNo, navigate) => async (dispatch) => {
    try {
      let url = `companies/page/${currentPageNo}`;
      let options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(url, token && options);
      dispatch(companyActions.setCompanies(data.data));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      const { response } = error;
      if (response) {
        if (response.data.error.message == "jwt expired") {
          dispatch(authActions.logout());
          navigate("/");
        }
        dispatch(companyActions.setError(response.data.error.message));
      } else {
        dispatch(companyActions.setError(SERVER_DOWN_MSG));
      }
    }
  };

export const fetchSearchedCompanies =
  (searchtext, token) => async (dispatch) => {
    if (!token) return;
    try {
      let url = `companies/search/${searchtext}`;
      let options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(url, options);
      dispatch(companyActions.setSearchedCompanies(data.data));
    } catch (error) {
      const { response } = error;
      if (response) {
        if (response.data.error.message == "jwt expired") {
          dispatch(authActions.logout());
        }
        dispatch(companyActions.setError(response.data.error.message));
      } else {
        dispatch(companyActions.setError(SERVER_DOWN_MSG));
      }
    }
  };
