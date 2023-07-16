import Navbar from "./Navbar";
import Footer from "./Footer";
import COM_BENFTS from "../assets/benefits.png";
import JOB_APP from "../assets/job_app.png";
import FeatureItem from "./landing_components/FeatureItem";
import FeatureWrapper from "./landing_components/FeatureWrapper";
import HEADER_IMG from "../assets/header_img.png";

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
          <img src={HEADER_IMG} className="mt-12 w-96 h-96 m-auto" />
        </div>
      </div>

      <div className="w-11/12 m-auto  mt-20 mb-28">
        <div className="w-full md:w-2/3 m-auto">
          <h3 className=" text-indigo-600 font-bold text-center text-lg">
            STREAMLINE WITH OPPORTUNEX
          </h3>

          <h1 className="mt-6 text-3xl text-center font-bold  m-auto">
            Tired of searching through countless company career pages and
            dealing with disorganized job applications?
          </h1>

          <p className="m-auto mt-6 text-xl">
            Finding the right job involves sifting through countless companies
            and job postings. Keeping track of which companies you've applied
            to, their application processes and follow-ups can be tedious and
            time-consuming. This is where a tool like Opportunex can help
            streamline your job search.
          </p>
        </div>
      </div>

      <FeatureWrapper
        heading="300+ Companies for Job Seekers"
        content=" Access career pages for top companies in a centralized talent hub,
              streamlining your job search and saving you the hassle of
              searching the web company by company."
        img={COM_BENFTS}
        align="left"
      >
        <FeatureItem
          svg={
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="w-7 h-7 text-indigo-50"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          }
          heading="Comprehensive company listing"
          content=" Browse over 300 pre-vetted companies representing a diverse
              range of industries and sectors."
        />
        <FeatureItem
          svg={
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="w-7 h-7 text-indigo-50"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          }
          heading="Filter by industry"
          content="Easily filter the company list industries to find
              opportunities that match your expertise."
        />
        <FeatureItem
          svg={
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="w-7 h-7 text-indigo-50"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              ></path>
            </svg>
          }
          heading="Dedicated career pages"
          content="Direct links to each company's career page where you can view
              current openings and apply directly."
        />
      </FeatureWrapper>

      <FeatureWrapper
        heading="Built-In Job Application Tracker"
        content="Organize key details for each role you apply to, manage status
              updates. Filters, search tools and status updates keep you
              informed of your progress for each application."
        img={JOB_APP}
        align="right"
        pt="md:pt-28"
      >
        <FeatureItem
          svg={
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="w-7 h-7 text-indigo-50"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          }
          heading="Job details"
          content="Record role, date applied, company, job link, status, contacts
              and notes."
        />

        <FeatureItem
          svg={
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="w-7 h-7 text-indigo-50"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          }
          heading="Status filtering"
          content="Sort applications by status (applied, scheduled, interviewing,
                pending, selected declined)."
        />

        <FeatureItem
          svg={
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="w-7 h-7 text-indigo-50"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              ></path>
            </svg>
          }
          heading="Keyword search"
          content="Locate relevant applications quickly."
        />
      </FeatureWrapper>

      <Footer />
    </>
  );
};

export default HomePage;
