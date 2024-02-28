import { useState } from "react";
import {
  ArrowUpRightCircle,
  DashCircle,
  PlusCircle,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { companyActions } from "../../store/companiesSlice";
import { MOBILE_DEVICE_WIDTH } from "../../store/constants";
import { Tooltip } from "react-tooltip";
import Spinner from "../Spinner";

function CompanyCard({ company, from, callback, activeCompanyId, isLoading }) {
  const dispatch = useDispatch();
  let statusColors = {
    applied: "bg-orange-200",
    scheduled: "bg-blue-200",
    interviewing: "bg-green-200",
    pending: "bg-yellow-200",
    selected: "bg-teal-200",
  };

  const companyState = useSelector((state) => state.companySlice);
  const { _id } = companyState.selectedCompany && companyState.selectedCompany;

  const onCardClickHandler = () => {
    if (window.innerWidth < MOBILE_DEVICE_WIDTH) {
      dispatch(companyActions.setIsCompanyContainerVisible(false));
    }
    dispatch(companyActions.setSelectedCompany(company));
  };
  return (
    <div
      className={`relative w-full mt-4 p-4 pr-12 rounded-lg text-gray-700 bg-white flex justify-between items-center hover:shadow-lg duration-300 cursor-pointer ${
        _id === company._id ? "border-4 border-indigo-600 shadow-2xl" : "border"
      }`}
      onClick={onCardClickHandler}
    >
      <div className="flex gap-4 ">
        <div className="border w-12 h-12 rounded-md flex justify-center items-center">
          <img src={company.logo_url} className="w-3/5" />
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-semibold text-lg line-clamp-1 text-indigo-600 capitalize">
              {company.name}
            </h1>
          </div>
          <h1 className="italic text-xs font-bold capitalize">
            {company.industry}
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
      <div className="flex gap-3 items-center">
        {from == "company" ? (
          <>
            {companyState.filterBy == "watchlist" ? (
              <>
                {isLoading && activeCompanyId == company._id ? (
                  <Spinner />
                ) : (
                  <DashCircle
                    size="22"
                    title="remove from watchlist"
                    onClick={(e) => {
                      e.stopPropagation();
                      callback(company._id);
                    }}
                  />
                )}
              </>
            ) : (
              <>
                {activeCompanyId == company._id && isLoading ? (
                  <Spinner />
                ) : (
                  <PlusCircle
                    size="22"
                    title="add to watchlist"
                    onClick={(e) => {
                      e.stopPropagation();
                      callback(company._id);
                    }}
                  />
                )}
              </>
            )}
          </>
        ) : (
          <DashCircle size="22" title="remove from watchlist" />
        )}
        <a
          href={company.careerpage_url}
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
