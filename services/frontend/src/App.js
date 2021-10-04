import WeatherForecast from "./components/WeatherForecast";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

export const App = () => {
  const defaultCity = {
    city: "San Francisco",
    state: "CA",
  };

  const [mainCity, setMainCity] = useState(defaultCity);
  const [suggestedCities, setSuggestedCities] = useState([
    { city: "Chicago", state: "IL" },
    { city: "Oakland", state: "CA" },
    { city: "New York", state: "NY" },
  ]);

  const updateMainCity = (newLocation) => {
    if (
      newLocation.city !== mainCity.city ||
      newLocation.state !== mainCity.state
    ) {
      // Prepend prev. mainCity to top of suggested cities array
      setSuggestedCities([mainCity, ...suggestedCities.slice(1, 3)]);
    }
    // React is smart enough to determine if the new content differs from the old.
    // So we can do this outside the if statement.
    setMainCity({ city: newLocation.city, state: newLocation.state });
  };

  return (
    <div className="flex flex-col">
      <SearchBar handleUserSearch={updateMainCity} />
      <WeatherForecast locationData={mainCity} defaultExpanded={true} />
      {suggestedCities.map((suggestedCity, index) => {
        return <WeatherForecast locationData={suggestedCity} key={index} />;
      })}
    </div>
  );
};

export default App;
