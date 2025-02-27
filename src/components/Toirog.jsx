export const Toirog = ({ diametr, className }) => {
  return (
    <div>
      <div
        className={`absolute z-20 border-[#e0e0e2] border-[1px] border-solid rounded-full `}
        style={{ width: diametr + "px", height: diametr + "px" }}></div>
      <div
        className={`absolute z-20 border-[#e0e0e2] border-[1px] border-solid rounded-full `}
        style={{ width: diametr + "px", height: diametr + "px" }}></div>
    </div>
  );
};
