import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import CompanyContainer from "../components/company/CompanyContainer";
import CompanyOverview from "../components/company/CompanyOverview";
import { fetchCompanies } from "../store/companiesThunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Companies = () => {
  const [isCompanyOverviewVisible, setIsCompanyOverviewVisible] =
    useState(false);
  const [isCompanyContainerVisible, setIsCompanyContainerVisible] =
    useState(true);

  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const companyState = useSelector((state) => state.companySlice);
  const authState = useSelector((state) => state.authSlice);

  useEffect(() => {
    dispatch(
      fetchCompanies(
        setIsLoading,
        authState.user.token,
        companyState.currentPageNo,
        navigate
      )
    );
  }, [companyState.currentPageNo]);

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
            isLoading={isLoading}
            isCompanyContainerVisible={isCompanyContainerVisible}
            onCompanyCardClickHandler={onCompanyCardClickHandler}
          />

          {!isLoading && !companyState.error && (
            <CompanyOverview
              isCompanyOverviewVisible={isCompanyOverviewVisible}
              onViewListClickHandler={onViewListClickHandler}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Companies;
