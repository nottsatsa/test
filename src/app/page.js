import { DayNight } from "@/components/daynight";
import { Toirog } from "@/components/Toirog";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex relative h-full w-full items-center justify-center">
      <Toirog className={`absolute w-[${diametr}] h-[${diametr}]`} />
      <div className="w-1/2 md:w-full h-screen bg-[#F3F4F6] flex items-center justify-center">
        <DayNight
          className={"bg-[#fcfcfd]"}
          isDay={true}
          gradus={"17"}
          tempUg={"Bright"}
        />
      </div>
      <div className="w-1/2 md:w-full h-screen bg-[#0F141E] flex items-center justify-center">
        <DayNight
          className={"bg-[#111827]"}
          isDay={false}
          gradus={"25"}
          tempUg={"Clean"}
        />
      </div>
    </div>
  );
}
