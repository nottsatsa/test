"use client";
import { DayNight } from "@/components/Daynight";
import { Toirog } from "@/components/Toirog";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";

export default function Home() {
  const diametr = [140, 340, 540, 940, 1340];
  //  const [data, setDAta] = useState(firstData);

  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/forecast.json?key=c54db69bc7dc4466bf415506241712&q=ulaanbaatar"
      )
      .then((response) => console.log(response.data));
  }, []);

  let firstData = [
    {
      gradus: "17",
      tempUg: "Bright",
      date: "September 10, 2021",
      country: "Mongolia",
      city: "Ulaanbatar",
    },
    {
      gradus: "25",
      tempUg: "Clean",
      date: "September 10, 2021",
      country: "Mongolia",
      city: "Ulaanbatar",
    },
  ];

  // const [data, setDAta] = useState(firstData);
  // const dataFunc = () => {
  //   setDAta([]);
  // };

  // const weatherData = fetch(
  //   "https://api.weatherapi.com/v1/forecast.json?key=c54db69bc7dc4466bf415506241712&q=ulaanbaatar"
  // ).then((res) => res.json());
  // console.log(weatherData, "weather data");

  return (
    <div className="flex relative h-screen w-screen items-center justify-center">
      {diametr.map((value, index) => {
        return <Toirog key={index} diametr={value} />;
      })}
      {/* <Toirog className={`absolute z-50 w-[${diametr}] h-[${diametr}]`} /> */}
      <div className="w-[50%] h-screen bg-[#F3F4F6] flex items-center justify-center relative">
        <div className="w-[512px] h-[48px] px-[24px] py-[16px] absolute top-10 left-10 bg-[#fcfcfd] items-center rounded-[48px] flex flex-row gap-4">
          <div className="flex" style={{ color: "#D1D5DB" }}>
            <IoIosSearch size={20} />
          </div>
          <input
            placeholder="search.."
            className="h-10 w-[400px] focus-visible:outline-none bg-[#fcfcfd] z-50"
          />
        </div>
        <DayNight
          className={"bg-[#fcfcfd] absolute z-40"}
          isDay={true}
          data={firstData[0]}
        />
      </div>
      <div className="w-1/2 h-screen bg-[#0F141E] flex items-center justify-center relative">
        <DayNight
          className={"bg-[#111827] absolute z-40"}
          isDay={false}
          data={firstData[1]}
        />
      </div>
    </div>
  );
}
