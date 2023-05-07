import React, { useState } from "react";
import { UserContext } from "../../context/UserContext";
import UpdateInfo from "./UpdateInformation";
import UpdatePassword from "./UpdatePassword";
import UpdateOrders from "./UpdateOrders";



export default function Profile(props: {
    page: string,
    setPage: React.Dispatch<React.SetStateAction<"Configurateur" | "Profile" | "updateInfo" | "updatePassword" | "updateOrders" | "orderAffichage" | "MailContact">>

}) {
    const userCtx = React.useContext(UserContext);
    const { user } = userCtx
    const [modifInfo, setModifInfo] = useState("")
    const [visible, setVisible] = useState("")
    const [modifPass, setModifPass] = useState("")
    const [modifOrders, setModifOrders] = useState("")


    return (


        <div className="card hauteurOrder">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                    <h2 className="y">
                        Profile
                    </h2>

                    <button
                        type="button"
                        className="btn-close color-orange"
                        id="close"
                        onClick={() => {
                            props.setPage('Configurateur');
                        }}>
                    </button>
                </div>

                <div className="d-flex flex-column ">
                    <div className="col">
                        <div className="d-flex flex-column align-items-start mt-3">
                            {/* Option pour modifier les informations utilisateur */}
                            <div className="cursor btn-hover mb-3" onClick={() => {
                                setModifInfo('updateInfo'); setVisible(visible === "updateInfo" ? "" : "updateInfo")
                            }}>{visible === "updateInfo" ? "Retour" : "Modifier mes Informations"}</div>

                            {/* Option pour modifier le mot de passe utilisateur */}
                            <div className="cursor btn-hover mb-3" onClick={() => {
                                setModifPass('updatePassword'); setVisible(visible === "updatePassword" ? "" : "updatePassword")
                            }}>{visible === "updatePassword" ? "Retour" : "Modifier mon Mot de Passe"}</div>

                            {/* Option pour afficher les configurations(Orders) d'un utilisateur */}
                            <div className="cursor btn-hover" onClick={() => {
                                setModifOrders('updateOrders'); setVisible(visible === "updateOrders" ? "" : "updateOrders")
                            }}>{visible === "updateOrders" ? "Retour" : "Mes Configurations"}</div>
                        </div>
                    </div>



                    <div className="spacing ">
                        {/* Afficher les informations de l'utilisateur */}
                        {visible === "" && (
                            <div className="d-flex justify-content-center ">
                                <ul className="liste-puce list-unstyled">
                                    <li className="d-flex">
                                        <p className="fw-bold me-3">Votre Email :</p>
                                        <p className="color5">{user && user.email}</p>
                                    </li>
                                    <li className="d-flex">
                                        <p className="fw-bold me-3">Votre Nom :</p>
                                        <p className="color5">{user && user.nom}</p>
                                    </li>
                                    <li className="d-flex">
                                        <p className="fw-bold me-3">Votre Prénom :</p>
                                        <p className="color5">{user && user.prenom}</p>
                                    </li>
                                    <li className="d-flex">
                                        <p className="fw-bold me-3">Votre adresse actuelle :</p>
                                        <p className="color5">{user && user.adresse}</p>
                                    </li>
                                </ul>
                            </div>
                        )}
                        {/* Afficher le composant pour modifier les informations */}
                        {visible === "updateInfo" && (
                            <div>
                                {modifInfo === 'updateInfo' && <UpdateInfo setPage={props.setPage} />}
                            </div>
                        )}

                        {/* Afficher le composant pour modifier le mot de passe */}
                        {visible === "updatePassword" && (
                            <div>
                                {modifPass === 'updatePassword' && <UpdatePassword setPage={props.setPage} />}
                            </div>
                        )}

                        {/* Afficher le composant pour afficher les configurations */}
                        {visible === "updateOrders" && (
                            <div>
                                {modifOrders === 'updateOrders' && <UpdateOrders setPage={props.setPage} />}
                            </div>
                        )}
                    </div>


                </div>
            </div>
        </div>

    )
}






