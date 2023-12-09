import React from "react";
import { getCurrentDate } from "../utils/currentDate";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";

type CurrentProps = {
    data:{
        current?:{
            condition:{
                icon:string;
                text:string;
            };
            temp_c:number;
        }
        location?:{
            name:string;
            country:string;
        }
    }
}


const Current = ({ data }: CurrentProps) => {
  const currentDate = getCurrentDate();
  // console.log(currentDate)
  const weatherIcon = data.current ? data.current.condition.icon : null;
  // console.log(weatherIcon)

  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl text-white ">Today</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        {weatherIcon && (
          <img
            src={weatherIcon}
            alt={data.current?.condition.text}
            className="w-[50px] object-cover"
          ></img>
        )}
      </div>
      <div>
        <p className="text-5xl text-white">
          {data.current?.temp_c}
          <span>°C</span>
        </p>
        <span className="text-white">{data.current?.condition.text}</span>
      </div>
      <div>
        <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
            <IoLocationSharp/>
            <span>
                {data.location?.name},{data.location!.country}
            </span>
        </div>
      </div>
    </div>
  );
};

export default Current;
