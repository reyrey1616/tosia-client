import React, { useState } from "react";
import { Form, Input, Radio, Select, DatePicker, Button } from "antd";
import axios from "axios";
import { notify } from "../../global/alerts/alerts.component";
import { useHistory } from "react-router-dom";
import errorCatch from "../../../utils/errorCatch";
import { verificationEmail } from "../../../utils/sendMail";
const { Option } = Select;
const RegistrationForm = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const request = await axios.post("/auth/register", values);
      const response = request.data;

      if (response.success) {
        notify(
          "Registration success!",
          "success",
          "We've sent you an email to verify your email address to activate your account!"
        );
        setTimeout(() => {
          setLoading(false);

          verificationEmail({
            name: `${response?.data?.fname} ${response?.data?.mname} ${response?.data?.lname}`,
            to_email: values?.email,
            verification_link: `<a href = "https://jci-tosia.netlify.app/verification/${response?.data?.id}">I'm confirming my account</a>`,
          });

          console.log(values);

          history.push("/login");
        }, 1500);
      } else {
        throw Error;
      }
    } catch (error) {
      setLoading(false);

      errorCatch(error, "Registration Error, Please refresh the page!");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      layout="vertical"
      name="basic"
      initialValues={{
        referral: "Principal's Office",
        gender: "Male",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className="flex flex-wrap mb-2">
        <Form.Item
          className="col-6 col-md-12 p-half mb-0"
          label="First Name"
          name="fname"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item
          className="col-6 col-md-12 p-half mb-0"
          label="Middle Name"
          name="mname"
          rules={[
            {
              required: true,
              message: "Please input your middle name!",
            },
          ]}
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item
          className="col-6 col-md-12 p-half"
          label="Last Name"
          name="lname"
          rules={[
            {
              required: true,
              message: "Please input your last name!",
            },
          ]}
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item
          className="col-6 col-md-12 p-half"
          label="Sex"
          name="gender"
          rules={[
            {
              required: true,
              message: "Please select your sex!",
            },
          ]}
        >
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="Male">Male</Radio.Button>
            <Radio.Button value="Female">Female</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          className="col-6 col-md-12 p-half"
          label="Phone Number"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item
          className="col-6 col-md-12 p-half"
          label="Birthdate"
          name="birthdate"
          rules={[
            {
              required: true,
              message: "Please input your birthdate!",
            },
          ]}
        >
          <DatePicker allowClear style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          className="col-12 col-md-12 p-half"
          label="School Name"
          name="schoolName"
          rules={[
            {
              required: true,
              message: "Please input your school name!",
            },
          ]}
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item
          className="col-12 col-md-12 p-half"
          label="How did you know about TOSIA?"
          name="referral"
          rules={[
            {
              required: true,
              message: "Please select referral!",
            },
          ]}
        >
          <Select>
            <Option value="Principal's Office">Principal's Office</Option>
            <Option value="Office of the Student Affairs">
              Office of the Student Affairs
            </Option>
            <Option value="TOSIA Alumni">TOSIA Alumni</Option>
            <Option value="Family / Friends">Family / Friends</Option>
            <Option value="Newspaper, poster, etc.">
              Newspaper, poster, etc.
            </Option>
            <Option value="Social Networking Sites">
              Social Networking Sites
            </Option>
            <Option value="Others">Others</Option>
          </Select>
        </Form.Item>
        <Form.Item
          className="col-12 col-md-12 p-half"
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item
          className="col-6 col-md-12 p-half"
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password allowClear />
        </Form.Item>
        <Form.Item
          className="col-6 col-md-12 p-half"
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password allowClear />
        </Form.Item>
      </div>

      <Form.Item>
        <center>
          <Button htmlType="submit" type="primary" loading={loading}>
            {" "}
            Submit
          </Button>
        </center>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
