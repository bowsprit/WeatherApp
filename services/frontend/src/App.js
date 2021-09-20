import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faSun } from '@fortawesome/free-solid-svg-icons';


export const App = () => {
    return (
        <div className="flex">
            <div className="md:w-1/2 mx-auto my-5 bg-blue-300 rounded-xl shadow-md text-gray-700 text-center text-xl p-4">
                <h1>I am a WeatherApp</h1>
                <div className="flex flex-row justify-center my-5">
                    <div className="px-5">
                        <h1 className="text-2xl">
                            <FontAwesomeIcon icon={faBolt} />
                        </h1>
                    </div>
                    <div className="px-5">
                        <h1 className="text-2xl">
                            <FontAwesomeIcon icon={faSun} />
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;