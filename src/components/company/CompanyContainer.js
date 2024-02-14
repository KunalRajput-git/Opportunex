import Pagination from "../Pagination";
import CompanyCard from "./CompanyCard";
import CompanCardSkeleton from "../company/CompanyCardSkeleton";
import { useSelector } from "react-redux";
const CompanyContainer = () => {
  const companyState = useSelector((state) => state.companySlice);

  return (
    <div
      className={`${
        !companyState.isCompanyContainerVisble && "hidden"
      } md:block w-full md:w-2/5 lg:w-1/3 md:overflow-y-scroll border-r-2 bg-gray-100`}
    >
      <div className="w-[95%] m-auto pb-4">
        {companyState.error && (
          <h1 className="w-11/12 m-auto mt-8 mb-8">{companyState.error}</h1>
        )}
        {companyState.isLoading ? (
          <>
            <CompanCardSkeleton />
            {/* <CompanCardSkeleton />
            <CompanCardSkeleton />
            <CompanCardSkeleton />
            <CompanCardSkeleton /> */}
          </>
        ) : (
          companyState?.companies?.map((company) => (
            <CompanyCard company={company} />
          ))
        )}
        {0 < companyState.companies.length && <Pagination />}
      </div>
    </div>
  );
};

export default CompanyContainer;
