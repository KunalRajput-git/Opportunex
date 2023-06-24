import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import CompanyCard from "../components/Card";
const Dashboard = () => {
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
        "https://media.glassdoor.com/sql/1651/microsoft-squarelogo-1479856042252.png",
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
  ];
  return (
    <>
      <Navbar />
      <div className="h-screen flex">
        <div className="w-[30%]  flex items-center justify-center bg-indigo-950 text-white"></div>
        <div className="w-[70%] h-full">
          <div className="mt-24 border-b-2 p-4 flex justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Applied Jobs</h1>
              <p className="text-gray-700 font-semibold">
                Tracker | Applied Jobs
              </p>
            </div>
            <button className="bg-indigo-600 px-6  text-white font-semibold flex items-center gap-3">
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
              Add New
            </button>
          </div>

          <div className="flex justify-between">
            <div className="w-1/2  border h-[76vh] overflow-scroll border-t-0">
              <div className="w-11/12 m-auto">
                {companies.map((company) => (
                  <CompanyCard company={company} />
                ))}
              </div>
            </div>
            <div className="w-[48%] h-[76vh] overflow-scroll">
              <h1 className="text-xl font-semibold mt-4">Statistics</h1>
              <div className="w-11/12 h-40 mt-4 rounded-md bg-green-200">
                <h1 className="text-xl">Selected</h1>
              </div>
              <div className="w-11/12 h-40 mt-4 rounded-md bg-yellow-200"></div>
              <div className="w-11/12 h-40 mt-4 rounded-md bg-red-200"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
