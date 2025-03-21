import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from "react";
import { getAllUserAPI } from "../../services/api.service";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
const UserTable = (props) => {

  const [isModalUpdateUserOpen, setIsModalUpdateUserOpen] = useState(false);
  const {dataUser} = props;
  const [dataUserUpdate, setDataUserUpdate] = useState(null);
  const { getDataUser } = props;



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
    {
      title: 'Action',
      key: 'action',
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
    </>
  )
  
};

export default UserTable;
