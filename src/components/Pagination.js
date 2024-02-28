import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { companyActions } from "../store/companiesSlice";
import { fetchCompanies } from "../store/companiesThunks";
import { useNavigate } from "react-router-dom";

const COMPANIES_PER_REQUEST = 5;

const Pagination = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalCompanies = useSelector(
    (state) => state.companySlice?.totalCompanies
  );
  let totalPages;
  if (totalCompanies)
    totalPages = Math.ceil(totalCompanies / COMPANIES_PER_REQUEST);
  const companyState = useSelector((state) => state.companySlice);
  const authState = useSelector((state) => state.authSlice);

  let isPrevDisabled =
    companyState.currentPageNo == 1 ||
    !authState.user.loggedin ||
    companyState.error;

  let isNextDisabled =
    companyState.currentPageNo == totalPages ||
    !authState.user.loggedin ||
    companyState.error;

  const onNextClickHandler = () => {
    dispatch(companyActions.nextPage());
    dispatch(
      fetchCompanies(
        authState.user.token,
        companyState.currentPageNo + 1,
        navigate
      )
    );
  };

  const onPrevClickHandler = () => {
    dispatch(companyActions.prevPage());
    dispatch(
      fetchCompanies(
        authState.user.token,
        companyState.currentPageNo - 1,
        navigate
      )
    );
  };

  return (
    <div className="flex items-center justify-between border-gray-400 bg-white p-4 absolute w-full bottom-0">
      <button
        className="py-2 px-3 text-sm text-white font-semibold  bg-indigo-600  rounded flex items-center gap-2 disabled:bg-indigo-400 disabled:cursor-not-allowed"
        onClick={onPrevClickHandler}
        disabled={isPrevDisabled}
      >
        <ArrowLeft size="18" />
        Prev
      </button>
      <p className="text-sm font-semibold text-gray-700">
        {companyState.currentPageNo || 1} of {totalPages || 1}
      </p>
      <button
        className="py-2 px-3 text-sm text-white font-semibold  bg-indigo-600  rounded flex items-center gap-2 disabled:bg-indigo-400 disabled:cursor-not-allowed"
        onClick={onNextClickHandler}
        disabled={isNextDisabled}
      >
        Next
        <ArrowRight size="18" />
      </button>
    </div>
  );
};

export default Pagination;
