import Navbar from "../components/Navbar";
import SingleApplication from "../components/tracker/SingleApplication";
import TrackerHeader from "../components/tracker/TrackerHeader";
import UserApplications from "../components/tracker/UserApplications";
const Tracker = () => {
  return (
    <>
      <div className="h-screen overflow-hidden pb-56">
        <Navbar />
        <div className="flex h-full">
          <div className="w-full lg:w-[65%]">
            <TrackerHeader />
            <UserApplications />
          </div>
          <SingleApplication />
        </div>
      </div>
    </>
  );
};

export default Tracker;
