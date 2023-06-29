import { useEffect, useState } from "react";

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
    <nav class="duration-500 md:flex w-full md:justify-between md:items-center bg-white  px-6 py-4 rounded-xl md:py-5 md:fixed top-0 left-0 z-10 md:rounded-none border-b-2">
      <div className="flex justify-between items-center">
        <a href="/" class="text-2xl md:text-4xl font-bold text-indigo-600">
          Opportunex {/* navigatorx careerque opportunex */}
        </a>
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
        <ul class="mt-4 md:mt-auto md:flex md:items-center md:gap-6 space-y-6 md:space-y-0">
          <li>
            <a
              href="#companies"
              class={`" hover:text-blue-600  tracking-wider ${
                isLogin ? "text-xl" : "lg:text-xl"
              } text-gray-700 "`}
            >
              Companies
            </a>
          </li>
          <li>
          <a
              href="#companies"
              class={`" hover:text-blue-600  tracking-wider ${
                isLogin ? "text-xl" : "lg:text-xl"
              } text-indigo-600  font-semibold "`}
            >
              Tracker
            </a>
          </li>

          {isLogin ? (
            <li className="w-11 h-11 flex items-center justify-center">
              <a
                href=""
                className="border p-4 rounded-full w-full h-full  font-semibold  text-gray-700 flex items-center justify-center  bg-center bg-no-repeat bg-cover"
              >
                <h1>K</h1>
              </a>
            </li>
          ) : (
            <>
              <li>
                <a
                  href="#about"
                  class="bg-indigo-200 text-indigo-600 py-2 px-4 rounded-md tracking-wider duration-200 lg:text-xl focus:outline-none focus:ring-2 focus:ring-indigo-750 focus:border-transparent flex items-center gap-2"
                >
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
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  class=" bg-indigo-600 text-white  py-2 px-4 rounded-md  tracking-wider duration-200 lg:text-xl focus:outline-none focus:ring-2 focus:ring-indigo-750 focus:border-transparent flex items-center gap-2"
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
                </a>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
