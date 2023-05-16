import landingImg from "../assets/NA_October_10.jpg";

const Header = () => {
  return (
    <div className="w-full p-10  flex flex-col md:flex-row">
      <div>
        <h1 className="text-3xl mt-3 font-medium text-zinc-800">
          Boost Your Job Search with Our CareerHub.
        </h1>
        <p className="text-zinc-600 text-xl sm:mt-2 md:mt-4 italic">
          "Find your dream job with us by browsing our list of{" "}
          <span className="bg-gray-300 font-medium px-4 ml-2 mr-2">300+</span>
          companies and their career pages. Search opportunities based on
          industry and location to streamline your job search."
        </p>
        <p className="mt-6 text-zinc-500 text-lg">
          Are you tired of scouring the internet for job opportunities? Our
          CareerHub simplifies your job search by bringing together 300+ top
          companies and their career pages in one convenient place. With our
          easy-to-use interface, you can search for job openings based on your
          preferred industry and location, and easily track the status of your
          applications.
        </p>
      </div>
      <img src={landingImg} className="w-1/2 hidden xl:block" />
    </div>
  );
};

export default Header;
