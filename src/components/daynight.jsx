import { CiHome } from "react-icons/ci";
import { PiMapPinLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

export const DayNight = ({ isDay, className, data }) => {
  var strokeColor = "";
  return (
    <div
      className={`w-[414px] h-[832px] flex flex-col gar-[24px] rounded-[42px] bg-opacity-5 backdrop-blur-[12px] pt-[64px] px-[48px] pb-[54px] ${className}`}>
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="text-[#9CA3AF] text-[18px]">{data.date}</p>
          {isDay ? (
            <p className="text-[#111827] text-[48px]">{data.city}</p>
          ) : (
            <p className="text-white text-[48px]">{data.city}</p>
          )}
        </div>
        <div style={{ color: "#D1D5DB" }}>
          <PiMapPinLight size={24} />
        </div>
      </div>
      <div className="flex items-center justify-center">
        {isDay ? (
          <img
            className="h-[264px] w-[264px] aspect-<264>"
            src="https://s3-alpha-sig.figma.com/img/3c6b/babb/0657324bf17d1bd5169b60a7fbcb80b1?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uVwKHLA2r0mB54mUCGA3sxRal85xaGrB10-WtvmM-SlHJ9avtIeSEY5L9pGLJd9sN9K2nlTm-t75gLnBzjZ5o630U8nXaaPzxY-Q~6W6xqde3xBb5l5DqGklTN241rg1PmtRLRUlH-AwkqcTz7DoMXnipYL~12HTmUZqiU8biX-Iv1E~5OpXDTeJuT2VKLSuAnDYSph060VwNsEtsapKYZBMvI5Fpfdzf1tzwiF~LwqfhzNFqozotdHJP20gxpwsKvMbw-CWA26NDtbr5j7uPjepLCTWwmZ-NvwDoZOLeARlpd5LtLfSabJOl7OUWV9~fm1X1PiJGr8zf95gezSSTw__"
          />
        ) : (
          <img
            className="h-[264px] w-[264px] aspect-[264]"
            src="https://s3-alpha-sig.figma.com/img/b6fe/b523/f01b7c0c0765dab6de4f9f5cbb022e1d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GnqkFrtyd5NpkYxprvjxMj2ckCkgwwp2Bk65oBFIuU4joqvzDi-VaizLlo2B4VuAUqqeO1rUdh1HiIurvvva~N6YfW7u-rh55-nVhRrl1~xO-wxovybvB2kA1Us4SB5QkGYbMrbZ07KzopgLCYDXhiAOcNCgVfy~4NIOoWa7FOMMjYUKDiSBMv2OeVmjNFMhln4ImSY05rsvbeAwZsASVVm8lyf-EcD5JRmIsnxn0oBPq1UUoFlPQ8THPRAqhbkt1Q6l2LjfzxKzCiituC4v5N3JD9iTFPZz~BQG8TD8T5tmaC5oIXAQOBazpfXJP1tUQ6k1CVna5P9Pxz7xpsOmww__"
          />
        )}
      </div>
      <div className="flex flex-col">
        {isDay ? (
          <p className="text-[144px] font-[800] text-transparent bg-clip-text bg-gradient-to-r from-[#111827] to-[#6B7280]">{`${data.gradus}°`}</p>
        ) : (
          <p className="text-[144px] font-[800] text-transparent bg-clip-text bg-gradient-to-b from-[#F9FAFB] to-[#444954]">{`${data.gradus}°`}</p>
        )}

        {isDay ? (
          <p className="text-[#FF8E27] text-[24px] font-[800]">{data.tempUg}</p>
        ) : (
          <p className="text-[#777CCE] text-[24px] font-[800]">{data.tempUg}</p>
        )}
      </div>
      {isDay ? (
        <div
          className="flex justify-between items-end w-[318px] pt-[48px]"
          style={{ color: "#D1D5DB" }}>
          <CiHome size={32} />
          <PiMapPinLight size={32} />
          <CiHeart size={32} />
          <CiUser size={32} />
        </div>
      ) : (
        <div
          className="flex justify-between items-end w-[318px] pt-[48px]"
          style={{ color: "#4B5563" }}>
          <CiHome size={32} />
          <PiMapPinLight size={32} />
          <CiHeart size={32} />
          <CiUser size={32} />
        </div>
      )}
    </div>
  );
};
