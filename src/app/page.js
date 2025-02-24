import { DayNight } from "@/components/daynight";
import { Toirog } from "@/components/Toirog";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex relative">
      <Toirog diametr={340} className={"absolute bottom-0 left-0"} />
      <div className="w-1/2 md:w-full h-screen bg-[#F3F4F6] flex items-center justify-center">
        <DayNight />
      </div>
      <div className="w-1/2 md:w-full h-screen bg-[#0F141E] flex items-center justify-center">
        <DayNight />
      </div>
    </div>
  );
}
