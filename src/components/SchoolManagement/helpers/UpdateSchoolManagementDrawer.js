import React, { useEffect } from "react";
import { Button, Col, Drawer, Form, Row, Space, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { updateSchoolManagementApi } from "../../../redux/api/SchoolManagement";
const { TextArea } = Input;

const UpdateSchoolManagementDrawer = ({ updateState, setUpdateState }) => {
  const dispatch = useDispatch();
  const [form] = useForm();
  const updateSchoolManagement = useSelector(
    (state) => state?.updateSchoolManagement
  );
  const onFinish = (value) => {
    const body = {
      id: updateState.id,
      ...value,
    };
    if (updateState?.id) {
      updateSchoolManagementApi(dispatch, body, updateState?.id, onSuccess);
    }
  };
  function onSuccess() {
    setUpdateState({});
    form.resetFields();
  }
  useEffect(() => {
    form.setFieldsValue(updateState);
  }, [updateState]);

  return (
    <>
      <Drawer
        title={
          <h3 className="text-[1.2rem] font-medium text-[#475467]">
            Update Now
          </h3>
        }
        placement="right"
        width={470}
        open={updateState}
        closable={false}
        onClose={() => setUpdateState({})}
        extra={
          <Space>
            <CloseOutlined onClick={() => setUpdateState({})} />
          </Space>
        }
      >
        <Form
          onFinish={onFinish}
          name="addNow"
          form={form}
          autoComplete="off"
          initialValues={{ remember: true }}
        >
          <Row gutter={16}>
            <Col sm={24} xs={24} lg={24} md={24}>
              <Row gutter={16}>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className=" mb-1 ">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Name
                    </p>
                  </div>
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your name!",
                      },
                    ]}
                  >
                    <Input
                      className="h-[44px]"
                      placeholder="Name"
                      name="name"
                    />
                  </Form.Item>
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="mt-1 mb-1">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Class
                    </p>
                  </div>
                  <Form.Item
                    name="class"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your class!",
                      },
                    ]}
                  >
                    <Input
                      className="h-[44px] "
                      placeholder="Class"
                      name="class"
                    />
                  </Form.Item>
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="mt-1 mb-1">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Section
                    </p>
                  </div>
                  <Form.Item
                    name="section"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your section!",
                      },
                    ]}
                  >
                    <Input
                      className="h-[44px] "
                      placeholder="Section"
                      name="section"
                    />
                  </Form.Item>
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="mt-1 mb-1">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Description
                    </p>
                  </div>
                  <Form.Item
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your description!",
                      },
                    ]}
                  >
                    <TextArea
                      maxLength={100}
                      placeholder="Description"
                      style={{ height: 160, resize: "none" }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="flex justify-end gap-2">
            <Button
              onClick={() => setUpdateState({})}
              className=" text-[#475467] border-none h-[40px] bg-transparent text-[1rem] font-semibold border"
            >
              Cencel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              loading={updateSchoolManagement?.loading}
              className="bg-[#27A3A3] text-[#fff] border-none h-[40px]  text-[1rem] font-semibold"
            >
              Update
            </Button>
          </div>
        </Form>
      </Drawer>
    </>
  );
};

export default UpdateSchoolManagementDrawer;
