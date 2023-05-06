import React from "react";
import { TUser } from "../Navbar/types/TUser";
import { DEFAULT_USER } from "../constant/TVisitor";


export const UserContext = React.createContext({
    user: DEFAULT_USER,
    setUser: (value: TUser) => { }, //prend en paramètre un objet de type TUser et qui ne retourne rien. Cette fonction est utilisée pour mettre à jour les informations de l'utilisateur dans le contexte UserContext.
});
