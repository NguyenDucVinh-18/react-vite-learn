import { Input } from "antd";
import { Button } from "antd";
import { useState } from "react";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = () => {
    console.log("Form Data", {
      fullName,
      email,
      password,
      phone,
    });
  }

  return (
    <div>
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
      <div>
        <Button 
        onClick={() => handleClick()}
        type="primary">Submit</Button>
      </div>
    </div>
  );
};

export default UserForm;
