import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import CompanyContainer from "../components/company/CompanyContainer";
import CompanyOverview from "../components/company/CompanyOverview";
import { fetchCompanies } from "../store/companiesThunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Search from "../components/company/Search";

const Companies = () => {
  const [isCompanyOverviewVisible, setIsCompanyOverviewVisible] =
    useState(false);
  const [isCompanyContainerVisible, setIsCompanyContainerVisible] =
    useState(true);

  // const [isLoading, setIsLoading] = useState(false);
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
    if (!companyState.companies.length)
      dispatch(
        fetchCompanies(
          authState.user.token,
          companyState.currentPageNo,
          navigate
        )
      );
  }, []);

  return (
    <>
      <div className="md:h-screen overflow-hidden md:pb-56">
        <Navbar />
        <Search />
        <Filter
          mainHeading="Category"
          isCompanyOverviewVisible={isCompanyOverviewVisible}
        />

        <div className="flex h-full">
          <CompanyContainer
            isCompanyContainerVisible={isCompanyContainerVisible}
            onCompanyCardClickHandler={onCompanyCardClickHandler}
          />

          {!companyState.isLoading && !companyState.error && (
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
