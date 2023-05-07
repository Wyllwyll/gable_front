import { useContext, useState } from "react";
import { TUser } from "../../Navbar/types/TUser";
import { UserContext } from "../../context/UserContext";
import { BASE_URL } from "../../constant/url";
import { toast } from "react-toastify";



export default function UpdateInfo(props: {
    setPage: React.Dispatch<React.SetStateAction<"Configurateur" | "Profile" | "updateInfo" | "updatePassword" | "updateOrders" | "orderAffichage" | "MailContact">>

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
    // Utiliser un état pour gérer les informations de l'utilisateur
    const [infos, setInfos] = useState<TUser>(
        { ...user }
    );

    /* fonction infosHandlerTextuel, avec deux paramètres : key, qui peut être "nom", "prenom", "adresse" ou "email",
    et value, qui est la nouvelle valeur de la clé spécifiée. */
    const infosHandlerTextuel = (key: "nom" | "prenom" | "adresse" | "email", value: string) => {
        const newInfos = { ...infos };// Créer une copie des informations actuelles de l'utilisateur pour ne pas modifier directement l'état d'origine.
        newInfos[key] = value // Mettre à jour la valeur de la clé spécifiée
        setInfos(newInfos);// Mettre à jour l'état des informations de l'utilisateur avec les nouvelles informations modifiées.
    };

    const handleSaveClick = () => {
        if(!infos.email){
            notifyError("l'adresse mail est requise");
            return;
        }
        const options = {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.access_token}` },
            body: JSON.stringify(infos)
        }

        fetch(`${BASE_URL}/users`, options)
            .then((response) => response.json())
            .then(responseJson => {


                if (responseJson.data) {
                    responseJson.data.access_token = infos.access_token;
                    setUser(responseJson.data)

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
        <div className="row">
            <div className="col-md">
                <h4 className="text-white ms-2">Modifiez vos Informations </h4>

                <form>
                    <label htmlFor="InfosNom"
                        className="mb-1"
                    > Nom :
                    </label>
                    <input
                        className="form-control"
                        name="userNom"
                        type="text"
                        value={infos.nom}
                        onChange={(e) => infosHandlerTextuel("nom", e.target.value)}
                    />


                    <div>
                        <label htmlFor="infosPrenom"
                            className="mb-1"
                        > Prénom :
                        </label>
                        <input
                            className="form-control mb-2"
                            name="userPrenom"
                            type="string"
                            value={infos.prenom}
                            onChange={(e) => infosHandlerTextuel("prenom", e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="infosEmail"
                            className="mb-1"
                        > Email :
                        </label>
                        <input
                            className="form-control mb-2"
                            name="userEmail"
                            type="email"
                            value={infos.email}
                            required
                            onChange={(e) => infosHandlerTextuel("email", e.target.value)}

                        />
                    </div>

                    <div>
                        <label htmlFor="infosAdresse"
                            className="mb-1"
                        > Adresse :
                        </label>
                        <input
                            className="form-control mb-2"
                            name="userAdresse"
                            type="string"
                            value={infos.adresse}
                            onChange={(e) => infosHandlerTextuel("adresse", e.target.value)}
                        />
                    </div>

                    <div className="d-flex justify-content-center">
                        <button
                            type="button"
                            className="btn btn-hover fs-5 "
                            onClick={handleSaveClick}
                        >
                            Sauvegarder les changements
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}