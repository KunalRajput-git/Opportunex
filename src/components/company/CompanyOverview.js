import { BoxArrowUpRight, Heart, PlusCircle } from "react-bootstrap-icons";
import AboutCompany from "./AboutCompany";
import CompanyHeader from "./CompanyHeader";
import OverviewNav from "./OverviewNav";

const CompanyOverview = ({
  isCompanyOverviewVisible,
  onViewListClickHandler,
}) => {
  window.scroll(0, 0);
  return (
    <div
      className={`${
        !isCompanyOverviewVisible && "hidden"
      } md:block w-full md:w-3/5 lg:w-[67%] md:overflow-y-scroll md:h-[69vh]`}
    >
      <OverviewNav onViewListClickHandler={onViewListClickHandler} />
      <CompanyHeader />
      <div className="w-11/12 m-auto flex gap-4 -mt-4 flex-wrap">
        <button className="bg-indigo-600 px-4 py-2 text-white rounded-md flex gap-4 items-center text-sm md:text-lg">
          Visit Career Page
          <BoxArrowUpRight />
        </button>
        <button className="bg-indigo-200 px-4 py-2 text-indigo-600 font-semibold rounded-md flex gap-4 items-center text-sm md:text-lg">
          Track
          <PlusCircle />
        </button>
        <button className="text-sm md:text-lg border p-2 md:p-3 rounded-md flex items-center gap-4">
          Favourite this
         <Heart/>
        </button>
      </div>
      <div className="w-full border-t-2 mt-6"></div>
      <AboutCompany />
    </div>
  );
};

export default CompanyOverview;
