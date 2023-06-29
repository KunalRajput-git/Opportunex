import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import CompanyCard from "../components/Card";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import PIGION_IMG from "../assets/Pigion.png";
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
      <div className="flex">
        <div className="w-[30%] text-white bg-indigo-800">
          <div className="mt-28 w-11/12 m-auto">
            {/* <h2 className="text-3xl text-center">Microsoft Corporation</h2>
            <h2>Role Title : SDE - 1</h2>
            <h2>Salary/Copensation : 1 lakh/Month</h2>
            <h2>Post Link : https://linkedin.post/22332</h2>
            <h2>Applied Date : 2 January 2019</h2> 
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="flex text-lg font-semibold items-center justify-between">
                  Contacts
                </h2>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </div>
              <div className="flex justify-between items-center border p-2 rounded-md mt-2">
                <div>
                  <h1></h1>Abhina u<h1 />
                  <h3>9899300220</h3>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </div>
            </div> */}
            {/* <h2>Status : </h2>
            <select className="text-black py-2 outline-none px-4 w-full text-lg rounded-md border">
              <option>Pending</option>
              <option>Scheduled</option>
              <option>Declined</option>
            </select> */}

            {/* <button className="w-full text-white mt-4 p-4 bg-indigo-600 font-semibold rounded-md">
              Save
            </button> */}
            <p className="text-xl text-center text-white">
              {/* Good Morning! <br />{" "}
              <span className="font-semibold text-2xl"> Kunal Rajput</span>
             */}
             You have not selected any job please select one or add new
            </p>
            {/* <img className="w-1/2  m-auto mt-8" src={PIGION_IMG} /> */}
          </div>
        </div>
        <div className="w-[70%] h-full">
          <div className="mt-24 p-4 flex justify-between items-center">
            <div className="-mt-2">
              <h1 className="text-xl font-semibold">Applied Jobs</h1>
              <p className="text-gray-700 text-sm font-semibold">
                Tracker | Applied Jobs
              </p>
            </div>

            <input
              type="search"
              className="border w-1/2 p-3 rounded-md"
              placeholder="Enter keyword, category or job title"
            />
            <button className="bg-indigo-600 px-4 py-3  text-white font-semibold flex items-center gap-3 rounded-md -mt-2">
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
          <Filter
            mainHeading="Status"
            lists={["Selected", "Scheduled", "Pending", "Declined"]}
          />

          <div className="flex justify-between">
            <div className="w-full h-[68vh] overflow-x-hidden overflow-scroll  bg--100">
              <div className=" m-auto px-4 pb-4">
                {companies.map((company) => (
                  <CompanyCard company={company} />
                ))}
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
