import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <div className="h-screen w-full lg:w-8/12 flex items-center justify-center">
          <div className="overflow-auto w-4/5 flex">
            <table className="w-full">
              <thead className="border-collapse bg-gray-100">
                <tr>
                  <th className="tracking-wide p-3 font-semibold text-sm text-center">
                    Company
                  </th>
                  <th className="tracking-wide p-3 font-semibold text-sm text-center">
                    Job Title
                  </th>
                  <th className="tracking-wide p-3 font-semibold text-sm text-center">
                    Applied Date
                  </th>
                  <th className="tracking-wide p-3 font-semibold text-sm text-center">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="text-center">
                  <td className="text-gray-700 p-3 text-sm whitespace-nowrap">
                    Accenture
                  </td>
                  <td className="text-gray-700 p-3 text-sm whitespace-nowrap">
                    SDE
                  </td>
                  <td className="text-gray-700 p-3 text-sm whitespace-nowrap">
                    22 January 2019
                  </td>
                  <td className="text-gray-700 p-3 text-sm whitespace-nowrap">
                    Accepted
                  </td>
                </tr>
                <tr className="text-center cursor-pointer bg-indigo-200">
                  <td className="text-indigo-600 font-semibold p-3 text-sm whitespace-nowrap">
                    Accenture
                  </td>
                  <td className="text-indigo-600 font-semibold p-3 text-sm whitespace-nowrap">
                    Software Engineer
                  </td>
                  <td className="text-indigo-600 font-semibold p-3 text-sm whitespace-nowrap">
                    22 January 2019
                  </td>
                  <td className="text-indigo-600 font-semibold p-3 text-sm whitespace-nowrap">
                    Not Accepted
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" h-screen w-1/3 ">
          Job Title, 2. Company, 3. Contact, 4. Date, 5. Method, 6. Notes, 7.
          Follow-up, 8. Status, 9. Salary, 10. Location, 11. Description.
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
