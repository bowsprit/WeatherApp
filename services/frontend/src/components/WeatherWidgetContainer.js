import PropTypes from "prop-types";
import WeatherWidget from "./WeatherWidget";

const WeatherWidgetContainer = ({ weatherObjArray }) => {
  const createWeatherWidgets = (objArray) => {
    const widgetArray = [];
    for (const [index, obj] of objArray.entries()) {
      const widget = (
        <WeatherWidget key={index} temp={obj.temp} condition={obj.condition} />
      );
      widgetArray.push(widget);
    }
    return widgetArray;
  };

  return (
    <div className="flex flex-column flex-wrap md:flex-row justify-center my-5">
      {createWeatherWidgets(weatherObjArray)}
    </div>
  );
};

WeatherWidgetContainer.propTypes = {
  weatherObjArray: PropTypes.arrayOf(
    PropTypes.shape({
      temp: PropTypes.number,
      condition: PropTypes.string,
    })
  ),
};

WeatherWidgetContainer.defaultProps = {
  widgetCount: 5,
};

export default WeatherWidgetContainer;
