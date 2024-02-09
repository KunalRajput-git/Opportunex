import axios from "axios";
import { companyActions } from "./companiesSlice";
import { SERVER_DOWN_MSG } from "./constants";

export const fetchCompanies = (setIsLoading) => async (dispatch) => {
  try {
    const { data } = await axios.get("companies");
    dispatch(companyActions.setCompanies(data.data));
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    const { response } = error;
    if (response) {
      dispatch(companyActions.setError(response.data.error.message));
    } else {
      dispatch(companyActions.setError(SERVER_DOWN_MSG));
    }
  }
};
