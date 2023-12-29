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
