import { BoxArrowRight, PencilSquare } from "react-bootstrap-icons";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="md:py-24  w-full">
          <div>
            <h1 className="text-2xl font-bold p-6 border-b-2">Profile</h1>
          </div>
          <div className="p-6">
            <h3>Name</h3>
            <h1 className="text-3xl mt-4 font-bold">Kunal Rajput</h1>
            <h3 className="text-lg mt-2">yoginder21@yopmail.com</h3>
            <div className="md:w-1/2 flex gap-4 md:gap-8 mt-4 flex-col  md:flex-row">
              <button className="flex md:w-1/2 text-indigo-600 items-center gap-4 p-3 px-6  border rounded-md focus:ring focus:ring-indigo-600">
                <PencilSquare size="20px" />
                <h4 className="text-lg font-bold">Edit Profile</h4>
              </button>
              <button className="flex text-red-600 items-center gap-4  p-3 px-6">
                <BoxArrowRight size="24px" />
                <h4 className="text-lg font-bold">Logout</h4>
              </button>
            </div>
            <h4 className="text-sm mt-4">Member since : 23 Feb 2023</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
