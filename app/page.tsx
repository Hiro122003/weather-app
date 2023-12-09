"use client";
import Image from "next/image";
import Input from "./components/Input";
import { useState } from "react";
import Current from "./components/Current";
import WeatherDetails from "./components/WeatherDetails";
import WeekForecast from "./components/WeekForecast";

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_REACT_APP_WEATHER_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
        // console.log(data);
      } catch (error) {
        setError("City not found");
        setData("");
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div>
        <h2>Welcome to the weather app</h2>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div>
        <p>City not Found</p>
        <p>Enter a Valid City</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex flex-col 2xl:flex-row p-12 items-center justify-center gap-10 2xl:gap-0">
          <Current data = {data}/>
          <WeekForecast data = {data}/>
        </div>
        <div>
          <WeatherDetails data = {data}/>
        </div>
      </>
    );
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit">
      <div className="bg-white/25 w-full flex flex-col h-fit ">
        {/* Input AND LOGO */}
        <div className="flex flex-col justify-between items-center p-12 md:flex-row">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-white px-4 rounded-xl italic">
            Weather App.
          </h1>
        </div>
        {content}
      </div>
    </div>
  );
}
