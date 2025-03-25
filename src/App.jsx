
import "./components/todo/todo.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet , Link} from "react-router-dom";
import { getAccountAPI } from "./services/api.service";
import { useContext, useEffect } from "react";
import { AuthContext } from "./components/context/auth.context";


function App() {

  const {setUser} = useContext(AuthContext)

  useEffect(() => {
    fetchUserInfor();
  }, []);
  
  const fetchUserInfor = async () => {
    const res = await getAccountAPI();
    if(res.data){
      setUser(res.data.user);
      console.log("user", res.data);
    }
  }
  

  return (
    <>
      <Header />
      <Outlet />
      <Footer/> 
    </>
  );
}

export default App;
