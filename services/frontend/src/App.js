import WeatherForecast from "./components/WeatherForecast";
import SearchBar from "./components/SearchBar";

export const App = () => {
  return (
    <div className="flex flex-col">
      <SearchBar />
      <WeatherForecast
        locationData={{ city: "San Francisco", state: "CA" }}
        defaultExpanded={true}
      />
      <WeatherForecast locationData={{ city: "Chicago", state: "IL" }} />
      <WeatherForecast locationData={{ city: "Oakland", state: "CA" }} />
    </div>
  );
};

export default App;
