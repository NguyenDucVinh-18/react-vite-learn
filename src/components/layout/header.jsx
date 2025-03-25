import { Link } from "react-router-dom";
import { Children, useContext, useState } from "react";
import { HomeOutlined, UserOutlined, BookOutlined, LoginOutlined, LogoutOutlined, AliwangwangOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { AuthContext, AuthWrapper } from "../context/auth.context";



const Header = () => {
  const [current, setCurrent] = useState("mail");
  const {user} = useContext(AuthContext)
  console.log("user", user);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
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
    ...(!user.id ? [{
      label: <Link to={"/login"}>Login</Link>,
      key: 'login',
      icon: <LoginOutlined />,
  }] : []),
  
  ...(user.id ? [{
      label: `Welcome ${user.fullName}`,
      key: 'setting',
      icon: <AliwangwangOutlined />,
      children: [
          {
              label: 'Logout',
              key: 'logout',
          },
      ],
  }] : []),
  
  
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
