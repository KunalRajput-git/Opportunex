const Pagination = () => {
  return (
    <div className="flex items-center justify-between mt-6 border-gray-400  px-4">
      <button className=" py-2 px-3 mr-2 text-sm font-semibold text-gray-700 bg-white border border-gray-400 rounded hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:shadow-outline-gray hover:shadow flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        Prev
      </button>
      <p className="text-sm font-semibold text-gray-700">1 of 10</p>
      <button className="py-2 px-3 text-sm font-semibold text-gray-700 bg-white border border-gray-400 rounded hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:shadow-outline-gray hover:shadow flex items-center gap-2">
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
