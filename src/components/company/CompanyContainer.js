import Pagination from "../Pagination";
import CompanyCard from "./CompanyCard";
import CompanCardSkeleton from "../company/CompanyCardSkeleton";
import { useSelector } from "react-redux";
const CompanyContainer = ({
  onCompanyCardClickHandler,
  isCompanyContainerVisible,
  isLoading,
}) => {
  // let companies = [
  //   {
  //     id: 2,
  //     company_name: "Atlassian",
  //     career_page_link: "https://www.atlassian.com/company/careers",
  //     company_logo:
  //       "https://wac-cdn.atlassian.com/dam/jcr:616e6748-ad8c-48d9-ae93-e49019ed5259/Atlassian-horizontal-blue-rgb.svg?cdnVersion=1010",
  //     company_short_description:
  //       "Atlassian is a leading provider of software collaboration tools for teams, including Jira, Confluence, Trello, Bitbucket, and other development tools, used worldwide.",
  //     company_type: "Technology",
  //     company_badge_color: "blue",
  //   },
  //   {
  //     id: 3,
  //     company_name: "Microsoft",
  //     career_page_link: "https://careers.microsoft.com/us/en",
  //     company_logo:
  //       "https://media.glassdoor.com/sql/1651/microsoft-squarelogo-1479856042252.png",
  //     company_short_description:
  //       "Microsoft is a multinational technology corporation that produces software, hardware, and electronic devices, including Windows, Office, Surface, Xbox, and more, used globally.",
  //     company_type: "Healthcare",
  //     company_badge_color: "green",
  //   },
  //   {
  //     id: 5,
  //     company_name: "Google",
  //     career_page_link: "https://careers.google.com/",
  //     company_logo:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3piyUaKtGxvAt_eFiHkCabeIv0rYc_0XH9PyLZi4ZfBiQ-YIAEAxwk-VUMMDhtmFgwE&usqp=CAU",
  //     company_short_description:
  //       "Google is a multinational technology company that specializes in internet-related products and services including search engines, online advertising technologies, cloud computing, software, and hardware.",
  //     company_type: "Finance",
  //     company_badge_color: "blue",
  //   },

  //   {
  //     id: 5,
  //     company_name: "Google",
  //     career_page_link: "https://careers.google.com/",
  //     company_logo:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3piyUaKtGxvAt_eFiHkCabeIv0rYc_0XH9PyLZi4ZfBiQ-YIAEAxwk-VUMMDhtmFgwE&usqp=CAU",
  //     company_short_description:
  //       "Google is a multinational technology company that specializes in internet-related products and services including search engines, online advertising technologies, cloud computing, software, and hardware.",
  //     company_type: "Finance",
  //     company_badge_color: "blue",
  //   },

  //   {
  //     id: 5,
  //     company_name: "Google",
  //     career_page_link: "https://careers.google.com/",
  //     company_logo:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3piyUaKtGxvAt_eFiHkCabeIv0rYc_0XH9PyLZi4ZfBiQ-YIAEAxwk-VUMMDhtmFgwE&usqp=CAU",
  //     company_short_description:
  //       "Google is a multinational technology company that specializes in internet-related products and services including search engines, online advertising technologies, cloud computing, software, and hardware.",
  //     company_type: "Finance",
  //     company_badge_color: "blue",
  //   },

  //   {
  //     id: 5,
  //     company_name: "Google",
  //     career_page_link: "https://careers.google.com/",
  //     company_logo:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3piyUaKtGxvAt_eFiHkCabeIv0rYc_0XH9PyLZi4ZfBiQ-YIAEAxwk-VUMMDhtmFgwE&usqp=CAU",
  //     company_short_description:
  //       "Google is a multinational technology company that specializes in internet-related products and services including search engines, online advertising technologies, cloud computing, software, and hardware.",
  //     company_type: "Finance",
  //     company_badge_color: "blue",
  //   },

  //   {
  //     id: 5,
  //     company_name: "Google",
  //     career_page_link: "https://careers.google.com/",
  //     company_logo:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3piyUaKtGxvAt_eFiHkCabeIv0rYc_0XH9PyLZi4ZfBiQ-YIAEAxwk-VUMMDhtmFgwE&usqp=CAU",
  //     company_short_description:
  //       "Google is a multinational technology company that specializes in internet-related products and services including search engines, online advertising technologies, cloud computing, software, and hardware.",
  //     company_type: "Finance",
  //     company_badge_color: "blue",
  //   },
  //   {
  //     id: 5,
  //     company_name: "Google",
  //     career_page_link: "https://careers.google.com/",
  //     company_logo:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3piyUaKtGxvAt_eFiHkCabeIv0rYc_0XH9PyLZi4ZfBiQ-YIAEAxwk-VUMMDhtmFgwE&usqp=CAU",
  //     company_short_description:
  //       "Google is a multinational technology company that specializes in internet-related products and services including search engines, online advertising technologies, cloud computing, software, and hardware.",
  //     company_type: "Finance",
  //     company_badge_color: "blue",
  //   },
  //   {
  //     id: 5,
  //     company_name: "Google",
  //     career_page_link: "https://careers.google.com/",
  //     company_logo:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3piyUaKtGxvAt_eFiHkCabeIv0rYc_0XH9PyLZi4ZfBiQ-YIAEAxwk-VUMMDhtmFgwE&usqp=CAU",
  //     company_short_description:
  //       "Google is a multinational technology company that specializes in internet-related products and services including search engines, online advertising technologies, cloud computing, software, and hardware.",
  //     company_type: "Finance",
  //     company_badge_color: "blue",
  //   },
  // ];

  const companyState = useSelector((state) => state.companySlice);

  console.log(companyState.error);

  return (
    <div
      className={`${
        !isCompanyContainerVisible && "hidden"
      } md:block w-full md:w-2/5 lg:w-1/3 md:overflow-y-scroll bg--50 border-r-2 bg-gray-100`}
    >
      <div className="w-[95%] m-auto pb-4">
        {companyState.error ? (
          <h1 className="w-11/12 m-auto mt-40">{companyState.error}</h1>
        ) : isLoading ? (
          <>
            <CompanCardSkeleton />
            <CompanCardSkeleton />
            <CompanCardSkeleton />
            <CompanCardSkeleton />
            <CompanCardSkeleton />
          </>
        ) : (
          companyState.companies?.map((company) => (
            <CompanyCard
              company={company}
              onCompanyCardClickHandler={onCompanyCardClickHandler}
            />
          ))
        )}

        <Pagination />
      </div>
    </div>
  );
};

export default CompanyContainer;
