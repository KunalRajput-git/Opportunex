const Search = () => {
  return (
    <div className="flex m-2 justify-center ">
      <div className="w-11/12 xl:w-4/5 flex justify-center gap-4">
        <input
          className="border bg-gray-200 border-blue-950 rounded-md w-4/5 xl:w-8/12 p-3 outline-none"
          type="text"
          placeholder="company name, industry, location"
        />
        <button className="bg-blue-900 font-medium p-2 px-4 text-white cursor-pointer rounded-lg">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
