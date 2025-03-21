import React, { useState } from "react";
import { Button, Drawer } from "antd";
const UserDetail = (props) => {
  const { isUserDetailOpen, setIsUserDetailOpen, dataDetail } = props;
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
          <p>Id: {dataDetail._id}</p>
          <p>Full Name: {dataDetail.fullName}</p>
          <p>Email: {dataDetail.email}</p>
          <p>Phone: {dataDetail.phone}</p>
        </div>
      </Drawer>
    </>
  );
};
export default UserDetail;
