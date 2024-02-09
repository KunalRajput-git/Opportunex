import { useSelector } from "react-redux";

const CompanyHeader = () => {
  const companyState = useSelector((state) => state.companySlice);
  const {
    name,
    websiteUrl,
    size,
    description,
    foundedYear,
    type,
    founderName,
  } = companyState.selectedCompany[0];
  console.log(companyState.selectedCompany[0]);
  return (
    <div className="py-8">
      <div className="w-11/12 m-auto ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold capitalize">{name}</h1>
            <h3 className="text-sm mt-1 italic text-gray-700 capitalize">{type}</h3>
          </div>

          <div className="text-center">
            {/* <div className="w-16 h-16 rounded-full m-auto bg-gray-200">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg"
                className="w-full h-full rounded-full object-cover"
              />
            </div> */}
            <div className="text-gray-700 mt-1">
              <h1 className="text-lg capitalize">{founderName}</h1>
              <h1 className="text-sm italic capitalize">Founder, {name}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;
