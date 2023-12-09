import React from "react";

type DayForecast = {
  date:string;
  day:{
    condition:{
      icon:string;
      text:string;
    };
    maxtemp_c:number;
    mintemp_c:number;
  }
}

type WeekForecastProps = {
  data:{
    forecast?:{
      forecastday:DayForecast[];
    }
  }
}

const WeekForecast = ({ data }: WeekForecastProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full +">
      {data.forecast?.forecastday.map((day, index) => (
        <div className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center">
          <p>
            {new Date(day.date).toLocaleString("en-US", { weekday: "short" })}
          </p>
          <img src={day.day.condition.icon} alt={day.day.condition.text}></img>
          <div>
            <p className="text-md xl:text-lg font-semibold">最高: {day.day.maxtemp_c}°</p>
            <p className="text-md xl:text-lg font-semibold">最低: {day.day.mintemp_c}°</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekForecast;
