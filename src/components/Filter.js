import { useState } from "react";

const Filter = ({ isCompanyOverviewVisible, mainHeading, lists }) => {
  const [isDrop, setIsDrop] = useState(false);
  return (
    <div
      className={`${
        isCompanyOverviewVisible && "hidden"
      } flex-col md:flex md:flex-row`}
    >
      <div className="w-full md:w-2/5 lg:w-1/3 p-4 bg--600 flex justify-between border border-r-0 border-l-0 relative">
        <h1 className="text-gray-700 font-semibold">Filter by {mainHeading}</h1>
        <button className="text-gray-700" onClick={() => setIsDrop(!isDrop)}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 8l7.5 7.5L19 8"
            />
          </svg>
        </button>
        {isDrop ? (
          <div className="absolute top-14 z-10 h-fit bg-white w-full border left-0 ">
            {lists.map((list) => (
              <>
                <label class="flex items-center px-3 mt-2">
                  <input
                    type="checkbox"
                    class="h-5 w-5 rounded-full transition duration-150 ease-in-out"
                  />
                  <span class="ml-2 text-gray-700">{list} (2)</span>
                </label>
              </>
            ))}

            <button className="bg-indigo-600 w-full text-white font-semibold py-2 mt-4">
              Apply
            </button>
          </div>
        ) : null}
      </div>
      <div className="border w-full md:w-3/5 lg:w-[67%] flex justify-between py-4 md:py-0 px-6 items-center border-t-0 md:border-t">
        <div>
          <h1 className="font-semibold bg-indigo-200 px-4 py-1 text-indigo-600">
            Reset
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <div className="bg-indigo-200 w-8 h-8 rounded-full text-indigo-600 flex items-center justify-center">
            <h1 className="font-semibold">0</h1>
          </div>
          <h1 className="text-gray-700 font-semibold">Favourite Companies</h1>
        </div>
      </div>
    </div>
  );
};

export default Filter;
