import { BoxArrowUpRight, Heart, PlusCircle } from "react-bootstrap-icons";
import AboutCompany from "./AboutCompany";
import CompanyHeader from "./CompanyHeader";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { popConfigs } from "../../configs/popconfig";

const CompanyOverview = ({
  isCompanyOverviewVisible,
  onViewListClickHandler,
}) => {
  window.scroll(0, 0);

  const companyState = useSelector((state) => state.companySlice);
  const authState = useSelector((state) => state.authSlice);
  const { name, websiteUrl, size, description, careerPageUrl } =
    companyState.selectedCompany[0];
  console.log(authState);

  let onPopUp = () => {
    let width = window.height;
    let height = window.width;
    let left = 0;
    let top = 0;
    let options = popConfigs(width, height, left, top);
    window.open(careerPageUrl, "Popup", options);
  };
  return (
    <div
      className={`${
        !isCompanyOverviewVisible && "hidden"
      } md:block w-full md:w-3/5 lg:w-[67%] md:overflow-y-scroll`}
    >
      {!authState.loggedin && (
        <div className="bg-yellow-200 text-yellow-700 font-bold p-4 text-center m-auto">
          "Hey pal, you're not logged in yet. Unlock more companies by{" "}
          <span className="underline">
            <Link to="/signup">creating an account</Link>
          </span>{" "}
          or{" "}
          <span className="underline">
            <Link to="/login">logging</Link>"
          </span>
        </div>
      )}
      <CompanyHeader />
      <div className="w-11/12 m-auto flex gap-4 -mt-4 flex-wrap">
        <button
          onClick={onPopUp}
          className="bg-indigo-600 px-4 py-2 text-white rounded-md flex gap-4 items-center text-sm md:text-lg"
        >
          Pop Openings
          <BoxArrowUpRight />
        </button>
        <button className="bg-indigo-200 px-4 py-2 text-indigo-600 font-semibold rounded-md flex gap-4 items-center text-sm md:text-lg">
          Track
          <PlusCircle />
        </button>
        <button className="text-sm md:text-lg border p-2 md:p-3 rounded-md flex items-center gap-4">
          {/* Favourite this */}
          <Heart />
        </button>
      </div>
      <div className="w-full border-t-2 mt-6"></div>
      <AboutCompany />
    </div>
  );
};

export default CompanyOverview;
