import React, { useEffect, useState } from "react";
import { Button, Drawer, notification } from "antd";
import { handleUploadFile, updateAvatarAPI } from "../../services/api.service";
const UserDetail = (props) => {
  const { isUserDetailOpen, setIsUserDetailOpen, dataDetail, setDataDetail , getDataUser} = props;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
  const [avatar, setAvatar] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (dataDetail) {
      setFullName(dataDetail.fullName);
      setId(dataDetail._id);
      setPhone(dataDetail.phone);
      setEmail(dataDetail.email);
      setAvatar(dataDetail.avatar);
      // console.log("run data detail");
    }
  }, [dataDetail]);

  const showDrawer = () => {
    setIsUserDetailOpen(true);
  };
  const onClose = () => {
    setIsUserDetailOpen(false);
  };

  const onSelectFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setPreview(null);
      setSelectedFile(null);
      return;
    }
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateAvatar = async () => {
    const resUploadAvatar = await handleUploadFile(selectedFile, "avatar");
    console.log(resUploadAvatar);
    if (resUploadAvatar.data) {
      const newAvatar = resUploadAvatar.data.fileUploaded;
      updateAvatarAPI(newAvatar, id, fullName, phone);
      onClose();
      getDataUser();
      // console.log("upload data user successfully");
      setSelectedFile(null);
      setPreview(null);
      notification.success({
        message: "Success",
        description: "update avatar user successfully",
      });
    } else {
      notification.error({
        message: "Error",
        description: JSON.stringify(resUploadAvatar.message),
      });
    }
  }



  // console.log(preview);
  return (
    <>
      <Drawer title="User Detail" onClose={onClose} open={isUserDetailOpen}>
        <div>
          <p>Id: {id}</p>
          <p>Full Name: {fullName}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Avatar: </p>
          <div
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              overflow: "hidden",
            }}
          >
            <img
              src={`http://localhost:8080/images/avatar/${avatar}`}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <label
              htmlFor="btnUploadAvatar"
              style={{
                backgroundColor: "#1890ff",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Upload Avatar
            </label>
            <input
              type="file"
              hidden
              id="btnUploadAvatar"
              onChange={(event) => onSelectFile(event)}
            />
          </div>
          {preview && (
            <>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  border: "1px solid black",
                  overflow: "hidden",
                }}
              >
                <img
                  src={preview}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div>
                <Button
                  type="primary"
                  onClick={() => handleUpdateAvatar()}
                  style={{ marginTop: "10px" }}
                >
                  Save
                </Button>
              </div>
            </>
          )}
        </div>
      </Drawer>
    </>
  );
};
export default UserDetail;
