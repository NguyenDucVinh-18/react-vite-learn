import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { getAllUserAPI } from "../services/api.service";

const UserPage = () => {
  const [dataUser, setDataUser] = useState([]);

  const getDataUser = async () => {
    const res = await getAllUserAPI();
    setDataUser(res.data);
  };

  console.log("run load data");

  return (
    <div>
      <UserForm 
         getDataUser={getDataUser} 
      />
      <UserTable 
        dataUser={dataUser} 
        getDataUser={getDataUser} 
      />
    </div>
  );
};

export default UserPage;
