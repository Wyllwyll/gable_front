import { useContext } from "react";
import { selectionsContext } from "../../context/SelectionContext";
import { BASE_URL } from "../../constant/url";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";

export default function OrderAffichage() {
    const { selections,setSelections } = useContext(selectionsContext)
    const { user } = useContext(UserContext)


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

    const total = selections.filter(elm => elm !== undefined).map((item: any) => parseFloat(item?.price)).reduce((acc, curr) => acc + curr, 0);



    let arrNbr = selections.filter(elm => elm !== undefined).map(elm => elm.id)




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
        setSelections([]);
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
                Total :{total.toFixed(2)} €
            </div>

            <div className="color-txt-orange">
                <div className=" cursor" onClick={() => handleSaveClick()} >
                    Sauvegarder
                </div>

                <div className=" cursor" onClick={() => handleDeleteClick()}>
                    Supprimer
                </div>
            </div>


        </div>
    )

}