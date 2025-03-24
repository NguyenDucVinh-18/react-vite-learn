import React from "react";
import { Button, Form, Input, notification } from "antd";
import { registerUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm();
    let navigate = useNavigate();

    const onFinish = async (values) => {
        // console.log("values:", values);
        const {fullname, email, password, phone} = values;
        const res = await registerUserAPI(fullname, email, password, phone);
        console.log(res);
        if(res.data){
            notification.success({
                message: "Success",
                description: "register user successfully",
              });
            navigate("/login");
        } else {
            notification.error({
                message: "Error",
                description: JSON.stringify(res.message),
              });
        }
    }
  return (
    <div style={{margin: 50}}>
        <Form
         form={form}
         layout="vertical"
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    //   autoComplete="off"

    >
      <Form.Item
        label="FullName"
        name="fullname"
        rules={[
          {
            required: true,
            message: "Please input your FullName!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Phone number"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your phone!",
          },
        ]}
      >
        <Input />
      </Form.Item>


        <Button type="primary" onClick={() => form.submit()}>
          Submit
        </Button>
    </Form>
    </div>
  );
};

export default RegisterPage
