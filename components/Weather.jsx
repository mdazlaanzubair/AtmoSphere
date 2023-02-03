import Image from "next/image";
import { RiWindyLine } from "react-icons/ri";
import { BsDropletHalf, BsFillSunFill, BsCloudsFill } from "react-icons/bs";
import { FaSeedling, FaCloudSun } from "react-icons/fa";

const Weather = ({ weatherData }) => {
  // destructuring the weatherData for accessability
  const { coord, weather, main, wind, clouds, name } = weatherData;
  return (
    <div className="relative z-10 flex items-center justify-center text-white align-middle ">
      <section className="text-gray-600 body-font">
        <div className="container justify-center px-3 py-5 mx-auto">
          <div class="flex flex-col px-6 py-10 justify-center mx-auto items-start mb-5 bg-transparent max-w-sm w-full">
            <div className="flex">
              <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 text-white rounded">
                {weather[0].main}
              </span>
            </div>
            <div className="flex flex-row items-center justify-center text-center">
              <Image
                class="my-0 rounded-t-lg mx-auto flex-grow"
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                width="75"
                height="75"
                alt="Weather Icon"
              />
              <h1 class="text-gray-900 text-5xl font-bold mb-2 text-center flex-shrink">
                {(main.temp - 273.15).toFixed(0)} &#8451;
              </h1>
            </div>
          </div>

          <a
            href={`https://maps.google.com/?q=${coord.lat},${coord.lon}&z=21`}
            target="_blank"
            className="grid grid-flow-row p-6 transition-all ease-in-out rounded-lg shadow-lg auto-cols-max md:grid-cols-min bg-white/40 hover:bg-black/40 hover:text-white"
          >
            <div className="row-span-1">
              <h1 className="text-lg font-bold text-center">
                Today's weather in{" "}
                <span className="font-bold text-indigo-600">{name}</span>
              </h1>
            </div>
            <div className="row-span-1">
              <div className="flex justify-center my-3">
                <div className="mx-5 text-center">
                  <span className="flex flex-row items-center justify-center text-lg font-bold text-indigo-600">
                    <FaSeedling className="mr-2" />
                    {(main.feels_like - 273.15).toFixed(0)} &#176;
                  </span>
                  <p className="text-center">Feels Like</p>
                </div>
                <div className="mx-5 text-center">
                  <span className="flex flex-row items-center justify-center text-lg font-bold text-indigo-600">
                    <BsDropletHalf className="mr-2" />
                    {main.humidity} %
                  </span>
                  <p className="text-center">Humidity</p>
                </div>
                <div className="mx-5 text-center">
                  <span className="flex flex-row items-center justify-center text-lg font-bold text-indigo-600">
                    <RiWindyLine className="mr-2" />
                    {wind.speed} m/s
                  </span>
                  <p className="text-center">Wind</p>
                </div>
                <div className="mx-5 text-center">
                  <span className="flex flex-row items-center justify-center text-lg font-bold text-indigo-600">
                    {clouds.all == 0 ? (
                      <BsFillSunFill className="mr-2" />
                    ) : clouds.all > 0 || clouds.all <= 50 ? (
                      <FaCloudSun className="mr-2" />
                    ) : (
                      <BsCloudsFill className="mr-2" />
                    )}
                    {clouds.all} %
                  </span>
                  <p className="text-center">Clouds</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Weather;
