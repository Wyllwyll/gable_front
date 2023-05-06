import { useContext } from "react";
import { SelectionContext } from "../../context/SelectionContext";
import { BASE_URL } from "../../constant/url";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import { Tcomposants } from "../tipage/Tcomposants";

export default function OrderAffichage(props: {
    setPage: React.Dispatch<React.SetStateAction<"Configurateur" | "Profile" | "updateInfo" | "updatePassword" | "updateOrders" | "orderAffichage">>

}) {
    const { user } = useContext(UserContext)
    const context = useContext(SelectionContext)
    if (!context) return null
    const { selections, setSelections } = context



    const notifySuccess = (msg: string) =>
        toast.success(msg, {
            position: 'bottom-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'light',
        });
    const notifyError = (msg: string) =>
        toast.error(msg, {
            position: 'bottom-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'light',
        });

    // Calcul du prix total des composants sélectionnés
    const total = Object.values(selections)
        .filter((elm): elm is Tcomposants => elm !== undefined) // filtre les valeurs null ou undefined
        .reduce((acc, curr) => acc + (parseFloat(curr.price.toString() || "0")), 0); // fait une somme des prix de chaque composant, acc est le total actuel, initialement défini à 0, et curr est l'élément actuel du tableau. On ajoute le prix de curr à acc, qui est ensuite renvoyé comme nouveau total pour la prochaine itération. Si le prix de l'élément actuel n'est pas un nombre valide, la valeur 0 est utilisée.

    // Récupération des ids des composants sélectionnés
    let arrNbr = Object.values(selections)
        .filter((elm): elm is Tcomposants => elm !== undefined) // Filtrage pour ne garder que les composants sélectionnés et eliminer des potentiels null
        .map(elm => elm.id); // Extraction des id des composants sélectionnés et création d'un nouveau tableau

    //fonction de sauvegarde de l'order avec les composants selectionnes
    const handleSaveClick = () => {

        const body = {
            componentId: arrNbr
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.access_token}` },
            body: JSON.stringify(body)
        }



        fetch(`${BASE_URL}/orders`, options)
            .then((response) => response.json())

            .then((data) => {
                if (data.data) {

                    notifySuccess(data.message);
                } else {
                    notifyError('Vous devez etre connecte');
                    ;
                }
            })
    }


    const handleDeleteClick = () => {
        setSelections({});
    }


    return (
        <div className="rounded opacity2 hauteurOrder stickyAff ">

            <h2 className="color-txt-yellow ms-2">Récapitulatif : </h2>

            <div >
                {Object.values(selections).map((item, i) => (

                    <tr className="row ms-2" key={i} >
                        <td className="col">{item && `${item.description}`}</td>
                        <td className="col">{item && `${item.price}`}</td>
                    </tr>
                ))}
            </div>



            <div className="text-white">
                Total :{total} €
            </div>

            <div className="color-txt-orange">
                <div className="btn-hover cursor" onClick={() => handleSaveClick()} >
                    Sauvegarder
                </div>

                <div className="btn-hover cursor" onClick={() => handleDeleteClick()}>
                    Supprimer
                </div>
            </div>


        </div>
    )

}