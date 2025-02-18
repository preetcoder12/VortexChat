import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <form>
      <div className="flex space-x-3 py-3 px-4 my-2 h-[10vh] overflow-auto">
        <input
          type="text"
          placeholder="Search here..."
          className="font-serif input input-bordered w-[80%] max-w-sm px-4 py-2 text-lg text-white bg-slate-900 border-3 border-primary rounded-full focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all duration-300 shadow-lg"
        />
        <button type="submit" className="rounded-full">
          <IoSearch className="size-10 hover:bg-gray-600 transform translate-y-[1.3px] transition rounded-full p-1 ease-in-out duration-200" />
        </button>
      </div>
    </form>
  );
};

export default Search;
