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
    setPage: React.Dispatch<React.SetStateAction<"Configurateur" | "Profile" | "updateInfo" | "updatePassword" | "updateOrders" | "orderAffichage">>
}) {
    const userCtx = React.useContext(UserContext);
    const { user } = userCtx
    const context = useContext(SelectionContext)
    const [orders, setOrders] = useState<TOrders[]>([])
    const { selections, setSelections } = context



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
                    let emptySelection: { [key: string]: Tcomposants } = {}
                    setSelections(emptySelection)
                    data.data.components.forEach((element: Tcomposants) => {
                        const famille: Ttypes = element.types
                        emptySelection[famille.id] = element
                    });
                    props.setPage("Configurateur")
                } else {
                }
            })

    };



    const tableauOrders = (Array.isArray(orders) && orders.map((elm, key) =>
        <tr key={key}  >
            <td>{moment(elm.created_at).format("DD/MM/YYYY")}</td>
            <td>{moment(elm.updated_at).format("DD/MM/YYYY")}</td>
            <td> <a
                className="cursor"
                onClick={() => handleOrderSelect(elm)
                }
            >
                <i className="bi bi-pencil"></i>
            </a>
                <a
                    className="btn btn-sm btn-danger cursor"
                /* onClick={() => } */
                >
                    <i className="bi bi-x-square"></i>
                </a>
            </td>
        </tr >
    ))




    return (
        <div>
            <h4 className="text-white ms-2">Consultez vos Configurations </h4>

            <table className="table table-hover table-responsive ">
                <thead>
                    <tr>
                        <th scope="col">Date de création</th>
                        <th scope="col">Date de Modification</th>
                        <th scope="col">Modifier/Supprimer</th>
                    </tr>

                </thead>
                <tbody className="table-group-divider ">
                    {tableauOrders}
                </tbody>
            </table>

        </div>


    )
}