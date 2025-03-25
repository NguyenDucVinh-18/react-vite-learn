import { createContext, useState } from "react";

export const AuthContext = createContext({
  avatar: "",
  email: "",
  fullName: "",
  id: "",
  phone: "",
  role: "",
});

export const AuthWrapper = (props) => {
    const [user, setUser] = useState({
        avatar: "",
        email: "",
        fullName: "",
        id: "",
        phone: "",
        role: "",
    });

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}
