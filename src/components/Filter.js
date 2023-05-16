const Filter = () => {
  return (
    // <div className="w-3/4 h-96 flex flex-col items-center justify-center gap-4  border h-full">
    <div className="w-full  flex flex-col gap-2 ">
      {/* <h1 className="text-xl font-medium"> Filter By</h1> */}
      <select className="w-full border-2 p-2 font-medium text-zinc-600 cursor-pointer ">
        <option className="text-center">-- Industry --</option>
        <option className="">Technology</option>
        <option className="">Healthcare</option>
      </select>
      <select className="w-full focus:outline-none border p-2 font-medium text-zinc-600 cursor-pointer">
        <option className="text-center">-- Location --</option>
        <option className="">Delhi</option>
        <option className="">Punjab</option>
      </select>
      <button className=" border-2 w-full p-3 bg-blue-900 text-white font-medium">
        Apply
      </button>
    </div>
  );
};

export default Filter;
