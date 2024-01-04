export const singup = (user, setError) => async (dispatch) => {
  try {
    const { data } = await axios.post("user", user);
    if (data.statusCode == 200) {
      const userData = {};
      if (data.data.statusCode == 405) {
        setError(true);
      } else if (data.data.name) {
        dispatch(loginActions.setLoggedIn({ loggedIn: true, userData }));
      } else {
        dispatch(loginActions.setGetName({ userData }));
      }
    } else if (data.statusCode == 400) {
      console.log("error");
    }
  } catch ({ ...error }) {
    dispatch(loginActions.setLoginError({ loggedIn: false, error }));
  }
};
