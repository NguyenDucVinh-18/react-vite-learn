import { Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { getAllUserAPI } from "../../services/api.service";
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
          <DeleteOutlined />
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
      />
    </>
  );
};

export default UserTable;
