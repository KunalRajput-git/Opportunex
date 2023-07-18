import NO_APPLICATION1 from "../../assets/no_application1.png";

import Filter from "../Filter";
import CompanyCard from "../company/CompanyCard";
import NoData from "./NoData";
import CompanyCardSkeleton from "../company/CompanyCardSkeleton";
import { PlusCircle, PlusCircleFill } from "react-bootstrap-icons";
let companies = [
  {
    id: 2,
    company_name: "Atlassian",
    career_page_link: "https://www.atlassian.com/company/careers",
    company_logo:
      "https://wac-cdn.atlassian.com/dam/jcr:616e6748-ad8c-48d9-ae93-e49019ed5259/Atlassian-horizontal-blue-rgb.svg?cdnVersion=1010",
    company_short_description:
      "Atlassian is a leading provider of software collaboration tools for teams, including Jira, Confluence, Trello, Bitbucket, and other development tools, used worldwide.",
    company_type: "Technology",
    status: "applied",
  },
  {
    id: 3,
    company_name: "Microsoft",
    career_page_link: "https://careers.microsoft.com/us/en",
    company_logo:
      "https://media.glassdoor.com/sql/1651/microsoft-squarelogo-1479856042252.png",
    company_short_description:
      "Microsoft is a multinational technology corporation that produces software, hardware, and electronic devices, including Windows, Office, Surface, Xbox, and more, used globally.",
    company_type: "Healthcare",
    status: "added",
  },
  {
    id: 5,
    company_name: "Google",
    career_page_link: "https://careers.google.com/",
    company_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3piyUaKtGxvAt_eFiHkCabeIv0rYc_0XH9PyLZi4ZfBiQ-YIAEAxwk-VUMMDhtmFgwE&usqp=CAU",
    company_short_description:
      "Google is a multinational technology company that specializes in internet-related products and services including search engines, online advertising technologies, cloud computing, software, and hardware.",
    company_type: "Finance",
    status: "scheduled",
  },

  {
    id: 5,
    company_name: "Google",
    career_page_link: "https://careers.google.com/",
    company_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3piyUaKtGxvAt_eFiHkCabeIv0rYc_0XH9PyLZi4ZfBiQ-YIAEAxwk-VUMMDhtmFgwE&usqp=CAU",
    company_short_description:
      "Google is a multinational technology company that specializes in internet-related products and services including search engines, online advertising technologies, cloud computing, software, and hardware.",
    company_type: "Finance",
    status: "interviewing",
  },

  {
    id: 5,
    company_name: "Google",
    career_page_link: "https://careers.google.com/",
    company_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3piyUaKtGxvAt_eFiHkCabeIv0rYc_0XH9PyLZi4ZfBiQ-YIAEAxwk-VUMMDhtmFgwE&usqp=CAU",
    company_short_description:
      "Google is a multinational technology company that specializes in internet-related products and services including search engines, online advertising technologies, cloud computing, software, and hardware.",
    company_type: "Finance",
    status: "pending",
  },

  {
    id: 5,
    company_name: "Google",
    career_page_link: "https://careers.google.com/",
    company_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3piyUaKtGxvAt_eFiHkCabeIv0rYc_0XH9PyLZi4ZfBiQ-YIAEAxwk-VUMMDhtmFgwE&usqp=CAU",
    company_short_description:
      "Google is a multinational technology company that specializes in internet-related products and services including search engines, online advertising technologies, cloud computing, software, and hardware.",
    company_type: "Finance",
    status: "selected",
  },

  {
    id: 5,
    company_name: "Google",
    career_page_link: "https://careers.google.com/",
    company_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3piyUaKtGxvAt_eFiHkCabeIv0rYc_0XH9PyLZi4ZfBiQ-YIAEAxwk-VUMMDhtmFgwE&usqp=CAU",
    company_short_description:
      "Google is a multinational technology company that specializes in internet-related products and services including search engines, online advertising technologies, cloud computing, software, and hardware.",
    company_type: "Finance",
    status: "declined",
  },
  {
    id: 5,
    company_name: "Google",
    career_page_link: "https://careers.google.com/",
    company_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3piyUaKtGxvAt_eFiHkCabeIv0rYc_0XH9PyLZi4ZfBiQ-YIAEAxwk-VUMMDhtmFgwE&usqp=CAU",
    company_short_description:
      "Google is a multinational technology company that specializes in internet-related products and services including search engines, online advertising technologies, cloud computing, software, and hardware.",
    company_type: "Finance",
    status: "pending",
  },
  {
    id: 5,
    company_name: "Google",
    career_page_link: "https://careers.google.com/",
    company_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3piyUaKtGxvAt_eFiHkCabeIv0rYc_0XH9PyLZi4ZfBiQ-YIAEAxwk-VUMMDhtmFgwE&usqp=CAU",
    company_short_description:
      "Google is a multinational technology company that specializes in internet-related products and services including search engines, online advertising technologies, cloud computing, software, and hardware.",
    company_type: "Finance",
    status: "applied",
  },
];

const UserApplications = () => {
  return (
    <>
      <div className="p-4 gap-4 md:gap-0 flex justify-between items-center md:pt-24 lg:pt-28">
        <div className="flex-shrink-0">
          <h1 className="text-xl font-semibold">Applied Jobs</h1>
          <p className="text-gray-700 text-sm font-semibold">
            Tracker | Applied Jobs
          </p>
        </div>

        <input
          type="search"
          className="border hidden md:block md:w-1/2 p-3 rounded-md outline-none focus:ring focus:ring-indigo-600 focus:font-semibold focus:text-indigo-600"
          placeholder="Enter keyword, category or job title"
        />

        <button className="bg-indigo-600 px-4 py-3  flex  text-white font-semibold  items-center gap-3 rounded-md">
          <PlusCircle size="20" />
        </button>
      </div>
      <div className=" md:hidden w-11/12 m-auto mb-4">
        <input
          type="search"
          className="border w-full p-3 rounded-md  outline-none focus:ring focus:ring-indigo-600 focus:font-semibold focus:text-indigo-600"
          placeholder="Enter keyword, category or job title"
        />
      </div>
      <Filter
        mainHeading="Status"
        lists={[
          "Applied",
          "Not Applied",
          "Scheduled",
          "Interviewing",
          "Pending",
          "Selected",
          "Declined",
        ]}
      />

      <div className="flex justify-between">
        <div className="md:h-[68vh] w-full md:overflow-x-hidden md:overflow-scroll">
          <div className="m-auto px-4 pb-4">
            {companies.map((company) => (
              <CompanyCard company={company} />
            ))}

            {/*
            <CompanyCardSkeleton />
            <CompanyCardSkeleton />
            <CompanyCardSkeleton />
            <CompanyCardSkeleton />
            <CompanyCardSkeleton />
	  */}

            {/*<NoData
              img={NO_APPLICATION1}
              heading="You have currently no applications to show"
              action_text="Application"
            />*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserApplications;
