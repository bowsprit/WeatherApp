import { useState } from "react";
import { PropTypes } from "prop-types";

const SearchBar = ({ handleUserSearch }) => {
  const [userInput, setUserInput] = useState("");

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    try {
      const parsedLocation = validateFormData(userInput);
      handleUserSearch(parsedLocation);
    } catch (e) {
      alert(
        "Search input could not be pased. Please use `City, State` format."
      );
    }
    setUserInput("");
  };

  const validateFormData = (stringData) => {
    // This function will be replaced by backend parsing
    let splitString = stringData.split(",");
    console.log(splitString);
    if (splitString.length !== 2) {
      throw new Error(`Unable to parse input ${stringData}`);
    }
    const location = {
      city: splitString[0].trim(),
      state: splitString[1].trim(),
    };
    return location;
  };

  return (
    <div className="md:w-1/2 mx-auto my-5 rounded-xl shadow-md text-gray-700 text-center text-xl p-4 bg-gray-200">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            className="md:w-full border-2 border-gray-200 w-full py-2 px-4 text-gray-700"
            id="search-location"
            type="text"
            placeholder="Enter a location"
            value={userInput}
            onChange={handleUserInputChange}
          />
        </div>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  handleUserSearch: PropTypes.func,
};

export default SearchBar;
