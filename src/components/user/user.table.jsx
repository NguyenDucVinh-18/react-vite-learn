import {  Popconfirm, Space, Table, Tag, notification } from "antd";
import { useEffect, useState } from "react";
import { getAllUserAPI , deleteUserAPI} from "../../services/api.service";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal";
import UserDetail from "./view.user.detail";
const UserTable = (props) => {
  const [isModalUpdateUserOpen, setIsModalUpdateUserOpen] = useState(false);
  const [isUserDetailOpen, setIsUserDetailOpen] = useState(false);
  const { dataUser } = props;
  const [dataUserUpdate, setDataUserUpdate] = useState(null);
  const [dataDetail, setDataDetail] = useState(null);
  const { getDataUser } = props;

  const handleConfirmDetele = async (id) => {
    const res = await deleteUserAPI(id);
    console.log("delete user successfully");
    // console.log(res);
    if (res.data) {
      console.log("notification successfully1");
      console.log("run load data");
      await getDataUser();
      notification.success({
        message: "Success",
        description: "Delete user successfully",
      });
    } else {
      notification.error({
        message: "Error",
        description: JSON.stringify(res.message),
      });
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      render: (_, record) => {
        return (
          <a
            onClick={() => {
              setIsUserDetailOpen(true);
              setDataDetail(record);
            }}
          >
            {record._id}
          </a>
        );
      },
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined
            onClick={() => {
              setIsModalUpdateUserOpen(true);
              setDataUserUpdate(record);
            }}
          />
          <Popconfirm
            title="Delete user"
            description="Are you sure to delete this user?"
            onConfirm={() => handleConfirmDetele(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined />
          </Popconfirm>
          
        </Space>
      ),
    },
  ];
  return (
    <>
      <Table dataSource={dataUser} columns={columns} rowKey={"_id"} />;
      <UpdateUserModal
        isModalUpdateUserOpen={isModalUpdateUserOpen}
        setIsModalUpdateUserOpen={setIsModalUpdateUserOpen}
        dataUserUpdate={dataUserUpdate}
        setDataUserUpdate={setDataUserUpdate}
        getDataUser={getDataUser}
      />
      <UserDetail
        isUserDetailOpen={isUserDetailOpen}
        setIsUserDetailOpen={setIsUserDetailOpen}
        dataDetail={dataDetail}
        setDataDetail={setDataDetail}
        getDataUser={getDataUser}
      />
    </>
  );
};

export default UserTable;
