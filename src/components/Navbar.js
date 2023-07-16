import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  let menuToggleHandler = () => {
    if (window.innerWidth > 768) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    menuToggleHandler();
  }, []);

  window.addEventListener("resize", menuToggleHandler);

  return (
    <nav class="duration-500 md:flex w-full md:justify-between md:items-center bg-white  px-6 py-4  md:py-5 md:fixed top-0 left-0 z-10 border-b-2">
      <div className="flex justify-between items-center ">
        <Link to="/">
          <button class="text-2xl md:text-4xl font-bold text-indigo-600">
            Opportunex {/* navigatorx careerque opportunex */}
          </button>
        </Link>
        <div class="flex md:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-gray-800 hover:border-gray-800 outline-none focus:outline-none"
            onClick={() => {
              setIsOpen((isOpen) => !isOpen);
            }}
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div class="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center md:gap-6 space-y-5 md:space-y-0">
          <NavLink
            to="/companies"
            className={({ isActive }) =>
              isActive
                ? `text-blue-700 font-bold ${
                    isLogin ? "text-xl" : "lg:text-xl"
                  }`
                : `hover:text-indigo-600  tracking-wider ${
                    isLogin ? "text-xl" : "lg:text-xl"
                  } text-gray-700`
            }
          >
            Companies
          </NavLink>{" "}
          <NavLink
            to="/tracker"
            className={({ isActive }) =>
              isActive
                ? `text-blue-700 font-bold ${
                    isLogin ? "text-xl" : "lg:text-xl"
                  }`
                : `hover:text-indigo-600  tracking-wider ${
                    isLogin ? "text-xl" : "lg:text-xl"
                  } text-gray-700`
            }
          >
            Tracker
          </NavLink>
          {isLogin ? (
            <NavLink className="border p-4 rounded-full w-full h-full  font-semibold  text-gray-700 flex items-center justify-center  bg-center bg-no-repeat bg-cover">
              <h1>K</h1>
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/login"
                className="bg-indigo-200 text-indigo-600 py-2 px-4 rounded-md duration-200 lg:text-xl outline-none focus:ring focus:ring-indigo-750 focus:border-transparent flex items-center gap-4"
              >
                Login
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-box-arrow-in-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </NavLink>

              <NavLink to="/signup">
                <button
                  href="#about"
                  class=" bg-indigo-600 text-white  py-2 px-4 rounded-md duration-200 lg:text-xl outline-none focus:ring focus:ring-indigo-750 focus:border-transparent flex items-center gap-4"
                >
                  Get Started
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
