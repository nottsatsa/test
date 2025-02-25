export const Toirog = ({ diametr, className }) => {
  return (
    <div
      className={`w-[${diametr}px] h-[${diametr}px] border-green-500 border-[5px] border-solid rounded-full ${className}`}></div>
    // className={`w-[340px] h-[340px] border-green-500 border-[5px] border-solid rounded-full ${className}`}></div>
  );
};
