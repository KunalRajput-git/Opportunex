import Pagination from "../Pagination";
import CompanyCard from "./CompanyCard";
import CompanCardSkeleton from "../company/CompanyCardSkeleton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCompanyToWatchlist,
  removeCompanyFromWatchlist,
} from "../../store/authThunks";
import NoDataImg from "../../assets/no_application2.png";
import { useState } from "react";

const CompanyContainer = () => {
  const companyState = useSelector((state) => state.companySlice);
  const authState = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [activeCompanyId, setActiveCompanyId] = useState(null);

  const addToWatchlistHandler = (companyId) => {
    setActiveCompanyId(companyId);
    if (authState.loggedin) {
      dispatch(
        addCompanyToWatchlist(
          authState.user.token,
          authState.user._id,
          companyId,
          companyState.filterBy,
          companyState.currentPageNo,
          toast,
          setIsLoading,
          setActiveCompanyId
        )
      );
    } else {
      toast.info("you are not loggedin pal!");
    }
  };

  const removeFromWatchlistHandler = (companyId) => {
    setActiveCompanyId(companyId);

    dispatch(
      removeCompanyFromWatchlist(
        authState.user.token,
        authState.user._id,
        companyId,
        companyState.filterBy,
        companyState.currentPageNo,
        toast,
        setIsLoading,
        setActiveCompanyId
      )
    );
  };

  return (
    <div className="w-[95%] m-auto">
      {companyState.error && (
        <h1 className="w-11/12 m-auto mt-8 mb-8">{companyState.error}</h1>
      )}
      {companyState.isLoading ? (
        <>
          <CompanCardSkeleton />
          <CompanCardSkeleton />
          <CompanCardSkeleton />
          <CompanCardSkeleton />
          <CompanCardSkeleton />
        </>
      ) : (
        <>
          {companyState.companies.length ? (
            companyState.companies?.map((company) => (
              <CompanyCard
                company={company}
                from="company"
                activeCompanyId={activeCompanyId}
                isLoading={isLoading}
                callback={
                  companyState.filterBy == "watchlist"
                    ? removeFromWatchlistHandler
                    : addToWatchlistHandler
                }
              />
            ))
          ) : (
            <img src={NoDataImg} className="m-auto mt-14"/>
          )}
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default CompanyContainer;
