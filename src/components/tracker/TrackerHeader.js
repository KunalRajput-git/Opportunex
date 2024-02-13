import { PlusCircle } from "react-bootstrap-icons";
import Filter from "../Filter";

const TrackerHeader = () => {
  return (
    <>
      <div className="p-4 gap-4 md:gap-0 flex justify-between items-center">
        <div className="flex-shrink-0">
          <h1 className="text-xl font-semibold">My Applications</h1>
          <p className="text-gray-700 text-sm font-semibold">
            Tracker | My Applications
          </p>
        </div>

        <input
          type="search"
          className="border hidden md:block md:w-1/2 p-3 rounded-md outline-none focus:ring focus:ring-indigo-600 focus:font-semibold focus:text-indigo-600"
          placeholder="Enter keyword, category or job title"
        />

        <button className="bg-indigo-600 px-4 py-3  flex  text-white font-semibold  items-center gap-3 rounded-md">
          Add New <PlusCircle size="20" />
        </button>
      </div>
      <div className=" md:hidden w-11/12 m-auto mb-4">
        <input
          type="search"
          className="border w-full p-3 rounded-md  outline-none focus:ring focus:ring-indigo-600 focus:font-semibold focus:text-indigo-600"
          placeholder="Enter keyword, category or job title"
        />
      </div>
      <Filter
        mainHeading="Status"
        lists={[
          "Applied",
          "Not Applied",
          "Scheduled",
          "Interviewing",
          "Pending",
          "Selected",
          "Declined",
        ]}
      />
    </>
  );
};

export default TrackerHeader;
