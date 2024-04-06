import React from "react";
export const PageContainer = ({ children }) => {
  return (
    <div className="px-[12px] py-[12px] md:py-[30px] md:px-[20px] ">
      {children}
    </div>
  );
};
