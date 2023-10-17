const AuthButton = ({ btn_name }) => {
  return (
    <div className="mt-6">
      <button className="border w-full p-3 bg-indigo-600 text-white font-bold rounded-md focus:ring focus:ring-indigo-300 outline-none ">
        {btn_name}
      </button>
    </div>
  );
};

export default AuthButton;
