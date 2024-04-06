import React, { useEffect, useState } from "react";
import { Table, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSchoolManagementApi,
  getSchoolManagementApi,
} from "../../../redux/api/SchoolManagement";
import UpdateSchoolManagementDrawer from "./UpdateSchoolManagementDrawer";
import deleteIcon from "../../../assests/deleteIcon.png";
import editPenIcon from "../../../assests/editPenIcon.png";

const SchoolManagementTable = () => {
  const dispatch = useDispatch();
  const [updateState, setUpdateState] = useState({});
  const [dataSource, setDataSource] = useState([]);
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const {
    deleteSchoolManagement,
    getSchoolManagement,
    updateSchoolManagement,
    postSchoolManagement,
  } = useSelector((state) => state);
  function showTotal(total, range) {
    setPageLimit({
      page: total,
      limit: range,
    });
  }
  useEffect(() => {
    getSchoolManagementApi(dispatch);
  }, [
    dispatch,
    deleteSchoolManagement.data,
    updateSchoolManagement.data,
    postSchoolManagement.data,
    pageLimit,
  ]);
  useEffect(() => {
    if (getSchoolManagement?.data?.length > 0) {
      const data = getSchoolManagement?.data?.map((item) => {
        return {
          key: item?.id,
          name: (
            <span className="font-medium text-[1rem] text-[#344054] cursor-pointer flex items-center gap-1">
              {item?.name}
            </span>
          ),
          class: (
            <span className="font-medium text-[1rem] text-[#344054]">
              {item?.class || "-"}
            </span>
          ),
          section: (
            <span className="font-medium text-[1rem] text-[#344054]">
              {item?.section.toUpperCase()}
            </span>
          ),
          description: (
            <span className="font-medium text-[1rem] text-[#344054] ">
              {item?.description.length > 15 ? (
                <Tooltip
                  className="cursor-pointer "
                  placement="top"
                  title={item?.description.length > 15 && item?.description}
                >
                  {`${item?.description.substring(0, 15)}...`}
                </Tooltip>
              ) : (
                <>{item?.description}</>
              )}
            </span>
          ),
          action: (
            <div className="flex gap-3 items-center">
              <button
                className="flex items-center border-none bg-none"
                onClick={() => setUpdateState(item)}
              >
                <img src={editPenIcon} alt="" />
              </button>
              <button
                className="flex items-center border-none bg-none"
                onClick={() => {
                  deleteSchoolManagementApi(dispatch, item?.id);
                }}
              >
                <img src={deleteIcon} alt="" />
              </button>
            </div>
          ),
        };
      });
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [getSchoolManagement?.data]);

  return (
    <>
      {updateState?.id && (
        <UpdateSchoolManagementDrawer
          updateState={updateState}
          setUpdateState={setUpdateState}
        />
      )}
      <Table
        columns={[
          {
            title: "Name",
            dataIndex: "name",
          },
          {
            title: "Class",
            dataIndex: "class",
          },
          {
            title: "Section",
            dataIndex: "section",
          },
          {
            title: "Description",
            dataIndex: "description",
          },
          {
            title: "Action",
            dataIndex: "action",
          },
        ]}
        dataSource={dataSource}
        loading={getSchoolManagement?.loading}
        pagination={{
          total: getSchoolManagement?.data?.length,
          onChange: showTotal,
        }}
        scroll={{ x: true }}
      />
    </>
  );
};

export default SchoolManagementTable;
