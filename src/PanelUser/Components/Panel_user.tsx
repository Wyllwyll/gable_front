import React, { useState } from "react";
import { UserContext } from "../../context/UserContext";
import UpdateInfo from "./UpdateInformation";
import UpdatePassword from "./UpdatePassword";
import UpdateOrders from "./UpdateOrders";



export default function Profile(props: {
    page: string,
    setPage: React.Dispatch<React.SetStateAction<"Configurateur" | "Profile" | "updateInfo" | "updatePassword" | "updateOrders" | "orderAffichage">>

}) {
    const userCtx = React.useContext(UserContext);
    const { user } = userCtx
    const [modifInfo, setModifInfo] = useState("")
    const [visible, setVisible] = useState("")
    const [modifPass, setModifPass] = useState("")
    const [modifOrders, setModifOrders] = useState("")





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
                    setModifInfo('updateInfo'); setVisible(visible === "updateInfo" ? "" : "updateInfo")
                }}>{visible === "updateInfo" ? "Retour" : "Modifier mes Informations"}</div>



                <div className="cursor" onClick={() => {
                    setModifPass('updatePassword'); setVisible(visible === "updatePassword" ? "" : "updatePassword")
                }}>{visible === "updatePassword" ? "Retour" : "Modifier mon Mot de Passe"}</div>


                <div className="cursor" onClick={() => {
                    setModifOrders('updateOrders'); setVisible(visible === "updateOrders" ? "" : "updateOrders")
                }}>{visible === "updateOrders" ? "Retour" : "Mes Configurations"}</div>






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


            {visible === "updatePassword" && (
                <div >
                    {modifPass === 'updatePassword' && <UpdatePassword setPage={props.setPage} />}
                </div>
            )}

            {visible === "updateOrders" && (
                <div >
                    {modifOrders === 'updateOrders' && <UpdateOrders setPage={props.setPage} />}
                </div>
            )}
        </div>


    )
}






