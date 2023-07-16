import AboutCompany from "../company_components/AboutCompany";
import CompanyHeader from "../company_components/CompanyHeader";
import OverviewNav from "../company_components/OverviewNav";

const CompanyOverview = ({
  isCompanyOverviewVisible,
  onViewListClickHandler,
}) => {
  window.scroll(0, 0);
  return (
    <div
      className={`${
        !isCompanyOverviewVisible && "hidden"
      } md:block w-full md:w-3/5 lg:w-[67%] md:overflow-y-scroll md:h-[81vh]`}
    >
      <OverviewNav onViewListClickHandler={onViewListClickHandler} />
      <CompanyHeader />
      <div className="w-11/12 m-auto flex gap-4 -mt-4 flex-wrap">
        <button className="bg-indigo-600 px-4 py-2 text-white rounded-md flex gap-4 items-center text-sm md:text-lg">
          Visit Career Page
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-arrow-up-right-circle"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
            />
          </svg>
        </button>
        <button className="bg-indigo-200 px-4 py-2 text-indigo-600 font-semibold rounded-md flex gap-4 items-center text-sm md:text-lg">
          Track
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
        <button className="text-sm md:text-lg border p-2 md:p-3 rounded-md">
          Favourite this
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="ml-4 inline-block"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </button>
      </div>
      <div className="w-full border-t-2 mt-6"></div>
      <AboutCompany />
    </div>
  );
};

export default CompanyOverview;
