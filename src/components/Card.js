import { useState } from "react";

function CompanyCard({ company }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative w-full mt-4 p-4 rounded-lg text-gray-700 bg-white shadow-sm flex justify-between border ">
      <div>
        <div className="flex items-center">
          <h1 className="font-semibold line-clamp-1 text-indigo-600">
            {company.company_name}
          </h1>
        </div>
        <h1 className="italic text-sm">{company.company_type}</h1>
      </div>
      <div className="border w-12 h-12 rounded-md flex justify-center items-center">
        <img src={company.company_logo} className="w-3/5" />
      </div>
      <div className="absolute top-0 right-0 mt-4 mr-4 flex items-center space-x-2">
        {/* <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h8v8H3zM13 3h8v8h-8zM13 13h8v8h-8zM3 13h8v8H3z"
            />
          </svg>
        </button> */}
      </div>
    </div>
  );
}

export default CompanyCard;
