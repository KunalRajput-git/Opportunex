import img1 from "./assets/tower_research.png";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Card from "./components/Card";
import lock from "./assets/lock.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  let companies = [
    {
      id: 1,
      company_name: "Tower Research",
      career_page_link: "https://www.tower-research.com/careers/",
      company_logo: `${img1}`,
      company_short_description:
        "Tower Research is a prominent quantitative trading firm that uses advanced technology and algorithms for trading various financial instruments in global markets.",
      company_type: "Technology",
      company_badge_color: "red",
    },
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
      company_type: "Technology",
      company_badge_color: "green",
    },
    {
      id: 4,
      company_name: "Salesforce",
      career_page_link: "https://www.salesforce.com/company/careers/",
      company_logo:
        "https://www.salesforce.com/content/dam/www/ocms/common/assets/images/form/salesforce-logo-122x86.png",
      company_short_description:
        "Salesforce is a cloud-based technology company that offers customer relationship management (CRM) solutions to businesses of all sizes.",
      company_type: "Healthcare",
      company_badge_color: "yellow",
    },
    {
      id: 5,
      company_name: "Google",
      career_page_link: "https://careers.google.com/",
      company_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3piyUaKtGxvAt_eFiHkCabeIv0rYc_0XH9PyLZi4ZfBiQ-YIAEAxwk-VUMMDhtmFgwE&usqp=CAU",
      company_short_description:
        "Google is a multinational technology company that specializes in internet-related products and services including search engines, online advertising technologies, cloud computing, software, and hardware.",
      company_type: "Technology",
      company_badge_color: "blue",
    },
    {
      id: 6,
      company_name: "Alphonso",
      career_page_link: "https://alphonso.tv/careers/",
      company_logo:
        "https://alphonso.tv/wp-content/uploads/Alphonso-Social-Standard.jpg",
      company_short_description:
        "Alphonso is a cross-platform solution that offers TV data insights and advertising services for brands and advertising agencies worldwide.",
      company_type: "Technology",
      company_badge_color: "red",
    },
  ];

  return (
    <>
      <Navbar />
      <Header />
      <Search />
      <div className="flex flex-col md:flex-row">
        <div className="h-48 w-full md:w-4/12 p-6">
          <Filter />
        </div>
        <div className="md:w-4/6 flex flex-wrap gap-4 p-6 h-full">
          {companies.map((company) => (
            <Card company={company} />
          ))}
          <div className="flex mt-3 flex-col w-full items-center justify-center p-4 gap-5">
            <img src={lock} className="w-1/5 md:w-24" />
            <h1 className="md:text-xl w-full text-center text-zinc-600 font-medium ">
              Explore more companies -{" "}
              <a href="#" className="cursor-pointer text-blue-600 underline">
                Login
              </a>{" "}
              to continue your search!
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
