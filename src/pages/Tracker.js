import Navbar from "../components/Navbar";
import SingleApplication from "../components/tracker/SingleApplication";
import TrackerHeader from "../components/tracker/TrackerHeader";
import UserApplications from "../components/tracker/UserApplications";
const Tracker = () => {
  return (
    <>
      <div className="h-screen overflow-hidden md:pt-20">
        <Navbar />
        <div className="flex h-full">
          {/* <div className="w-3/5 border-r-2 pt-2 h-full">
            <TrackerHeader />
            <UserApplications from="tracker" />
          </div> */}
          <SingleApplication />
        </div>
      </div>
    </>
  );
};

export default Tracker;
