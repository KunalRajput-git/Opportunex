import Navbar from "../components/Navbar";
import SingleApplication from "../components/tracker/SingleApplication";
import UserApplications from "../components/tracker/UserApplications";
const Tracker = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-[100vh] overflow-hidden">
        <div className="w-[30%] text border-r-2  pt-24 -mt-2 hidden lg:block ">
          <SingleApplication />
        </div>
        <div className="w-full  lg:w-[70%]">
          <UserApplications />
        </div>
      </div>
    </>
  );
};

export default Tracker;
