import { useState } from "react";
import CompanyCard from "../components/Card";
import Navbar from "../components/Navbar";

const Companies = () => {
  const [isDrop, setIsDrop] = useState(false);

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
      company_badge_color: "blue",
    },
    {
      id: 3,
      company_name: "Microsoft",
      career_page_link: "https://careers.microsoft.com/us/en",
      company_logo:
        "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
      company_short_description:
        "Microsoft is a multinational technology corporation that produces software, hardware, and electronic devices, including Windows, Office, Surface, Xbox, and more, used globally.",
      company_type: "Healthcare",
      company_badge_color: "green",
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
      company_badge_color: "blue",
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
      company_badge_color: "blue",
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
      company_badge_color: "blue",
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
      company_badge_color: "blue",
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
      company_badge_color: "blue",
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
      company_badge_color: "blue",
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
      company_badge_color: "blue",
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
      company_badge_color: "blue",
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
      company_badge_color: "blue",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="md:mt-24">
        <div className="border w-full border-b-0 p-2 px-4 flex justify-between items-center">
          <div className="w-4/5">
            <h1 className="text-gray-700 text-sm font-semibold m-auto">
              Search companies
            </h1>
            <input
              placeholder="Enter keyword, category or job title"
              className="w-11/12 outline-none mt-1"
            />
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="text-gray-700"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
        </div>
        <div className="flex  flex-col md:flex-row">
          <div className="w-full md:w-1/3 p-4 bg--600 flex justify-between border border-r-0 relative">
            <h1 className="text-gray-700 font-semibold">Filter by Category</h1>
            <button
              className="text-gray-700"
              onClick={() => setIsDrop(!isDrop)}
            >
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
                  d="M5 8l7.5 7.5L19 8"
                />
              </svg>
            </button>
            {isDrop ? (
              <div className="absolute top-14 z-10 h-64 bg-white w-full border right-0 ">
                <input type="checkbox" className="text-xl" />
              </div>
            ) : null}
          </div>
          <div className="border w-full md:w-[67%] flex justify-between py-4 md:py-0 px-6 items-center border-t-0 md:border-t">
            <div>
              <h1 className="font-semibold bg-indigo-200 px-4 py-1 text-indigo-600">
                Reset
              </h1>
            </div>
            <div className="flex gap-3 items-center">
              <div className="bg-indigo-200 w-8 h-8 rounded-full text-indigo-600 flex items-center justify-center">
                <h1 className="font-semibold">0</h1>
              </div>
              <h1 className="text-gray-700 font-semibold">
                Favourite Companies
              </h1>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full lg:w-1/3 lg:h-[71vh] overflow-y-scroll bg--50 border-r-2">
            <div className="w-11/12 m-auto">
              {companies.map((company) => (
                // <div className="w-full mt-4 p-4 rounded-lg text-gray-700 bg-white shadow-sm flex justify-between">
                //   <div>
                //     <h1 className="font-semibold line-clamp-1 text-indigo-600">
                //       {company.company_name}
                //     </h1>
                //     <h1 className="italic text-sm">{company.company_type}</h1>
                //   </div>
                //   <div className="border w-12 h-12 rounded-md flex justify-center items-center">
                //     <img src={company.company_logo} className="w-3/5 " />
                //   </div>
                // </div>
                <CompanyCard company={company} />
              ))}
            </div>
            <div>Some ortunity</div>
          </div>
          <div className="w-[67%] overflow-y-scroll h-[71vh] hidden lg:block">
            <div className="border-b w-full p-4 pr-8 flex items-center justify-end">
              <h1 className="text-sm font-semibold text-gray-700">
                Next company
              </h1>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="w-6 h-6 text-gray-700 text-right"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 12l-7.5 -7.5M20 12l-7.5 7.5"
                />
              </svg>
            </div>
            <div className="py-8  border-b">
              <div className="w-11/12 m-auto">
                <h1 className="text-2xl font-bold">Microsoft</h1>
                <h3 className="text-sm mt-1 italic text-gray-700">
                  Technnology
                </h3>
                <div className="flex gap-4">
                  <button className="bg-indigo-600 px-4 py-2 text-white mt-4">
                    Visit Career Page
                  </button>
                  <button className="bg-indigo-200 px-4 py-2 text-indigo-600 font-semibold mt-4">
                    Add to Tracker
                  </button>

                  <button className="px-4 py-2 text-gray-700 mt-4">
                    Favourite this company
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="ml-4 inline-block"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-11/12 m-auto mt-4">
              <h1 className="text-lg font-semibold">Company overview</h1>
              <p className="mt-2 text-gray-700">
                The power of teamwork Behind every great human achievement,
                there is a team. From medicine and space travel, to disaster
                response and pizza deliveries, our products help teams all over
                the planet advance humanity through the power of software. Our
                The power of teamwork Behind every great human achievement,
                there is a team. From medicine and space travel, to disaster
                response and pizza deliveries, our products help teams all over
                the planet advance humanity through the power of software.
                OurThe power of teamwork Behind every great human achievement,
                there is a team. From medicine and space travel, to disaster
                response and pizza deliveries, our products help teams all over
                the planet advance humanity through the power of software.
                OurThe power of teamwork Behind every great human achievement,
                there is a team. From medicine and space travel, to disaster
                response and pizza deliveries, our products help teams all over
                the planet advance humanity through the power of software.
                OurThe power of teamwork Behind every great human achievement,
                there is a team. From medicine and space travel, to disaster
                response and pizza deliveries, our products help teams all over
                the planet advance humanity through the power of software.
                OurThe power of teamwork Behind every great human achievement,
                there is a team. From medicine and space travel, to disaster
                response and pizza deliveries, our products help teams all over
                the planet advance humanity through the power of software.
                OurThe power of teamwork Behind every great human achievement,
                there is a team. From medicine and space travel, to disaster
                response and pizza deliveries, our products help teams all over
                the planet advance humanity through the power of software.
                OurThe power of teamwork Behind every great human achievement,
                there is a team. From medicine and space travel, to disaster
                response and pizza deliveries, our products help teams all over
                the planet advance humanity through the power of software. Our
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;
