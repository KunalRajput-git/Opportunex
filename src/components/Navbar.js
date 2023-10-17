import { useEffect, useState } from "react";
import { ArrowRightShort, BoxArrowInRight, List } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLogin] = useState(true);

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
            <List />
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
            <NavLink
              to="/profile"
              className="border p-4 rounded-full font-semibold  text-gray-700 flex items-center justify-center  bg-center bg-no-repeat bg-cover w-12 h-12"
            >
              <h1>K</h1>
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/login"
                className="bg-indigo-200 text-indigo-600 py-2 px-4 rounded-md duration-200 lg:text-xl outline-none focus:ring focus:ring-indigo-750 focus:border-transparent flex items-center gap-4"
              >
                Login
                <BoxArrowInRight size="24" />
              </NavLink>

              <NavLink to="/signup">
                <button
                  href="#about"
                  class=" bg-indigo-600 text-white  py-2 px-4 rounded-md duration-200 lg:text-xl outline-none focus:ring focus:ring-indigo-750 focus:border-transparent flex items-center gap-4"
                >
                  Get Started
                  <ArrowRightShort size={32} />
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
