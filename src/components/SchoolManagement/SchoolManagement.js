import React, { useState, useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import { PageContainer } from "../../utils/component/PageContainer";
import { PageHeader } from "../../utils/component/PageHeader";
import SchoolManagementTable from "./helpers/SchoolManagementTable";
import PostSchoolManagementDrawer from "./helpers/PostSchoolManagementDrawer";
const SchoolManagement = () => {
  const [toggle, setToggle] = useState(false);
  const tableRef = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Students table",
    sheet: "Students",
  });

  return (
    <>
      {toggle !== false && (
        <PostSchoolManagementDrawer toggle={toggle} setToggle={setToggle} />
      )}
      <PageContainer>
        <PageHeader
          title="School Management"
          subTitle="All school management"
          extra={
            <div className="flex gap-2">
              <button
                onClick={onDownload}
                className="bg-none gap-[8px] w-[140px] h-[40px] border rounded-lg flex justify-center items-center cursor-pointer"
              >
                <span className="text-black text-[1rem] font-semibold">
                  Export
                </span>
              </button>
              <button
                onClick={() => setToggle(true)}
                className="bg-[#27A3A3] gap-[8px] w-[140px] h-[40px] border rounded-lg flex justify-center items-center cursor-pointer"
              >
                <span className="text-[#F9FAFB] text-[1rem] font-semibold">
                  Add Now
                </span>
              </button>
            </div>
          }
        />
        <SchoolManagementTable tableRef={tableRef} />
      </PageContainer>
    </>
  );
};

export default SchoolManagement;
