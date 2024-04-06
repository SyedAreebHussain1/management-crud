import React from "react";
export const PageHeader = ({ title, subTitle, extra, className = "" }) => {
  return (
    <div
      className={`flex justify-between bg-[#FFFFFF] items-center p-[15px] rounded-xl ${className}`}
    >
      <div>
        <h2 className="text-[18px] font-semibold">{title}</h2>
        <p className="text-textColor">{subTitle}</p>
      </div>
      {extra}
    </div>
  );
};
