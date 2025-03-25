import axios from "./axios.customize";
const createUserAPI = (fullName, email, password, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    fullName,
    email,
    password,
    phone,
  };
  return axios.post(URL_BACKEND, data);
};

const getAllUserAPI = () => {
  const URL_BACKEND = "/api/v1/user";
  return axios.get(URL_BACKEND);
};

const updateUserAPI = (_id, fullName, phone) => {
  const URL_BACKEND = `/api/v1/user`;
  const data = {
    _id,
    fullName,
    phone,
  };
  return axios.put(URL_BACKEND, data);
};

const deleteUserAPI = (_id) => {
  const URL_BACKEND = `/api/v1/user/${_id}`;
  return axios.delete(URL_BACKEND);
};

const handleUploadFile = (file, folder) => {
  const URL_BACKEND = `/api/v1/file/upload`;
  const config = {
    headers: {
      "upload-type": folder,
      "content-type": "multipart/form-data",
    },
  };
  const bodyFromData = new FormData();
  bodyFromData.append("fileImg", file);
  return axios.post(URL_BACKEND, bodyFromData, config);
};

const updateAvatarAPI = (avatar, _id, fullName, phone) => {
  const URL_BACKEND = `/api/v1/user`;
  const data = {
    avatar,
    _id,
    fullName,
    phone,
  };
  return axios.put(URL_BACKEND, data);
};

const registerUserAPI = (fullName, email, password, phone) => {
  const URL_BACKEND = "/api/v1/user/register";
  const data = {
    fullName,
    email,
    password,
    phone,
  };
  return axios.post(URL_BACKEND, data);
};

const loginAPI = (username, password) => {
  const URL_BACKEND = "/api/v1/auth/login";
  const data = {
    username,
    password,
    delay:2000
  };
  return axios.post(URL_BACKEND, data);
};

const getAccountAPI = () => {
  const URL_BACKEND = "/api/v1/auth/account";
  return axios.get(URL_BACKEND);
};

const logoutAPI = () => {
  const URL_BACKEND = "/api/v1/auth/logout";
  return axios.post(URL_BACKEND);
};



export {
  createUserAPI,
  getAllUserAPI,
  updateUserAPI,
  deleteUserAPI,
  handleUploadFile,
  updateAvatarAPI,
  registerUserAPI,
  loginAPI,
  getAccountAPI,
  logoutAPI
};
