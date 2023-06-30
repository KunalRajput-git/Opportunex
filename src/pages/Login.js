import Navbar from "../components/Navbar";
import WELCOME_IMG from "../assets/welcome.png";
import Footer from "../components/Footer";
const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between h-screen">
        <div className="w-2/6 pt-36 hidden md:block flex-shrink-0">
          <img
            src={WELCOME_IMG}
            className="translate -scale-x-100 mt-12 ml-8"
          />
        </div>

        <div className="md:pt-28 w-full md:w-1/2">
          <div className=" w-11/12 m-auto">
            <h1 className="mt-8 text-2xl font-bold text-indigo-600">
              Welcome Back
            </h1>
            <h3>Login to continue</h3>

            <div className="mt-6">
              <h1>Email (required)</h1>
              <input
                type="email"
                placeholder="Enter Email"
                className="border p-3 w-full rounded-md mt-1 focus:ring focus:ring-indigo-600 focus:text-indigo-600 outline-none"
              />
            </div>

            <div className="mt-6">
              <h1>Password (required)</h1>
              <input
                type="password"
                placeholder="Enter Password"
                className="border p-3 w-full rounded-md mt-1 focus:ring focus:ring-indigo-600 focus:text-indigo-600 outline-none"
              />
            </div>

            <div className="mt-6">
              <h1 className="text-sm">
                Forgot password?{" "}
                <span className="text-indigo-600 underline">click here </span>
              </h1>
            </div>

            <div className="mt-6">
              <button className="border w-full p-3 bg-indigo-600 text-white font-bold rounded-md">
                Login
              </button>
            </div>

            <div className="mt-6">
              <h1 className="text-sm">
                Don't have an account yet?{" "}
                <span className="text-indigo-600 underline">click here </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
