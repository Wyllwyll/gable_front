import { useContext, useState } from "react";
import { TUser } from "../../Navbar/types/TUser";
import { UserContext } from "../../context/UserContext";
import { BASE_URL } from "../../constant/url";
import { toast } from "react-toastify";
import { log } from "console";


export default function UpdateInfo(props: {
    setPage: React.Dispatch<React.SetStateAction<"Configurateur" | "Profile" | "updateInfo">>
}) {

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

    const { user, setUser } = useContext(UserContext)
    const [infos, setInfos] = useState<TUser>(
        { ...user }
    );
    const infosHandlerTextuel = (key: "nom" | "prenom" | "adresse" | "email", value: string) => {
        const newInfos = { ...infos };
        newInfos[key] = value
        setInfos(newInfos);
        console.log(newInfos, value)

    };

    const handleSaveClick = () => {
        console.log(infos);
        
        const options = {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.access_token}` },
            body: JSON.stringify(infos)
        }

        fetch(`${BASE_URL}/users`, options)
            .then((response) => response.json())
            .then(responseJson => {
                console.log(responseJson);

                if (responseJson.data) {
                    responseJson.data.access_token = infos.access_token;
                    setUser(responseJson.data)
                    console.log("set", responseJson);

                    notifySuccess(responseJson.message);
                } else {
                    notifyError(responseJson.message[0]);
                    responseJson.message.forEach((element: string) => {
                        notifyError(element)
                    });
                }
            })
    };



    return (
        <div>
            <h4 className="text-white ms-2">Modifiez vos Informations </h4>

            <div>
                <label htmlFor="InfosNom"> Nom : </label>
                <input
                    name="userNom"
                    type="text"
                    value={infos.nom}
                    onChange={(e) => infosHandlerTextuel("nom", e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="infosPrenom"> Prénom : </label>
                <input
                    name="userPrenom"
                    type="string"
                    value={infos.prenom}
                    onChange={(e) => infosHandlerTextuel("prenom", e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="infosEmail"> Email : </label>
                <input
                    name="userEmail"
                    type="string"
                    value={infos.email}
                    required
                    onChange={(e) => infosHandlerTextuel("email", e.target.value)}

                />
            </div>

            <div>
                <label htmlFor="infosAdresse"> Adresse : </label>
                <input
                    name="userAdresse"
                    type="string"
                    value={infos.adresse}
                    onChange={(e) => infosHandlerTextuel("adresse", e.target.value)}
                />
            </div>

            <div className="">
                <button
                    type="button"
                    className=""
                    onClick={handleSaveClick}
                >
                    Sauvegarder les changements
                </button>
            </div>

        </div>

    )
}