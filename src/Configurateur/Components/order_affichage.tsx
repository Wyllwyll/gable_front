import { useContext } from "react";
import { selectionsContext } from "../../context/SelectionContext";
import { BASE_URL } from "../../constant/url";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";

export default function OrderAffichage() {
    const { selections } = useContext(selectionsContext)
    const { user } = useContext(UserContext)
    console.log(user);


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


    const arrNbr = selections.filter(elm => elm !== undefined).map(elm => elm.id)

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
                    console.log(data.data);
                    notifySuccess(data.message);
                } else {
                    notifyError(data.message[0]);
                    data.message.forEach((element: string) => {
                        notifyError(element)
                    });
                }
            })


    }






    return (



        <div className="rounded opacity2 hauteurOrder stickyAff ">

            <h2 className="text-white ms-2">Récapitulatif : </h2>

            <div >
                {selections.map((item, i) => (

                    <tr className="row ms-2" key={i} >
                        <td className="col">{item && `${item.description}`}</td>
                        <td className="col">{item && `${item.price}`}</td>
                    </tr>
                ))}
            </div>



            <div className="text-white">
                Total :
            </div>

            <div className="color-txt-orange">
                <div onClick={() => handleSaveClick()} >
                    Sauvegarder
                </div>

                <div>
                    Supprimer
                </div>
            </div>


        </div>
    )

}