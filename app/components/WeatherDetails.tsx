import React from "react";
import { FiSunrise } from "react-icons/fi";
import { GiWindSlap } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { GiCompass } from "react-icons/gi";
import { FiSunset } from "react-icons/fi";
import { FaTemperatureHigh } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { MdOutlineVisibility } from "react-icons/md";

type WeatherDetailProps = {
  data:{
    current:{
      wind_mph:number;
      humidity:number;
      wind_dir:string;
      pressure_mb:number;
      feelslike_c:number;
      uv:number;
      vis_km:number;
    }
    forecast:{
      forecastday:{
        astro:{
          sunrise:string;
          sunset:string;
        }
      }[]
    }
  }
}

const WeatherDetails = ({ data }: WeatherDetailProps) => {
  return (
    <div className="p-12">
      <h1 className="mb-4 text-2xl text-white">Weather Detail</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Wind Speed</h3>
            <h3>{data.current.wind_mph}mph</h3>
          </div>
          <div className="text-5xl">
            <GiWindSlap fontSize={40} />
          </div>
        </div>

        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Humidity</h3>
            <h3>{data.current.humidity}%</h3>
          </div>
          <div className="text-5xl">
            <WiHumidity fontSize={40} />
          </div>
        </div>

        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Wind Direction</h3>
            <h3>{data.current.wind_dir}</h3>
          </div>
          <div className="text-5xl">
            <GiCompass fontSize={40} />
          </div>
        </div>

        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Sunrise</h3>
            <h3>{data.forecast.forecastday[0].astro.sunrise}</h3>
          </div>
          <div className="text-5xl">
            <FiSunrise fontSize={40} />
          </div>
        </div>

        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Sunset</h3>
            <h3>{data.forecast.forecastday[0].astro.sunset}</h3>
          </div>
          <div className="text-5xl">
            <FiSunset fontSize={40} />
          </div>
        </div>

        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Air Pressure</h3>
            <h3>{data.current.pressure_mb}mph</h3>
          </div>
          <div className="text-5xl">
            <GiWindSlap fontSize={40} />
          </div>
        </div>

        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Sensible Temperature</h3>
            <h3>{data.current.feelslike_c}°</h3>
          </div>
          <div className="text-5xl">
            <FaTemperatureHigh fontSize={40} />
          </div>
        </div>

        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>UV</h3>
            <h3>{data.current.uv}</h3>
          </div>
          <div className="text-5xl">
            <CiLight fontSize={40} />
          </div>
        </div>

        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Visibility</h3>
            <h3>{data.current.vis_km}</h3>
          </div>
          <div className="text-5xl">
            <MdOutlineVisibility fontSize={40} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default WeatherDetails;
