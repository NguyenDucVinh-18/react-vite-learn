import React, { useContext } from "react";
import { Button, Form, Input, message, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../services/api.service";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  let navigate = useNavigate();
    const {setUser} = useContext(AuthContext)

  const onFinish = async (values) => {
    setLoading(true);
    const { username, password } = values;
    const res = await loginAPI(username, password);
    if(res.data){
        console.log(res.data);
        message.success("Login successfully");
        localStorage.setItem("access_token", res.data.access_token);
        setUser(res.data.user);
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

        <div>
            <Button loading={loading} type="primary" onClick={() => form.submit()}>
                Submit
            </Button>
            <div>
            <Link to="/register">I do not have an account</Link>
            </div>
        </div>
      </div>
    </Form>
  );
};

export default LoginPage;
