import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { companyActions } from "../store/companiesSlice";

const COMPANIES_PER_REQUEST = 5;

const Pagination = () => {
  const dispatch = useDispatch();
  const totalCompanies = useSelector(
    (state) => state.companySlice?.totalCompanies
  );
  let totalPages;
  if (totalCompanies)
    totalPages = Math.ceil(totalCompanies / COMPANIES_PER_REQUEST);
  const companyState = useSelector((state) => state.companySlice);
  const isUserLoggedin = useSelector((state) => state.authSlice.loggedin);

  const onNextClickHandler = () => dispatch(companyActions.nextPage());

  const onPrevClickHandler = () => dispatch(companyActions.prevPage());

  return (
    <div className="flex items-center justify-between mt-6 border-gray-400  px-4 ">
      <button
        className="py-2 px-3 text-sm text-white font-semibold  bg-indigo-600  rounded flex items-center gap-2 disabled:bg-indigo-400 disabled:cursor-not-allowed"
        onClick={onPrevClickHandler}
        disabled={companyState.currentPageNo == 1 || !isUserLoggedin}
      >
        <ArrowLeft size="18" />
        Prev
      </button>
      <p className="text-sm font-semibold text-gray-700">
        {companyState.currentPageNo} of {totalPages}
      </p>
      <button
        className="py-2 px-3 text-sm text-white font-semibold  bg-indigo-600  rounded flex items-center gap-2 disabled:bg-indigo-400 disabled:cursor-not-allowed"
        onClick={onNextClickHandler}
        disabled={companyState.currentPageNo == totalPages || !isUserLoggedin}
      >
        Next
        <ArrowRight size="18" />
      </button>
    </div>
  );
};

export default Pagination;
