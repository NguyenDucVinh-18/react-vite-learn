import React from "react";
import { Button, Form, Input, message, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../services/api.service";

const LoginPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  let navigate = useNavigate();

  const onFinish = async (values) => {
    const { username, password } = values;
    setLoading(true);
    const res = await loginAPI(username, password);
    if(res.data){
        message.success("Login successfully");
        navigate("/");
    } else {
        notification.error({
            message: "Error",
            description: JSON.stringify(res.message),
          });
    }
    setLoading(false);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      //   autoComplete="off"
    >
      <div style={{ margin: 50 }}>
        <Form.Item
          label="Email"
          name="username"
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

        <Button loading={loading} type="primary" onClick={() => form.submit()}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default LoginPage;
