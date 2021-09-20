import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBolt,
    faCloud,
    faCloudSun,
    faSun,
    faWind,
    faCloudShowersHeavy,
    faCloudRain,
    faSnowflake,
    faSlash,
} from '@fortawesome/free-solid-svg-icons';

const WeatherWidget = ({ temp,cond }) => {

    const getIconFromString = (conditionString) => {
        let returnVal;
        switch (conditionString) {
            case "sunny":
                returnVal = faSun;
                break;
            case "cloudy":
                returnVal = faCloud;
                break;
            case "partial-cloudy":
            case "partial-sunny":
                returnVal = faCloudSun;
                break;
            case "windy":
                returnVal = faWind;
                break;
            case "lightning":
                returnVal = faBolt;
                break;
            case "snow":
                returnVal = faSnowflake;
                break;
            case "rain":
            case "light-rain":
                returnVal = faCloudRain;
                break;
            case "heavy-rain":
                returnVal = faCloudShowersHeavy;
                break;
            default:
                returnVal = faSlash;
                break;
        }
        return returnVal;
    };

    return (
        <div className="px-5 text-2xl md:text-6xl">
            <div>
                <h1>
                    <FontAwesomeIcon icon={getIconFromString(cond)} />
                </h1>
            </div>
            <div>
                <h1>
                    <div>{temp}°</div>
                </h1>
            </div>
        </div>
    )
};

export default WeatherWidget;
