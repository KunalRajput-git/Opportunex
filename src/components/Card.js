import { useState } from "react";

function CompanyCard({ company, onCompanyCardClickHandler }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="relative w-full mt-4 p-4 rounded-lg text-gray-700 bg-white flex justify-between border items-center border-gray-300 hover:scale-105 hover:shadow-lg duration-300"
      onClick={onCompanyCardClickHandler}
    >
      <div className="flex gap-4">
        <div className="border w-12 h-12 rounded-md flex justify-center items-center">
          <img src={company.company_logo} className="w-3/5" />
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-semibold text-lg line-clamp-1 text-indigo-600">
              {company.company_name}
            </h1>
          </div>
          <h1 className="italic text-sm">{company.company_type}</h1>
        </div>
      </div>

      <div className="flex gap-6">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-heart"
          viewBox="0 0 16 16"
        >
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
        </svg>

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
      </div>
    </div>
  );
}

export default CompanyCard;
