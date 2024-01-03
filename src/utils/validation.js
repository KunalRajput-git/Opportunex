const MAX_PASSWORD_LEN = 8;

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) return true;
  return false;
};
export const isValidPassword = (passwd) => {
  if (MAX_PASSWORD_LEN <= passwd.length) return true;
  return false;
};

export const validateInputs = (
  userInput,
  type,
  validator,
  validationMsg,
  setError
) => {
  if (userInput.trim() == "") {
    setError((prevState) => {
      return { ...prevState, [type]: `${type} can't be empty.` };
    });
    return false;
  } else if (validator) {
    if (!validator(userInput)) {
      setError((prevState) => {
        return { ...prevState, [type]: validationMsg };
      });
      return false;
    } else {
      setError((prevState) => {
        return { ...prevState, [type]: "" };
      });
      return true;
    }
  } else {
    setError((prevState) => {
      return { ...prevState, [type]: "" };
    });
    return true;
  }
};
