import React, { useState } from "react";
import { PageContainer } from "../../utils/component/PageContainer";
import { PageHeader } from "../../utils/component/PageHeader";
import SchoolManagementTable from "./helpers/SchoolManagementTable";
import PostSchoolManagementDrawer from "./helpers/PostSchoolManagementDrawer";

const SchoolManagement = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle !== false && (
        <PostSchoolManagementDrawer toggle={toggle} setToggle={setToggle} />
      )}
      <PageContainer>
        <PageHeader
          title="School Management"
          subTitle="School Management"
          extra={
            <button
              onClick={() => setToggle(true)}
              className="bg-[#27A3A3] gap-[8px] w-[146px] h-[48px] border rounded-lg flex justify-center items-center cursor-pointer"
            >
              <span className="text-[#F9FAFB] text-[1rem] font-semibold">
                Add Now
              </span>
            </button>
          }
        />
        <SchoolManagementTable />
      </PageContainer>
    </>
  );
};

export default SchoolManagement;
