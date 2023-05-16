const Navbar = () => {
  return (
    <div className="p-3 flex items-center justify-between bg-blue-950">
      <div className="flex gap-8 items-center">
        <h1 className="text-white font-medium text-3xl ml-2">CareerHub</h1>
        <a
          href="#"
          className="text-zinc-300 hover:text-white duration-200 text-lg font-medium"
        >
          Companies
        </a>
        <a
          href="#"
          className="text-zinc-300  hover:text-white duration-200  text-lg font-medium"
        >
          About Us
        </a>
      </div>
      <div className="flex gap-4 items-center">
        <button className=" px-6 text-white font-semibold">Log in</button>
        <button className=" border-whit border-4 rounded-sm font-semibold p-1 px-6 text-white">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
