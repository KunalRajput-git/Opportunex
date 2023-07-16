import NoData from "./NoData";
import NO_APPLICATION2 from "../../assets/no_application2.png";
import Filter from "../Filter";
import { useState } from "react";
import TrackerInput from "./TrackerInput";

const SingleApplication = () => {
  const [isEditable, setIsEditable] = useState(false);
  return (
    <>
      {/* <NoData
        img={NO_APPLICATION2}
        heading="Select an application from the right."
        action_text="to create one."
      /> */}
      <div className="h-full overflow-y-scroll">
        <div className=" mt-6 px-4 flex justify-between items-start">
          <h1 className="w-2/3 font-semibold text-xl">
            Job Application at Sunder Bhavan.
          </h1>
          <button
            className="font-semibold rounded-sm"
            onClick={() => setIsEditable(!isEditable)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
          </button>
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
                <h3> Notes </h3>
                {isEditable && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                  </svg>
                )}
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
    </>
  );
};

export default SingleApplication;
