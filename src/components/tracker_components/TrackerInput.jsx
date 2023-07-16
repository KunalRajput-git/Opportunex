const TrackerInput = ({ placeholder, type }) => {
  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        className="outline-none w-full"
      />
    </>
  );
};

export default TrackerInput;
