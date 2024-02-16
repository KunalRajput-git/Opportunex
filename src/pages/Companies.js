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
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <div className="md:h-screen overflow-hidden md:pb-60">
        <Navbar />
        <Search />
        <Filter mainHeading="Category" />
        <div className="flex h-full">
          <CompanyContainer />
          {0 < companyState.companies.length && <CompanyOverview />}
        </div>
      </div>
    </>
  );
};

export default Companies;
