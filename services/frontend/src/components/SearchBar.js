const SearchBar = () => {
  return (
    <div className="md:w-1/2 mx-auto my-5 rounded-xl shadow-md text-gray-700 text-center text-xl p-4 bg-gray-200">
      <form>
        <div>
          <input
            className="md:w-full border-2 border-gray-200 w-full py-2 px-4 text-gray-700"
            id="search-location"
            type="text"
            placeholder="Enter a location"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
