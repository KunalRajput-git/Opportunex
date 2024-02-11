import { useState } from "react";
import {
  ArrowUpRightCircle,
  BalloonHeart,
  BalloonHeartFill,
  DashCircle,
  Heart,
  HeartFill,
  InfoCircleFill,
  PlusCircle,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";
import { companyActions } from "../../store/companiesSlice";

function CompanyCard({ company, onCompanyCardClickHandler }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();
  let statusColors = {
    applied: "bg-orange-200",
    scheduled: "bg-blue-200",
    interviewing: "bg-green-200",
    pending: "bg-yellow-200",
    selected: "bg-teal-200",
  };

  const companyState = useSelector((state) => state.companySlice);
  const { id } = companyState.selectedCompany[0];

  const onCardClickHandler = () => {
    dispatch(companyActions.setSelectedCompany(company));
  };
  // border-gray-300
  return (
    <div
      className={`relative w-full mt-4 p-4 pr-12 rounded-lg text-gray-700 bg-white flex justify-between items-center hover:shadow-lg duration-300 cursor-pointer ${
        id === company.id ? "border-4 border-indigo-600 shadow-2xl" : "border"
      }`}
      // onClick={onCompanyCardClickHandler}
      onClick={onCardClickHandler}
    >
      {/* <div
        className="absolute right-2 text-xs top-2 text-red-600 cursor-pointer"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Under Verification!"
      >
        <InfoCircleFill size="18" />
        <Tooltip id="my-tooltip" />
      </div> */}

      <div className="flex gap-4 ">
        <div className="border w-12 h-12 rounded-md flex justify-center items-center">
          <img src={company.company_logo} className="w-3/5" />
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-semibold text-lg line-clamp-1 text-indigo-600 capitalize">
              {company.name}
            </h1>
          </div>
          <h1 className="italic text-xs font-bold capitalize">
            {company.type}
          </h1>
        </div>
      </div>

      <div>
        <div
          className={`flex items-center md:gap-2
          ${
            statusColors[company.status] !== undefined
              ? statusColors[company.status]
              : "bg-rd-200"
          }
          px-4 py-2 rounded-full font-semibold`}
        >
          <h1 className=" sm:block text-sm capitalize">{company.status}</h1>
        </div>
      </div>
      <div className="flex gap-3">
        {<PlusCircle size="22" />}
        <Heart size="22" />
        <a
          href={company.careerPageUrl}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          <ArrowUpRightCircle size="22" />
        </a>
      </div>
    </div>
  );
}

export default CompanyCard;
