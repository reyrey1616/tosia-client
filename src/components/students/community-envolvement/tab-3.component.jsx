import React, { useState } from "react";
import { Form, Input, Select, DatePicker, Button } from "antd";
import ActivitiesOrganizedTable from "./table-tab-3.component";
import { notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { addCommunityEnvolvement } from "../../../functions/community-envolvement";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
const { Option } = Select;
const { TextArea } = Input;
const ActivitiesOrganized = ({ data }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [form] = Form.useForm();
  const [imageFile, setImageFile] = useState();
  const [fileKey, setFileKey] = useState(Date.now());
  const [buttonLoading, setButtonLoading] = useState(false);
  const onFinish = (values) => {
    values.image = imageFile;
    values.type = "activities_organized";

    if (!imageFile) {
      notify("Please add image!", "warning");
    } else {
      console.log("Success:", values);
      console.log(user._id);
      setButtonLoading(true);
      dispatch(
        addCommunityEnvolvement(user._id, values, () => {
          notify("Activities Organized Added");
          form.resetFields();
          setImageFile(null);
          setFileKey(Date.now());
          setButtonLoading(false);
        })
      );
    }
  };

  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        notify("File must be image", "warning");
        e.target.value = null;
      } else if (file.size > 2000000) {
        notify("Image must be less than 2 MB", "warning");
        e.target.value = null;
      } else {
        setImageFile(file);
      }
    } else {
      setImageFile(null);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="tab-page-container">
      <Form
        form={form}
        layout="vertical"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        hidden={
          // user && user?.isFinished
          //   ? true
          //   : data && data?.community[0]?.activitiesOrganized?.length >= 30
          //   ? true
          //   : false
          true
        }
      >
        <div className="flex flex-wrap mb-1">
          <div className="col-12 flex-wrap">
            <div className="col-5">
              <Form.Item
                className="col-12 col-md-12 p-half mb-0"
                label="Activity Name"
                name="activityName"
                rules={[
                  {
                    required: true,
                    message: "Please input activity name",
                  },
                ]}
              >
                <Input allowClear />
              </Form.Item>

              <Form.Item
                className="col-12 col-md-12 p-half mb-0"
                label="Short Description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please input  Short Description",
                  },
                ]}
              >
                <TextArea allowClear showCount rows={4} maxLength={200} />
              </Form.Item>
            </div>
            <div className="col-7 flex-wrap">
              <Form.Item
                className="col-6 col-md-12 p-half"
                label="Beneficiaries"
                name="beneficiaries"
                rules={[
                  {
                    required: true,
                    message: "Please input beneficiaries!",
                  },
                ]}
              >
                <Input allowClear />
              </Form.Item>
              <Form.Item
                className="col-6  col-md-12 p-half"
                label="At what level was the project implemented?"
                name="levelImplemented"
                rules={[
                  {
                    required: true,
                    message:
                      "Please select Level the Activity was Implemented !",
                  },
                ]}
              >
                <Select>
                  <Option value="School-based">School-based</Option>
                  <Option value="District">District</Option>
                  <Option value="Regional">Regional</Option>
                  <Option value="Provincial">Provincial</Option>
                  <Option value="National">National</Option>
                  <Option value="International">International</Option>
                </Select>
              </Form.Item>

              <Form.Item
                className="col-6 col-md-12 p-half mb-0"
                label="Significant role in the activity organized"
                name="role"
                rules={[
                  {
                    required: true,
                    message:
                      "Please input significant role in the activity organized!",
                  },
                ]}
              >
                <Input allowClear />
              </Form.Item>

              <Form.Item
                className="col-6 col-md-12 p-half"
                label="Date Conducted"
                name="dateConducted"
                rules={[
                  {
                    required: true,
                    message: "Please input date conducted!",
                  },
                ]}
              >
                <DatePicker allowClear style={{ width: "100%" }} />
              </Form.Item>

              <div className="col-12 col-md-12 p-half mb-0" name="image">
                <div className="ant-col ant-form-item-label">
                  <label className="ant-form-required"> Image:</label>
                </div>
                <input key={fileKey} type="file" onChange={handleImageChange} />
              </div>
            </div>
          </div>
        </div>
        <Form.Item className="button-form-item">
          <Button
            htmlType="submit"
            size="large"
            type="primary"
            loading={buttonLoading}
          >
            &nbsp; Save changes
          </Button>
        </Form.Item>
      </Form>

      <div className="table-container mt-2">
        <ActivitiesOrganizedTable
          data={data && data.community[0].activitiesOrganized}
        />
      </div>
    </div>
  );
};

export default ActivitiesOrganized;
