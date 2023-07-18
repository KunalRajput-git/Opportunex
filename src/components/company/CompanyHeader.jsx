const CompanyHeader = () => {
  return (
    <div className="py-8">
      <div className="w-11/12 m-auto ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Microsoft</h1>
            <h3 className="text-sm mt-1 italic text-gray-700">
              Computer Hardware Development
            </h3>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full m-auto bg-gray-200">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="text-gray-700 mt-1">
              <h1 className="text-lg">Bill Gates</h1>
              <h1 className="text-sm italic">Founder, Microsoft Corporation</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;
