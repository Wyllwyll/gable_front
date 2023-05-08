import { useContext, useEffect, useState } from "react";
import { SelectionContext } from "../../context/SelectionContext";
import { BASE_URL } from "../../constant/url";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import { Tcomposants } from "../tipage/Tcomposants";

export default function OrderAffichage(props: {
    setPage: React.Dispatch<React.SetStateAction<"Configurateur" | "Profile" | "updateInfo" | "updatePassword" | "updateOrders" | "orderAffichage" | "MailContact">>

}) {
    useEffect(() => {
        return () => {
            setOrder(null)
            setSelections({})
        }
    }, [])


    const { user } = useContext(UserContext)
    const context = useContext(SelectionContext)
    if (!context) return null
    const { selections, setSelections, order, setOrder } = context

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
        let method = 'POST'
        let url = `${BASE_URL}/orders`;
        if (order?.id) {
            method = 'PATCH'
            url = `${BASE_URL}/orders/${order.id}`
        }

        const body = {
            componentId: arrNbr
        }
        const options = {
            method: method,
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.access_token}` },
            body: JSON.stringify(body)
        }

        fetch(url, options)
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
        <div className="row ">
            <div className="col-md ">
                <div className="card hauteurOrder">
                    <div className="card-body ">

                        <h2 className="color5">Récapitulatif : </h2>
                        <table className="table table-hover table-responsive  ">
                            <thead>
                                <tr className="bg-color3 fs-5">
                                    <th scope="col">Désignation</th>
                                    <th scope="col">Prix</th>
                                </tr>
                            </thead>

                            <tbody className="table-group-divider bg-color5 ">
                                {Object.values(selections).map((item, i) => (
                                    <tr key={i} >
                                        <td>{item && `${item.description}`}</td>
                                        <td>{item && `${item.price} €`}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-between flex-wrap">

                            {Object.values(selections).length ? (
                                <>
                                    <div className="btn-hover cursor color2 fs-5 " onClick={() => handleSaveClick()} >
                                        Sauvegarder
                                    </div>

                                    <div className="btn-hover cursor color2 fs-5 " onClick={() => handleDeleteClick()}>
                                        Supprimer
                                    </div>
                                </>
                            ) : ""}

                            <div className="color5 fs-4">
                                Total : {total} €
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}