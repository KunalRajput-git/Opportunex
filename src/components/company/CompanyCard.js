import { useState } from "react";
import {
  ArrowUpRightCircle,
  BalloonHeart,
  BalloonHeartFill,
  DashCircle,
  Heart,
} from "react-bootstrap-icons";

function CompanyCard({ company, onCompanyCardClickHandler }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // hover:scale-105
    <div
      className="relative w-full mt-4 p-4 rounded-lg text-gray-700 bg-white flex justify-between border items-center border-gray-300 
      hover:shadow-lg duration-300"
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

      {/* <div>
        <div
          className={`flex items-center gap-2 ${
            company.status == "applied"
              ? "bg-orange-200"
              : company.status == "not applied"
              ? "bg-red-200"
              : company.status == "scheduled"
              ? "bg-blue-200"
              : company.status == "interviewing"
              ? "bg-green-200"
              : company.status == "pending"
              ? "bg-yellow-200"
              : company.status == "selected"
              ? "bg-teal-200"
              : "bg-gray-200"
          } px-4 py-2 rounded-full font-semibold`}
        > */}
      {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-hourglass-split"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
          </svg> */}
      {/* <h1 className=" sm:block text-sm capitalize">{company.status}</h1>
        </div>
      </div> */}
      <div className="flex gap-6">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg> */}

        <DashCircle size="22" />
        <Heart size="22" />
        <ArrowUpRightCircle size="22" />
      </div>
    </div>
  );
}

export default CompanyCard;
