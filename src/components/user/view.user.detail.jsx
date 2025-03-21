import React, { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
const UserDetail = (props) => {
  const { isUserDetailOpen, setIsUserDetailOpen, dataDetail } = props;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");

    useEffect(()=>{
      if(dataDetail){
        setFullName(dataDetail.fullName);
        setId(dataDetail._id);
        setPhone(dataDetail.phone);
        setEmail(dataDetail.email);
      }
    },[dataDetail])


  const showDrawer = () => {
    setIsUserDetailOpen(true);
  };
  const onClose = () => {
    setIsUserDetailOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="User Detail" onClose={onClose} open={isUserDetailOpen}>
        <div>
          <p>Id: {id}</p>
          <p>Full Name: {fullName}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
        </div>
      </Drawer>
    </>
  );
};
export default UserDetail;
