import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCloudSun ,faSun } from '@fortawesome/free-solid-svg-icons';


export const App = () => {
    return (
        <div className="flex">
            <div className="md:w-1/2 mx-auto my-5 bg-blue-300 rounded-xl shadow-md text-gray-700 text-center text-xl p-4">
                <div className="md:text-3xl pb-5">
                    <h1>I am a WeatherApp</h1>
                </div>
                <div className="flex flex-column md:flex-row justify-center my-5">
                    <div className="px-5">
                        <h1 className="text-2xl md:text-6xl">
                            <FontAwesomeIcon icon={faBolt} />
                            <div>51°</div>
                        </h1>
                    </div>
                    <div className="px-5">
                        <h1 className="text-2xl md:text-6xl">
                            <FontAwesomeIcon icon={faCloudSun} />
                            <div>62°</div>
                        </h1>
                    </div>
                    <div className="px-5">
                        <h1 className="text-2xl md:text-6xl">
                            <FontAwesomeIcon icon={faSun} />
                            <div>68°</div>
                        </h1>
                    </div>
                    <div className="px-5">
                        <h1 className="text-2xl md:text-6xl">
                            <FontAwesomeIcon icon={faSun} />
                            <div>69°</div>
                        </h1>
                    </div>
                    <div className="px-5">
                        <h1 className="text-2xl md:text-6xl">
                            <FontAwesomeIcon icon={faSun} />
                            <div>72°</div>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;