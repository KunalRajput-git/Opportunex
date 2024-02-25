import { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useSelector } from "react-redux";

const Filter = ({ mainHeading, lists }) => {
  const [isDrop, setIsDrop] = useState(false);
  let filterModalNode = useOutsideClick(() => setIsDrop(false));
  const companyState = useSelector((state) => state.companySlice);
  return (
    <div
      className={`${
        !companyState.isCompanyContainerVisble && "hidden"
      } flex-col md:flex md:flex-row`}
    >
      <div className="w-full md:w-2/5 lg:w-1/3 p-4  flex justify-between border border-r-0 border-l-0 relative">
        <h1 className="text-gray-700 font-semibold">Filter by {mainHeading}</h1>
        <button className="text-gray-700" onClick={() => setIsDrop(!isDrop)}>
          <ChevronDown size="20" />
        </button>
        {isDrop && (
          <div
            className="absolute top-14 z-10 h-fit bg-white w-full border left-0 flex flex-wrap justify-betwee pt-4 md:pt-2"
            ref={filterModalNode}
          >
            {lists.map((list) => (
              <>
                <label class="flex items-center w-1/2 px-3 mt-2">
                  <input
                    type="checkbox"
                    class="h-5 w-5 rounded-full transition duration-150 ease-in-out"
                  />
                  <span class="ml-2 text-gray-700">{list}</span>
                </label>
              </>
            ))}

            <button className="bg-indigo-600 w-full text-white font-semibold py-2 mt-4">
              Apply
            </button>
          </div>
        )}
      </div>
      <div className="border border-r-0 w-full md:w-3/5 lg:w-[67%] flex justify-between py-4 md:py-0 px-6 items-center border-t-0 md:border-t">
        <div>
          <h1 className="font-semibold bg-indigo-200 px-4 py-1 text-indigo-600">
            Reset
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <div className="bg-indigo-200 w-8 h-8 rounded-full text-indigo-600 flex items-center justify-center">
            <h1 className="font-semibold">0</h1>
          </div>
          <h1 className="text-gray-700 font-semibold">Watchlist</h1>
        </div>
      </div>
    </div>
  );
};

export default Filter;
