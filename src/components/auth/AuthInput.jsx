const AuthInput = (props) => {
  const {
    label,
    placeholder,
    type,
    callback,
    setError,
    validator,
    validationMsg,
    value,
  } = props;

  let onChangeHandler = (e) => {
    let userInput = e.target.value;
    if (callback) {
      callback(userInput);
      if (callback && validator) {
        if (!validator(userInput))
          setError({
            errorState: true,
            errorName: type,
            errorMsg: validationMsg,
          });

        if (userInput == "" || validator(userInput)) {
          setError({
            errorState: false,
            errorName: "",
            errorMsg: "",
          });
        }
      }
    }
  };
  return (
    <div className="mt-6">
      <h1>{label}</h1>
      <input
        type={type}
        placeholder={placeholder}
        className="border p-3 w-full rounded-md mt-1 focus:ring focus:ring-indigo-600 focus:text-indigo-600 focus:font-semibold outline-none"
        onChange={(e) => onChangeHandler(e)}
        value={value}
      />
    </div>
  );
};

export default AuthInput;
