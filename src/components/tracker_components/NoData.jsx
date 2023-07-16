const NoData = ({ img, heading, action_text }) => {
  return (
    <div className="mt-40 w-full text-gray-400  text-center text-lg">
      <img src={img} className="m-auto" />
      <h1 className="mt-8">
        {heading} <br />
        <span className="text-indigo-600 font-bold underline cursor-pointer">
          'Add New'
        </span>{" "}
        {action_text}
      </h1>
    </div>
  );
};

export default NoData;

// "Select an application from the right. or"
