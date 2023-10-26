import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import CompanyContainer from "../components/company/CompanyContainer";
import CompanyOverview from "../components/company/CompanyOverview";
const Companies = () => {
  const [isCompanyOverviewVisible, setIsCompanyOverviewVisible] =
    useState(false);
  const [isCompanyContainerVisible, setIsCompanyContainerVisible] =
    useState(true);

  const onCompanyCardClickHandler = () => {
    if (window.innerWidth < 768) {
      setIsCompanyOverviewVisible(true);
      setIsCompanyContainerVisible(false);
    }
  };
  const onViewListClickHandler = () => {
    setIsCompanyOverviewVisible(false);
    setIsCompanyContainerVisible(true);
  };

  return (
    <>
      <div className="md:h-screen overflow-hidden md:pb-56">
        <Navbar />

        <div
          className={`${
            isCompanyOverviewVisible && "hidden"
          } md:block lg:-mt-3 p-4 gap-4 md:gap-0 flex justify-between items-center md:pt-24 lg:pt-28`}
        >
          <div className="w-full">
            <h1 className="text-gray-700 text-sm font-semibold m-auto">
              Search companies
            </h1>
            <input
              type="search"
              placeholder="Enter keyword, category or job title"
              className="w-full outline-none mt-1 bg-white focus:text-indigo-600 focus:font-bold"
            />
          </div>
        </div>

        <Filter
          mainHeading="Category"
          isCompanyOverviewVisible={isCompanyOverviewVisible}
        />

        <div className="flex h-full">
          <CompanyContainer
            isCompanyContainerVisible={isCompanyContainerVisible}
            onCompanyCardClickHandler={onCompanyCardClickHandler}
          />

          <CompanyOverview
            isCompanyOverviewVisible={isCompanyOverviewVisible}
            onViewListClickHandler={onViewListClickHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Companies;
