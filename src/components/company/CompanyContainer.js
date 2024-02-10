import Pagination from "../Pagination";
import CompanyCard from "./CompanyCard";
import CompanCardSkeleton from "../company/CompanyCardSkeleton";
import { useSelector } from "react-redux";
const CompanyContainer = ({
  onCompanyCardClickHandler,
  isCompanyContainerVisible,
  isLoading,
}) => {
  const companyState = useSelector((state) => state.companySlice);

  return (
    <div
      className={`${
        !isCompanyContainerVisible && "hidden"
      } md:block w-full md:w-2/5 lg:w-1/3 md:overflow-y-scroll bg--50 border-r-2 bg-gray-100`}
    >
      <div className="w-[95%] m-auto pb-4">
        {companyState.error ? (
          <h1 className="w-11/12 m-auto mt-40">{companyState.error}</h1>
        ) : isLoading ? (
          <>
            <CompanCardSkeleton />
            <CompanCardSkeleton />
            <CompanCardSkeleton />
            <CompanCardSkeleton />
            <CompanCardSkeleton />
          </>
        ) : (
          companyState.companies?.map((company) => (
            <CompanyCard
              company={company}
              onCompanyCardClickHandler={onCompanyCardClickHandler}
            />
          ))
        )}

        {0 < companyState.companies.length && <Pagination />}
      </div>
    </div>
  );
};

export default CompanyContainer;
