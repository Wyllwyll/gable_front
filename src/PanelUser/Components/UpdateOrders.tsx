import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { BASE_URL } from "../../constant/url";
import { toast } from "react-toastify";
import { TOrders } from "../tipage/TOrders";
import moment from 'moment';
import { SelectionContext } from "../../context/SelectionContext";
import { Tcomposants } from "../../Configurateur/tipage/Tcomposants";
import { Ttypes } from "../../Configurateur/tipage/Ttype";

export default function UpdateOrders(props: {
    setPage: React.Dispatch<React.SetStateAction<"Configurateur" | "Profile" | "updateInfo" | "updatePassword" | "updateOrders" | "orderAffichage" | "MailContact">>
}) {
    const userCtx = React.useContext(UserContext);
    const { user } = userCtx
    // Utiliser le contexte SelectionContext pour accéder aux sélections des composants.
    const context = useContext(SelectionContext)
    const [orders, setOrders] = useState<TOrders[]>([])
    const { selections, setSelections, order, setOrder } = context



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


    // récupére la liste des Orders lors de l'affichage du composant.
    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.access_token}`
            },
        }


        fetch(`${BASE_URL}/orders`, options)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setOrders(data.data)
                } else {
                    notifyError(data.message[0]);
                    data.message.forEach((element: string) => {
                        notifyError(element)
                    });
                }
            })
    }, [])



    // Fonction pour gérer la sélection d'un order.
    const handleOrderSelect = (order: TOrders) => {
        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.access_token}`
            },
        }
        fetch(`${BASE_URL}/orders/${order.id}`, options)
            .then((response) => response.json())
            .then((data: { data: any }) => {
                if (data) {
                    setOrder(order)
                    let emptySelection: { [key: string]: Tcomposants } = {}  // Crée un nouvel objet vide 'emptySelection' pour stocker les composants de l'order'.
                    setSelections(emptySelection)  // Met à jour le contexte des sélections avec cet objet vide pour réinitialiser les sélections actuelles.
                    data.data.components.forEach((element: Tcomposants) => { // Parcoure les composants de l'order récupérée (data.data.components)
                        const famille: Ttypes = element.types  // Récupérez la famille (type) de chaque composant, necessaire ulterieurement
                        emptySelection[famille.id] = element // Ajoute chaque composant à l'objet 'emptySelection' en utilisant l'ID de la famille comme clé.
                    });
                    props.setPage("Configurateur") // Charge la page "Configurateur" pour permettre à l'utilisateur de voir et de modifier les composants de son order.

                } else {
                    toast.error("Erreur lors de la récupération de l'order. Veuillez réessayer.", {
                        position: 'bottom-right',
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: 'light',
                    });
                }
            })

    };



    const handleOrderDelete = (orderId: number) => {
        const options = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.access_token}`
            },
        };

        fetch(`${BASE_URL}/orders/${orderId}`, options)
            .then((response) => {
                if (response.ok) {
                    setOrders(orders.filter((order) => order.id !== orderId)); //met à jour l'état orders en filtrant et en conservant uniquement les éléments dont l'attribut id ne correspond pas à la valeur de orderId.
                    toast.success("Order deleted successfully", {
                        position: 'bottom-right',
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: 'light',
                    });
                } else {
                    notifyError("Error deleting order");
                }
            })
    };

    /*tableauOrders vérifie si 'orders' est un tableau avec Array.isArray(orders)
     et si c'est le cas, elle itère sur chaque élément du tableau (chaque order) avec la méthode .map(). */
    const tableauOrders = (Array.isArray(orders) && orders.map((elm, key) =>
        <tr key={key}  >
            {/* La date est formatée à l'aide de la bibliothèque 'moment' pour être plus lisible (format "DD/MM/YYYY") */}
            <td>{moment(elm.created_at).format("DD/MM/YYYY")}</td>
            <td>{elm.updated_at ? moment(elm.updated_at).format("DD/MM/YYYY") : "non-modifie"}</td>
            <td>
                <div className="d-flex justify-content-evenly">
                    <a
                        className="btn btn-sm btn-primary cursor"
                        onClick={() => handleOrderSelect(elm)}
                    >
                        <i className="bi bi-pencil"></i>
                    </a>
                    <a
                        className="btn btn-sm btn-danger cursor"
                        onClick={() => handleOrderDelete(elm.id)}
                    >
                        <i className="bi bi-x-square"></i>
                    </a>
                </div>
            </td>
        </tr >
    ))

    return (
        <div>
            <h4 className="text-white ms-2">Consultez vos Configurations: </h4>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Date de création</th>
                            <th scope="col">Date de Modification</th>
                            <th className="text-center" scope="col">Modifier/Supprimer</th>
                        </tr>

                    </thead>
                    <tbody className="table-group-divider ">
                        {tableauOrders}
                    </tbody>
                </table>
            </div>
        </div>
    )
}