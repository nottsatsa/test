export const Toirog = ({ diametr, className }) => {
  return (
    <div
      className={
        `w-[${diametr}px] h-[${diametr}px] border-gray-600 border-solid rounded-full ` +
        className
      }></div>
  );
};
