import { useState } from "react";

const Filter = () => {
  const [industries, setIndustries] = useState([
    { id: 1, name: "Pawn" },
    { id: 2, name: "Groceries" },
    { id: 3, name: "Technology" },
    { id: 4, name: "Healthcare" },
  ]);

  return (
    <div className="min-w-full flex flex-col gap-2 p-4 items-center border  border-gray-300 shadow-lg rounded-lg">
      <h1 className="text-xl font-medium text-blue-900"> Filters</h1>
      <div className="border w-4/5 p-2 relative">
        {industries.length ? (
          <div className="p-2 pb-4">
            {industries.map((industry) => {
              return (
                <>
                  <h1
                    key={industry.id}
                    className="mt-2 ml-1 inline-block bg-blue-950 p-1 px-2 font-medium rounded-sm text-white cursor-default"
                  >
                    {industry.name}{" "}
                    <span
                      className="ml-2"
                      onClick={() => {
                        setIndustries(
                          industries.filter(
                            (filteredIndustry) =>
                              filteredIndustry.id !== industry.id
                          )
                        );
                      }}
                    >
                      X
                    </span>
                  </h1>
                </>
              );
            })}
          </div>
        ) : null}

        <input
          placeholder="e.g. Technology"
          className="bg-transparent outline-none px-2  "
        />
        <div className="absolute border border-gray-400 w-full left-0 top-12 bg-white">
          <h1 className="p-2 text-gray-700 hover:bg-blue-950 hover:text-white font-medium cursor-default duration-150">
            Technology
          </h1>
          <h1 className="p-2 text-gray-700 hover:bg-blue-950 hover:text-white font-medium cursor-default duration-150">
            Grocerie
          </h1>
          <h1 className="p-2 text-gray-700 hover:bg-blue-950 hover:text-white font-medium cursor-default duration-150">
            Pawn
          </h1>

          <h1 className="p-2 text-gray-700 hover:bg-blue-950 hover:text-white font-medium cursor-default duration-150">
            Healthcare
          </h1>
        </div>
      </div>

      {/* <select className="w-4/5 focus:outline-none p-2 font-medium text-blue-900 cursor-pointer border-4 border-blue-900 ">
        <option className="text-center">-- Location --</option>
        <option className="">Delhi</option>
        <option className="">Punjab</option>
      </select>
      <button className="w-4/5 border-2 p-3 bg-blue-900 text-white font-medium rounded-lg ">
        Apply
      </button> */}
    </div>
  );
};

export default Filter;

{
  /* <div class="flex flex-col md:flex-row items-center justify-start mt-8 gap-4">
            <input
              class="w-full md:w-1/2 px-6 py-3 border rounded-lg gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            shadow-md text-gray-500 font-medium"
              type="text"
              placeholder="Search company name, industry, or location"
              aria-label="Search"
            />
            <button class="w-full md:w-24 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-bold duration-200 focus:outline-none focus:ring-2 focus:ring-blue-750 focus:border-transparent">
              Search
            </button>
          </div> */
}
{
  /* <div class="flex flex-wrap items-center mt-8">
            <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mr-2 mb-2 hover:bg-gray-300">
              Technology
            </button>
            <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mr-2 mb-2 hover:bg-gray-300">
              Software
            </button>
            <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mr-2 mb-2 hover:bg-gray-300">
              Healthcare
            </button>
            <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mr-2 mb-2 hover:bg-gray-300">
              Delhi
            </button>
          </div> */
}
