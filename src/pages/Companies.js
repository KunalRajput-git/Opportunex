import { useEffect, useState } from "react";
import CompanyCard from "../components/Card";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Filter from "../components/Filter";
import CompanyContainer from "../components/CompanyContainer";
import CompanyOverview from "../components/CompanyOverview";
import Footer from "../components/Footer";
import IMG4 from "../assets/img4.png";
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
      <Navbar />

      <div className="mt-24 w-full flex justify-between bg--600 px-12 py-8">
        <div className="w-4/5 mt-4">
          <h1 className="font-bold text-6xl text-gray-700">
            Find your next <span className="text-indigo-600">Dream</span> job.
          </h1>
          <p className="w-4/5  mt-8 text-xl font-semibold text-gray-500">
            "Opportunex: Your ultimate career companion. Explore top companies
            like Microsoft, Google and Atlassian effortlessly with our intuitive
            tracker and discover your dream job today!"
          </p>

          <Search isCompanyOverviewVisible={isCompanyOverviewVisible} />
        </div>
        <div className="w-1/4">
          <img src={IMG4}/>
        </div>
      </div>
      <div className="">
        <Filter isCompanyOverviewVisible={isCompanyOverviewVisible} />

        <div className="flex">
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
