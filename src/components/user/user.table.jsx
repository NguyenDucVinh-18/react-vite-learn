import { Table } from "antd";
import { useEffect, useState } from "react";
import { getAllUserAPI } from "../../services/api.service";
const UserTable = (props) => {

  const {getDataUser, dataUser} = props;

  useEffect(() => {
    getDataUser();
    console.log("run useEffect");
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];
  return <Table dataSource={dataUser} columns={columns} rowKey={"_id"} />;
};

export default UserTable;
