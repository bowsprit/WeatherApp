import WeatherWidgetContainer from "./WeatherWidgetContainer";
import Header from "./Header";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const WeatherForecast = ({ locationData, defaultExpanded }) => {

  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/forecast/foo`)
    .then(res => res.json())
    .then(
      (result) => {
        // console.log(result);
        setWeatherData(result);
        setIsLoaded(true);
      },
      (error) => {
        console.log(error);
        // TODO: Add isError state handling
      }
    )
  }, [locationData]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {isExpanded ? (
        <div
          className="md:w-1/2 mx-auto my-5 rounded-xl shadow-md text-gray-700 text-center text-xl p-4 bg-gradient-to-b from-blue-300 to-blue-50"
          onClick={toggleExpanded}
        >
          <Header city={locationData.city} state={locationData.state} />
          {isLoaded ? <WeatherWidgetContainer weatherObjArray={weatherData} /> : <p>"Loading..."</p>}
        </div>
      ) : (
        <div
          className="md:w-1/2 mx-auto my-5 rounded-xl shadow-md text-gray-700 text-center text-xl p-4 bg-gradient-to-b from-blue-300 to-blue-50"
          onClick={toggleExpanded}
        >
          <Header city={locationData.city} state={locationData.state} />
        </div>
      )}
    </div>
  );
};

WeatherForecast.propTypes = {
  locationData: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.string,
  }).isRequired,
  defaultExpanded: PropTypes.bool,
};

WeatherForecast.defaultProps = {
  defaultExpanded: false,
};

export default WeatherForecast;
