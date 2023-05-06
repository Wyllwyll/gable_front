import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import { TUser } from "../../Navbar/types/TUser";
import { BASE_URL } from "../../constant/url";

export default function UpdatePassword(props: {
    setPage: React.Dispatch<React.SetStateAction<"Configurateur" | "Profile" | "updateInfo" | "updatePassword" | "updateOrders" | "orderAffichage">>

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
    // Gestion de l'état local pour les mots de passe
    const [pass, setPass] = useState<TUser>(
        { ...user }
    );


    // gére la soumission du formulaire de mise à jour du mot de passe
    const passHandlerTextuel = (key: "password", value: string) => {
        const newPassword = { ...pass };
        newPassword[key] = value
        setPass(newPassword);
    };


    const handleSaveClick = () => {
        const options = {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.access_token}` },
            body: JSON.stringify(pass)
        }

        fetch(`${BASE_URL}/users`, options)
            .then((response) => response.json())
            .then(responseJson => {


                if (responseJson.data) {
                    // met à jour les informations de l'utilisateur dans le contexte
                    responseJson.data.access_token = pass.access_token;
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
        <div>
            <h4 className="text-white ms-2">Modifiez votre Mot de Passe </h4>

            <div>
                <label htmlFor="newPassword"> Nouveau Mot de Passe </label>
                <input
                    name="usernewmdp"
                    type="string"
                    value={pass.password}
                    onChange={(e) => passHandlerTextuel("password", e.target.value)}
                />
            </div>

            <div className="">
                <button
                    type="button"
                    className=""
                    onClick={handleSaveClick}
                >
                    Sauvegarder le nouveau Mot de Passe
                </button>
            </div>
        </div>
    )
}