export const DayNight = ({ isDay }) => {
  return (
    <div className="w-[414px] h-[832px] border-green-800 border-solid rounded-[42px] bg-white/30 backdrop-blur-[12px] pt-[64px] px-[48px] pb-[54px]">
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="text-[#9CA3AF] text-[18px]">September 10, 2021</p>
          <p className="text-white text-[48px]">Ulaanbaatar</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none">
          <path
            d="M18.4768 25.5772L23.1596 17.2151C26.2226 11.7453 22.2691 5 16 5C9.73095 5 5.77737 11.7453 8.84045 17.2151L13.5232 25.5772C14.6072 27.5128 17.3928 27.5128 18.4768 25.5772Z"
            stroke="#9CA3AF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="16"
            cy="13"
            r="2"
            stroke="#9CA3AF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
