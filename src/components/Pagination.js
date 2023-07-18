import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between mt-6 border-gray-400  px-4">
      <button className=" py-2 px-3 mr-2 text-sm font-semibold text-gray-700 bg-white border border-gray-400 rounded hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:shadow-outline-gray hover:shadow flex items-center gap-3">
        <ArrowLeft size="18" />
        Prev
      </button>
      <p className="text-sm font-semibold text-gray-700">1 of 10</p>
      <button className="py-2 px-3 text-sm font-semibold text-gray-700 bg-white border border-gray-400 rounded hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:shadow-outline-gray hover:shadow flex items-center gap-2">
        Next
        <ArrowRight size="18" />
      </button>
    </div>
  );
};

export default Pagination;
