import React, { useState } from "react";
import { UserContext } from "../../context/UserContext";
import UpdateInfo from "./UpdateInformation";



export default function Profile(props: {
    page: string,
    setPage: React.Dispatch<React.SetStateAction<"Configurateur" | "Profile" | "updateInfo">>
}) {
    const userCtx = React.useContext(UserContext);
    const { user } = userCtx
    const [modifInfo, setModifInfo] = useState("")
    const [visible, setVisible] = useState("")





    return (
        <div className="rounded opacity2 hauteurOrder stickyAff ">
            <h2 className="text-white ms-2">
                Profile
            </h2>

            <button
                type="button"
                className="btn-close green-close"
                id="close"
                onClick={() => {
                    props.setPage('Configurateur');
                }}>
            </button>

            <div className=" ms-2 color-txt-orange">
                <div className="cursor" onClick={() => {
                    setModifInfo('updateInfo'); setVisible(visible ? "" : "updateInfo")
                }}>{visible ? "Retour" : "Modifier mes Informations"}</div>


                <div className="cursor">Modifier mon Mot de Passe</div>


                <div className="cursor">Mes Configurations</div>

            </div>
            {visible === "" && (
                <div>
                    <p> Votre Email : {user && user.email}</p>
                    <p> Votre Nom : {user && user.nom}</p>
                    <p>Votre Prénom : {user && user.prenom}</p>
                    <p>Votre adresse actuelle : {user && user.adresse}</p>
                </div>
            )}

            {visible === "updateInfo" && (
                <div >
                    {modifInfo === 'updateInfo' && <UpdateInfo setPage={props.setPage} />}
                </div>
            )}
            </div>
    )
}






