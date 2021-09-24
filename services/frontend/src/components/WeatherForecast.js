import WeatherWidgetContainer from './WeatherWidgetContainer';
import Header from './Header';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const WeatherForecast = ({locationData, defaultExpanded}) => {
    // Placeholder weather data
    const weatherData = [
        {
            temp: 51,
            cond: 'cloudy',
        },
        {
            temp: 48,
            cond: 'rain',
        },
        {
            temp: 58,
            cond: 'windy',
        },
        {
            temp: 62,
            cond: 'partial-cloudy',
        },
        {
            temp: 71,
            cond: 'sunny',
        },
    ];

    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    const toggleExpanded = () => {setIsExpanded(!isExpanded)};

    return (
        <div className="flex">
            {isExpanded ? 
            <div className="md:w-1/2 mx-auto my-5 rounded-xl shadow-md text-gray-700 text-center text-xl p-4 bg-gradient-to-b from-blue-300 to-blue-50" onClick={toggleExpanded}>
                <Header city={locationData.city} state={locationData.state} />
                <WeatherWidgetContainer weatherObjArray={weatherData} />
            </div>
            :
            <div className="md:w-1/2 mx-auto my-5 rounded-xl shadow-md text-gray-700 text-center text-xl p-4 bg-gradient-to-b from-blue-300 to-blue-50" onClick={toggleExpanded}>
                <Header city={locationData.city} state={locationData.state} />
            </div>
            }
        </div>
    )
}

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