const AuthInput = ({ label, placeholder, type }) => {
  return (
    <div className="mt-6">
      <h1>{label}</h1>
      <input
        type={type}
        placeholder={placeholder}
        className="border p-3 w-full rounded-md mt-1 focus:ring focus:ring-indigo-600 focus:text-indigo-600 focus:font-semibold outline-none"
      />
    </div>
  );
};

export default AuthInput;
