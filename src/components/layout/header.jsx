import { Link } from "react-router-dom";
import { useState } from "react";
import { HomeOutlined, UserOutlined, BookOutlined } from "@ant-design/icons";
import { Menu } from "antd";
// import "./header.css";

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
];

const Header = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
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
