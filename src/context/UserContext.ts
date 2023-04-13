import React from "react";
import { TUser } from "../Navbar/types/TUser";
import { visitor } from "../Navbar/types/TVisitor";


export const UserContext = React.createContext({
    user: visitor,
    setUser: (value: TUser) => { },
});
