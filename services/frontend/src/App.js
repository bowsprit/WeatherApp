import WeatherForecast from "./components/WeatherForecast";

export const App = () => {
  return (
    <div>
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
