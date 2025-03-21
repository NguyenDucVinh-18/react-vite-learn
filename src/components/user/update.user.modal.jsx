import { Input, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
  const {
    isModalUpdateUserOpen,
    setIsModalUpdateUserOpen,
    dataUserUpdate,
    setDataUserUpdate,
    getDataUser
  } = props;

  const [fullName, setFullName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(()=>{
    if(dataUserUpdate){
      setFullName(dataUserUpdate.fullName);
      setId(dataUserUpdate._id);
      setPhone(dataUserUpdate.phone);
    }
  },[dataUserUpdate])

  const handleCloseAndClearModal = () =>{   
    setFullName("");
    setPhone("");
    setId("");
    setIsModalUpdateUserOpen(false);
  }


  const handleCancel = () => {
    setIsModalUpdateUserOpen(false);
  };

  const handleClick = async () => {
    const res = await updateUserAPI(dataUserUpdate._id,fullName, phone);
    if (res.data) {
      notification.success({
        message: "Success",
        description: "update user successfully",
      });
      handleCloseAndClearModal();
      await getDataUser(); 
    } else {
      notification.error({
        message: "Error",
        description: JSON.stringify(res.message),
      });
    }
    
    // console.log(res.data);
  };

//   console.log(dataUserUpdate);

  return (
    <Modal
      title="Create User Modal"
      open={isModalUpdateUserOpen}
      onOk={() => handleClick()}
      onCancel={handleCancel}
      maskClosable={false}
      okText="Create"
    >
      <div>
        <div>Id</div>
        <Input
          value={id}
          disabled
        />
      </div>
      <div>
        <div>FullName</div>
        <Input
          value={fullName}
          onChange={(event) => {
            setFullName(event.target.value);
          }}
        />
      </div>
      <div>
        <div>Phone Number</div>
        <Input
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
      </div>
    </Modal>
  );
};

export default UpdateUserModal;
