import { Input, Modal, notification } from "antd";
import { Button } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = (props) => {
  const { getDataUser } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCloseAndClearModal = () =>{   
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setIsModalOpen(false);
  }


  const handleClick = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res.data) {
      notification.success({
        message: "Success",
        description: "User created successfully",
      });
      handleCloseAndClearModal();
      // console.log("run clear modal");
      await getDataUser();
      // console.log("run load data from form");
      
    } else {
      notification.error({
        message: "Error",
        description: JSON.stringify(res.message),
      });
    }

    // console.log(res.data);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" , margin: "10px"}}>
        <div>Table User</div>
        <Button onClick={() => setIsModalOpen(true)} type="primary">
          Create User
        </Button>
      </div>
      <Modal
        title="Create User Modal"
        open={isModalOpen}
        onOk={() => {handleClick()}}
        onCancel={handleCancel}
        maskClosable={false}
        okText="Create"
      >
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
          <div>Email</div>
          <Input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <div>Password</div>
          <Input.Password
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
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
    </div>
  );
};

export default UserForm;
