import { BoxArrowRight, PencilSquare } from "react-bootstrap-icons";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { formatToShortDate } from "../utils/dateFormatter";
import { setToLocalStorage } from "../utils/localstorage";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/authSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.authSlice);
  let memberSince = formatToShortDate(user?.createdAt || "03-22-2002");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onLogoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/");
  };
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
            <h1 className="text-3xl mt-4 font-bold capitalize">
              {user?.name || ""}
            </h1>
            <h3 className="text-lg mt-2">{user?.email || ""}</h3>
            <div className="md:w-1/2 flex gap-4 md:gap-8 mt-4 flex-col  md:flex-row">
              <button className="flex md:w-1/2 text-indigo-600 items-center gap-4 p-3 px-6  border rounded-md focus:ring focus:ring-indigo-600">
                <PencilSquare size="20px" />
                <h4 className="text-lg font-bold">Edit Profile</h4>
              </button>
              <button
                className="flex text-red-600 items-center gap-4  p-3 px-6"
                onClick={onLogoutHandler}
              >
                <BoxArrowRight size="24px" />
                <h4 className="text-lg font-bold">Logout</h4>
              </button>
            </div>
            <h4 className="text-sm mt-4">
              Opportunex member since : {memberSince}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
