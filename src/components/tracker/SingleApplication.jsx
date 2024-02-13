import NoData from "./NoData";
import NO_APPLICATION2 from "../../assets/no_application2.png";
import Filter from "../Filter";
import { useState } from "react";
import TrackerInput from "./TrackerInput";
import {
  Check2Circle,
  PencilSquare,
  PlusSquareFill,
  Save2Fill,
  SaveFill,
} from "react-bootstrap-icons";

const SingleApplication = () => {
  const [isEditable, setIsEditable] = useState(false);
  {
    /* <NoData
          img={NO_APPLICATION2}
          heading="Select an application from the right."
          action_text="to create one."
        /> */
  }

  return (
    <>
      <div className="w-2/5 h-screen">
        <div className="h-full w-[95%] m-auto mt-4 rounded-md overflow-y-scroll border">
          <div className="border-b-2 p-4 flex justify-between items-start">
            <h1 className="font-bold text-indigo-600 text-lg">
              Microsoft Corporation
            </h1>
            <div className="flex justify-between items-start">
              {isEditable ? (
                <button
                  className="font-semibold rounded-sm text-gray-400"
                  onClick={() => setIsEditable(false)}
                >
                  <Check2Circle size="24px" />
                </button>
              ) : (
                <button
                  className="font-semibold rounded-sm text-gray-400"
                  onClick={() => setIsEditable(true)}
                >
                  <PencilSquare size="24px" />
                </button>
              )}
            </div>
          </div>
          <div className="pt-2 px-6 bg-white">
            <div>
              <div className="mt-6 flex justify-between border-b-2">
                {isEditable ? (
                  <TrackerInput placeholder="Enter Role Applied" type="name" />
                ) : (
                  <>
                    <h1 className="font-semibold">Role Applied</h1>
                    <p>Software Engineering</p>
                  </>
                )}
              </div>

              <div className="mt-6 flex justify-between border-b-2">
                {isEditable ? (
                  <TrackerInput placeholder="Date" type="date" />
                ) : (
                  <>
                    <h1 className="font-semibold">Date Applied</h1>
                    <p>26 January 1960</p>
                  </>
                )}
              </div>

              <div className="mt-6 flex justify-between border-b-2">
                {isEditable ? (
                  <TrackerInput placeholder="Enter Post Link" type="url" />
                ) : (
                  <>
                    <h1 className="font-semibold">Post Link</h1>
                    <p>https://aom.ind.birla.instidn</p>
                  </>
                )}
              </div>

              <div className="mt-6 flex justify-between border-b-2">
                {isEditable ? (
                  <select className="outline-none w-full">
                    <option value="1">Status</option>
                    <option value="1">Declined</option>
                    <option value="1">Applied</option>
                    <option value="1">Interviewing</option>
                    <option value="1">Declined</option>
                    <option value="1">Declined</option>
                    <option value="1">Selected</option>
                    <option value="1">Declined</option>
                  </select>
                ) : (
                  <>
                    <h1 className="font-semibold">Status</h1>
                    <p>Pending</p>
                  </>
                )}
              </div>

              <div className="mt-6 flex justify-between border-b-2">
                {isEditable ? (
                  <TrackerInput
                    placeholder="Enter Salary/Compunstation"
                    type="number"
                  />
                ) : (
                  <>
                    <h1 className="font-semibold">Salary/Compunstation</h1>
                    <p>20k/month</p>
                  </>
                )}
              </div>

              <div className="mt-6 bg-white">
                <h1 className="font-bold  underline flex items-center gap-4">
                  <h3> Comments </h3>
                  {isEditable && <PlusSquareFill />}
                </h1>
                {isEditable ? (
                  <>
                    <textarea
                      className="mt-1 border w-full p-2"
                      value=" this is not easy to achieve. but i'll make it on any cost."
                    />

                    <textarea
                      className="mt-1 border w-full p-2"
                      value=" this is not easy to achieve. but i'll make it on any cost."
                    />
                  </>
                ) : (
                  <ul className="ml-6  mt-2 list-disc ">
                    <li>
                      this is not easy to achieve. but i'll make it on any cost.
                    </li>
                    <li>
                      this is not easy to achieve. but i'll make it on any cost.
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleApplication;
