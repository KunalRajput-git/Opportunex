import { useState } from "react";

const Filter = () => {
  const [isDrop, setIsDrop] = useState(false);
  return (
    <div className="flex  flex-col md:flex-row">
      <div className="w-full md:w-2/5 lg:w-1/3 p-4 bg--600 flex justify-between border border-r-0 relative">
        <h1 className="text-gray-700 font-semibold">Filter by Category</h1>
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
          <div className="absolute top-14 z-10 h-64 bg-white w-full border right-0 overflow-x-scroll ">
            <label class="flex items-center px-3 mt-2">
              <input
                type="checkbox"
                class="h-5 w-5 rounded-full transition duration-150 ease-in-out"
              />
              <span class="ml-2 text-gray-700">Administration (2)</span>
            </label>

            <label class="flex items-center px-3 mt-2">
              <input
                type="checkbox"
                class="h-5 w-5 rounded-full transition duration-150 ease-in-out"
              />
              <span class="ml-2 text-gray-700">BookKeeping (5)</span>
            </label>

            <label class="flex items-center px-3 mt-2">
              <input
                type="checkbox"
                class="h-5 w-5 rounded-full transition duration-150 ease-in-out"
              />
              <span class="ml-2 text-gray-700">Business Development (1)</span>
            </label>

            <label class="flex items-center px-3 mt-2">
              <input
                type="checkbox"
                class="h-5 w-5 rounded-full transition duration-150 ease-in-out"
              />
              <span class="ml-2 text-gray-700">
                Corporate Strategy & Development (3)
              </span>
            </label>

            <label class="flex items-center px-3 mt-2">
              <input
                type="checkbox"
                class="h-5 w-5 rounded-full transition duration-150 ease-in-out"
              />
              <span class="ml-2 text-gray-700">
                Customer Service & Support (2)
              </span>
            </label>

            <label class="flex items-center px-3 mt-2">
              <input
                type="checkbox"
                class="h-5 w-5 rounded-full transition duration-150 ease-in-out"
              />
              <span class="ml-2 text-gray-700">Sales (6)</span>
            </label>

            <label class="flex items-center px-3 mt-2">
              <input
                type="checkbox"
                class="h-5 w-5 rounded-full transition duration-150 ease-in-out"
              />
              <span class="ml-2 text-gray-700">Real Eastate (4)</span>
            </label>

            <label class="flex items-center px-3 mt-2">
              <input
                type="checkbox"
                class="h-5 w-5 rounded-full transition duration-150 ease-in-out"
              />
              <span class="ml-2 text-gray-700">Marketing (5)</span>
            </label>
            <label class="flex items-center px-3 mt-2">
              <input
                type="checkbox"
                class="h-5 w-5 rounded-full transition duration-150 ease-in-out"
              />
              <span class="ml-2 text-gray-700">Administration (2)</span>
            </label>
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
