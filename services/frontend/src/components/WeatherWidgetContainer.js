import WeatherWidget from "./WeatherWidget";

const WeatherWidgetContainer = ({ weatherObjArray }) => {
    const weatherWidgets = weatherObjArray.map((weatherObj, index) => {
        return <WeatherWidget key={index} temp={weatherObj.temp} cond={weatherObj.cond} />
    });
    return (
        <div className="flex flex-column md:flex-row justify-center my-5">
            {weatherWidgets}
        </div>
    )
};

export default WeatherWidgetContainer;
