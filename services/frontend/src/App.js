import WeatherWidgetContainer from './components/WeatherWidgetContainer';
import Header from './components/Header';

export const App = () => {
    const locationData = {
        city: "San Francisco",
        state: "CA",
    }

    const weatherData = [
        {
            temp: '51',
            cond: 'cloudy',
        },
        {
            temp: '48',
            cond: 'rain',
        },
        {
            temp: '58',
            cond: 'windy',
        },
        {
            temp: '62',
            cond: 'partial-cloudy',
        },
        {
            temp: '71',
            cond: 'sunny',
        },
    ];

    return (
        <div className="flex">
            <div className="md:w-1/2 mx-auto my-5 bg-blue-300 rounded-xl shadow-md text-gray-700 text-center text-xl p-4">
                <Header city={locationData.city} state={locationData.state} />
                <WeatherWidgetContainer weatherObjArray={weatherData} />
            </div>
        </div>
    )
}

export default App;