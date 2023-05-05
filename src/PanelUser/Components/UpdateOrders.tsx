import React, { useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { BASE_URL } from "../../constant/url";
import { toast } from "react-toastify";
import { TOrders } from "../tipage/TOrders";
import moment from 'moment';

export default function UpdateOrders(props: {
    setPage: React.Dispatch<React.SetStateAction<"Configurateur" | "Profile" | "updateInfo" | "updatePassword" | "updateOrders"| "orderAffichage">>
}) {
    const userCtx = React.useContext(UserContext);
    const { user } = userCtx
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
    const [orders, setOrders] = useState<TOrders[]>([])
    const [selectedOrder, setSelectedOrder] = useState<TOrders | null>(null);





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
        setSelectedOrder(order);
        props.setPage("updateOrders");
    };



    const tableauOrders = (orders.map((elm, key) =>
        <tr key={key}  >
            <td>{moment(elm.created_at).format("DD/MM/YYYY")}</td>
            <td>{moment(elm.updated_at).format("DD/MM/YYYY")}</td>
            <td> <a
                className=""
                onClick={() => handleOrderSelect(elm)
                }
            >
                <i className="bi bi-pencil"></i>
            </a></td>
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
                        <th scope="col">Modifier</th>
                    </tr>

                </thead>
                <tbody className="table-group-divider ">
                    {tableauOrders}
                </tbody>
            </table>

        </div>


    )
}