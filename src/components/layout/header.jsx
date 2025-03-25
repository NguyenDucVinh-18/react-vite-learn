import { Link, useNavigate } from "react-router-dom";
import { Children, useContext, useState } from "react";
import {
  HomeOutlined,
  UserOutlined,
  BookOutlined,
  LoginOutlined,
  LogoutOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";
import { Menu, message } from "antd";
import { AuthContext, AuthWrapper } from "../context/auth.context";
import { logoutAPI } from "../../services/api.service";

const Header = () => {
  const [current, setCurrent] = useState("mail");
  const { user, setUser } = useContext(AuthContext);
  let navigate = useNavigate();
  console.log("user", user);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const handleLogout = async () => {
    await logoutAPI();
    localStorage.removeItem("access_token");
    navigate("/login");
    message.success("Logout successfully");
    setUser({
      avatar: "",
      email: "",
      fullName: "",
      id: "",
      phone: "",
      role: "",
    });
  };

  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/users">Users</Link>,
      key: "users",
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/books">Books</Link>,
      key: "books",
      icon: <BookOutlined />,
    },
    ...(!user.id
      ? [
          {
            label: <Link to={"/login"}>Login</Link>,
            key: "login",
            icon: <LoginOutlined />,
          },
        ]
      : []),

    ...(user.id
      ? [
          {
            label: `Welcome ${user.fullName}`,
            key: "setting",
            icon: <AliwangwangOutlined />,
            children: [
              {
                label: <span onClick={() => handleLogout()}> Logout</span>,
                key: "logout",
              },
            ],
          },
        ]
      : []),
  ];

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
