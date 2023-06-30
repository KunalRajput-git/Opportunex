import Navbar from "./Navbar";
import heroImg from "../assets/18915856.png";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center w-11/12 m-auto mt-6 md:mt-28">
        <div className="w-full md:w-11/12">
          <h1 class="text-left text-4xl md:text-6xl font-bold  text-gray-800 mb-6">
            Boost Your Job Search with Opportunex.
          </h1>
          <p className="pb-2 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
            Ultimate tool for job seekers, equipped with the tracker and
            advanced functionality to streamline your job search process.
          </p>

          <div className="mt-4 flex flex-col md:flex-row gap-4 md:items-center justify-start">
            <a
              href="#about"
              class=" bg-indigo-600 text-white  py-5 px-6 rounded-md  tracking-wider duration-200 lg:text-xl focus:outline-none focus:ring-2 focus:ring-indigo-750 focus:border-transparent flex items-center gap-2 font-medium"
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

            <a
              href="#about"
              class="bg-indigo-200 text-indigo-600 py-5 px-6 rounded-md tracking-wider duration-200 lg:text-xl focus:outline-none focus:ring-2 focus:ring-indigo-750 focus:border-transparent flex items-center gap-2 font-medium"
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
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              Explore Companies
            </a>
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <img
            src="https://bhumio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&w=640&q=75"
            className="mt-12"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
