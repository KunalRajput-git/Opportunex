import { useEffect, useState } from "react";
import CompanyCard from "../components/Card";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Filter from "../components/Filter";
import CompanyContainer from "../components/CompanyContainer";
import CompanyOverview from "../components/CompanyOverview";

const Companies = () => {
  const [isCompanyOverviewVisible, setIsCompanyOverviewVisble] = useState(true);
  const [isCompanyContainerVisible, setIsCompanyContainerVisible] =
    useState(true);

  const [whosActive, setWhoIsActive] = useState(false);
  let toggler = () => {
    if (window.innerWidth > 768) {
      setIsCompanyOverviewVisble(true);
      setIsCompanyContainerVisible(true);
    } else {
      setIsCompanyOverviewVisble(false);
    }
  };

  window.addEventListener("resize", toggler);

  const onCompanyCardClickHandler = () => {
    if (window.innerWidth < 768) {
      setIsCompanyOverviewVisble(true);
      setIsCompanyContainerVisible(false);
    }
  };

  const onViewListClickHandler = () => {
    setIsCompanyOverviewVisble(false);
    setIsCompanyContainerVisible(true);
  };

  useEffect(() => {
    toggler();
  }, []);
  return (
    <>
      <Navbar />
      <div className="md:mt-24">
        <Search />
        <Filter />
        <div className="flex">
          {isCompanyContainerVisible && (
            <CompanyContainer
              onCompanyCardClickHandler={onCompanyCardClickHandler}
            />
          )}
          {isCompanyOverviewVisible && (
            <CompanyOverview onViewListClickHandler={onViewListClickHandler} />
          )}
        </div>
      </div>
    </>
  );
};

export default Companies;
