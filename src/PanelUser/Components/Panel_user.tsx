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
    // Utiliser des états pour gérer les différentes parties du profil
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
            {/* Option pour modifier les informations utilisateur */}
            <div className=" ms-2 color-txt-orange">
                <div className="cursor" onClick={() => {
                    setModifInfo('updateInfo'); setVisible(visible === "updateInfo" ? "" : "updateInfo")
                }}>{visible === "updateInfo" ? "Retour" : "Modifier mes Informations"}</div>


                {/* Option pour modifier le mot de passe utilisateur */}
                <div className="cursor" onClick={() => {
                    setModifPass('updatePassword'); setVisible(visible === "updatePassword" ? "" : "updatePassword")
                }}>{visible === "updatePassword" ? "Retour" : "Modifier mon Mot de Passe"}</div>

                {/* Option pour afficher les configurations(Orders) d'un utilisateur */}
                <div className="cursor" onClick={() => {
                    setModifOrders('updateOrders'); setVisible(visible === "updateOrders" ? "" : "updateOrders")
                }}>{visible === "updateOrders" ? "Retour" : "Mes Configurations"}</div>
            </div>



            {/* Afficher les informations de l'utilisateur */}
            {visible === "" && (
                <div>
                    <p> Votre Email : {user && user.email}</p>
                    <p> Votre Nom : {user && user.nom}</p>
                    <p>Votre Prénom : {user && user.prenom}</p>
                    <p>Votre adresse actuelle : {user && user.adresse}</p>
                </div>
            )}


            {/* Afficher le composant pour modifier les informations */}
            {visible === "updateInfo" && (
                <div >
                    {modifInfo === 'updateInfo' && <UpdateInfo setPage={props.setPage} />}
                </div>
            )}

            {/* Afficher le composant pour modifier le mot de passe */}
            {visible === "updatePassword" && (
                <div >
                    {modifPass === 'updatePassword' && <UpdatePassword setPage={props.setPage} />}
                </div>
            )}

            {/* Afficher le composant pour afficher les configurations */}
            {visible === "updateOrders" && (
                <div >
                    {modifOrders === 'updateOrders' && <UpdateOrders setPage={props.setPage} />}
                </div>
            )}
        </div>


    )
}






