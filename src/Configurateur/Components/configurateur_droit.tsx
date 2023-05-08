import { SetStateAction } from "react";
import Profile from "../../PanelUser/Components/Panel_user";
import OrderAffichage from "./order_affichage";
import MailContact from "../../footer/Components/MailContact";

export default function ConfigurateurDroit(props: { page: string, setPage: React.Dispatch<React.SetStateAction<"Configurateur" | "Profile" | "updateInfo" | "updatePassword" | "updateOrders" | "orderAffichage" | "MailContact">> }) {


    return (
        <div>

            <h3 className="text-center color2 pt-3">
                GABLE-
            </h3>
            <h3 className="text-center color2">
                PC CREATOR
            </h3>


            <div className="container-fluid">
                {/* Affiche le composant OrderAffichage si la page actuelle est 'Configurateur' */}
                {props.page === 'Configurateur' && (
                    <OrderAffichage setPage={function (value: SetStateAction<"Configurateur" | "Profile" | "updateInfo" | "updatePassword" | "updateOrders" | "orderAffichage" | "MailContact">): void {
                    }} />)}

                {/* Affiche le composant Profile si la page actuelle est 'Profile' */}
                {props.page === 'Profile' && (
                    <Profile setPage={props.setPage} page={""} />
                )}

                {/* Affiche le composant MailContact si la page actuelle est 'MailContact' */}
                {props.page === 'MailContact' && (
                    <MailContact setPage={props.setPage} page={""} />
                )}
            </div>
        </div>

    )

}