const CompanyOverview = ({ onViewListClickHandler }) => {
  return (
    <div className="w-full md:w-3/5 lg:w-[67%] md:overflow-y-scroll md:h-[71vh]">
      <div className="border-b w-full p-4 pr-8 flex items-center justify-between">
        <div
          className="md:hidden flex items-center justify-between gap-3 cursor-pointer "
          onClick={onViewListClickHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list-nested"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <h1 className="text-sm font-semibold text-gray-700">View List</h1>
        </div>
        <div className="flex items-center justify-between gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          <h1 className="text-sm font-semibold text-gray-700">Prev Company</h1>
        </div>
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-sm font-semibold text-gray-700">Next company</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>
      </div>
      <div className="py-8  border-b">
        <div className="w-11/12 m-auto ">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Microsoft</h1>
              <h3 className="text-sm mt-1 italic text-gray-700">
                Computer Hardware Development
              </h3>
              <div className="lg:flex  lg:gap-4">
                <button className="bg-indigo-600 px-4 py-2 text-white mt-4 rounded-md flex gap-4 items-center">
                  Visit Career Page
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-arrow-up-right-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                    />
                  </svg>
                </button>
                <button className="bg-indigo-200 px-4 py-2 text-indigo-600 font-semibold mt-4 rounded-md flex gap-4 items-center">
                  Track
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-plus-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </button>
                <button className="px-4 py-2 text-gray-700 mt-4">
                  Favourite this company
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="ml-4 inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full m-auto bg-gray-200">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="text-gray-700 mt-1">
                <h1 className="text-lg">Bill Gates</h1>
                <h1 className="text-sm italic">
                  Founder, Microsoft Corporation
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 m-auto mt-4">
        <h1 className="text-xl font-semibold">Microsoft Overview</h1>
        <table class="table-auto w-full text-gray-700 mt-4">
          <tbody className="flex flex-wrap justify-between leading-8">
            <tr className="w-full lg:w-[48%]">
              <td class="font-bold pr-4">Website:</td>
              <td>
                <a
                  href="https://www.microsoft.com/en-in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-semibold"
                >
                  www.microsoft.com/en-in/
                </a>
              </td>
            </tr>
            <tr className="w-full lg:w-[48%]">
              <td className="font-bold pr-4">Headquarters:</td>
              <td>Redmond, United States</td>
            </tr>
            <tr className="w-full lg:w-[48%]">
              <td className="font-bold pr-4">Size:</td>
              <td>10000+ Employees</td>
            </tr>
            <tr className="w-full lg:w-[48%]">
              <td className="font-bold pr-4 ">Founded:</td>
              <td>1975</td>
            </tr>
            <tr className="w-full lg:w-[48%]">
              <td className="font-bold pr-4">Industry:</td>
              <td>Computer Hardware Development</td>
            </tr>
            <tr className="w-full lg:w-[48%]">
              <td className="font-bold pr-4">Revenue:</td>
              <td>$10+ billion (USD)</td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-700 mt-4">
          Microsoft is the ideal place for people who have passion for their
          work and the desire to make an impact—in their careers, in the
          community and on the world. Microsoft is a unique company; and not
          just within the tech industry. Here, smart people thrive on their own
          terms and push their intelligence to its limit. The variety of job
          opportunities and career advancement at Microsoft is incredible and
          empowers you to constantly challenge yourself and chart your own
          course.
        </p>
      </div>
    </div>
  );
};

export default CompanyOverview;
