import PropTypes from 'prop-types';
import WeatherWidget from "./WeatherWidget";

const WeatherWidgetContainer = ({ weatherObjArray, widgetCount }) => {
    const createWeatherWidgets = (objArray) => {
        const widgetArray = []
        for (let index = 0; index < widgetCount; index++) {
            let obj = objArray[index];
            if (!obj) {
                console.log(`Object ${index} was missing!`);
                obj = {temp: null, cond: null};
            }
            const widget = <WeatherWidget key={index} temp={obj.temp} cond={obj.cond} />;
            widgetArray.push(widget);
        }
        return widgetArray;
    }

    return (
        <div className="flex flex-column flex-wrap md:flex-row justify-center my-5">
            {createWeatherWidgets(weatherObjArray)}
        </div>
    )
};

WeatherWidgetContainer.propTypes = {
    weatherObjArray: PropTypes.arrayOf(PropTypes.shape({
        temp: PropTypes.number,
        cond: PropTypes.string,
    })),
    widgetCount: PropTypes.number,
};

WeatherWidgetContainer.defaultProps = {
    widgetCount: 5,
};

export default WeatherWidgetContainer;
