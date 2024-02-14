import { useDispatch, useSelector } from "react-redux";
import { companyActions } from "../../store/companiesSlice";
import { fetchSearchedCompanies } from "../../store/companiesThunks";
import { useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const companyState = useSelector((state) => state.companySlice);
  const authState = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();

  const onSearchHandler = (searchtext) => {
    setSearchText(searchtext);
    if (searchtext == "") dispatch(companyActions.setSearchedCompanies([]));
    if (searchtext.length && authState.loggedin)
      dispatch(fetchSearchedCompanies(searchtext, authState.user.token));
  };

  const onSearchSelectClickHandler = (company) => {
    dispatch(companyActions.setSelectedCompany(company));
    dispatch(companyActions.setSearchedCompanies([]));
    setSearchText("");
  };

  return (
    <div
      className={`${
        !companyState.isCompanyContainerVisble && "hidden"
      } md:block lg:-mt-3 p-4 gap-4 md:gap-0 flex justify-between items-center md:pt-24 lg:pt-28`}
    >
      <div className="w-full relative">
        <h1 className="text-gray-700 text-sm font-semibold m-auto">
          Search companies
        </h1>
        <input
          onChange={(e) => onSearchHandler(e.target.value)}
          type="search"
          placeholder="Enter company name"
          className="w-full outline-none mt-1 bg-white focus:text-indigo-600 focus:font-bold"
          value={searchText}
        />
        {0 < companyState.searchedCompanies.length && (
          <div className="border absolute bg-white w-full left-0 mt-2 z-10 rounded-md shadow-lg">
            {companyState.searchedCompanies.map((company) => (
              <div
                className="border-b-2 p-2 text-indigo-600 font-bold"
                onClick={() => onSearchSelectClickHandler(company)}
              >
                {company.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
