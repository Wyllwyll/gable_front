import { useContext, useState } from "react";
import { TUser } from "../../Navbar/types/TUser";
import { UserContext } from "../../context/UserContext";


export default function UpdateInfo(props: {
    setPage: React.Dispatch<React.SetStateAction<"Configurateur" | "Profile" | "updateInfo">>
}) {
    const { user, setUser } = useContext(UserContext)
    const [infos, setInfos] = useState<TUser>(
        { ...user }
    );

    const infosHandlerTextuel = (value: string) => {
        const newInfos = { ...infos };
        newInfos.nom = value;
        newInfos.prenom = value;
        newInfos.adresse = value;
        newInfos.email = value
        setInfos(newInfos);
    };




    return (
        <div>
            <h4 className="text-white ms-2">Modifiez vos Informations </h4>

            <div>
                <label htmlFor="InfosNom"> Nom : </label>
                <input
                    name="userNom"
                    type="text"
                    defaultValue={infos.nom}
                    onChange={(e) => infosHandlerTextuel(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="infosPrenom"> Prénom : </label>
                <input
                    name="userPrenom"
                    type="string"
                    defaultValue={infos.prenom}
                    onChange={(e) => infosHandlerTextuel(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="infosEmail"> Email : </label>
                <input
                    name="userEmail"
                    type="string"
                    defaultValue={infos.email}
                    required
                    onChange={(e) => infosHandlerTextuel(e.target.value)}

                />
            </div>

            <div>
                <label htmlFor="infosAdresse"> Adresse : </label>
                <input
                    name="userAdresse"
                    type="string"
                    defaultValue={infos.adresse}
                    onChange={(e) => infosHandlerTextuel(e.target.value)}

                />
            </div>

        </div>

    )
}