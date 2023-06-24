const Search = ({ isCompanyOverviewVisible }) => {
  return (
    <div
      className={`${
        isCompanyOverviewVisible && "hidden"
      } border-4 flex md:flex w-full rounded-md  p-2 px-4  justify-between items-center bg-white  md:w-2/3 mt-4 md:mb-4  border-indigo-600`}
    >
      <div className="w-4/5">
        <h1 className="text-gray-700 text-sm font-semibold m-auto">
          Search companies
        </h1>
        <input
          placeholder="Enter keyword, category or job title "
          className="w-11/12 outline-none mt-1 bg-white"
        />
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="text-gray-700"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
    </div>
  );
};

export default Search;
