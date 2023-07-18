import { ArrowLeft, ArrowRight, List, ListNested } from "react-bootstrap-icons";

const OverviewNav = ({ onViewListClickHandler }) => {
  return (
    <div className="border border-t-0 md:border-0 md:border-b  w-full p-4 pr-8 flex items-center justify-between">
      <div
        className="md:hidden flex items-center justify-between gap-3 cursor-pointer "
        onClick={onViewListClickHandler}
      >
        <ListNested />
        <h1 className="text-sm font-semibold text-gray-700">View List</h1>
      </div>
      <div className="flex items-center justify-between gap-3">
        <ArrowLeft />
        <h1 className="text-sm font-semibold text-gray-700">Prev Company</h1>
      </div>
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-sm font-semibold text-gray-700">Next company</h1>
        <ArrowRight />
      </div>
    </div>
  );
};

export default OverviewNav;
