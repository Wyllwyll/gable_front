import Profile from "../../PanelUser/Components/Panel_user";
import OrderAffichage from "./order_affichage";

export default function ConfigurateurDroit(props: { page: string, setPage: React.Dispatch<React.SetStateAction<"Configurateur" | "Profile">> }) {


    return (
        <div className="pc-backgound position-relative">

            <h3 className="text-center pt-3 color-txt-green ">
                GABLE-
            </h3>
            <h3 className="text-center color-txt-green ">
                PC CREATOR
            </h3>


            <div>
                {props.page === 'Configurateur' && (
                    <OrderAffichage
                    />)}
            </div>
            <div >
                {props.page === 'Profile' && (
                    <Profile setPage={props.setPage} />
                )}
            </div>
        </div>

    )

}