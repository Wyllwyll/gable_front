import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { DEFAULT_USER } from "../../constant/TVisitor";


export function Navbar(props: {
    setPage: React.Dispatch<
        React.SetStateAction<'Configurateur' | 'Profile' | "updateInfo" | "updatePassword" | "updateOrders" | "orderAffichage" |"MailContact">
    >;
}) {

    // Utiliser le contexte utilisateur pour accéder aux données utilisateur
    const userData = useContext(UserContext);


    return (

        <nav className="navbar navbar-expand-lg color-navbar">

            <button className="navbar-toggler color-orange"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon color-orange"></span>
            </button>


            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav ">
                    {/* Vérifier si le niveau d'accès de l'utilisateur est inférieur à 1, si oui , afficher les boutons Se Connecter et S'enregistrer */}
                    {userData.user.access_lvl < 1 ? (
                        <>
                            <li className="nav-item me-4  ">
                                <a className="nav-link color-txt-orange border-bottom border-warning "
                                    href="/#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#loginModal"
                                    id="loginButton">
                                    {' '}
                                    Se Connecter
                                </a>
                            </li>



                            <li className="nav-item me-4">
                                <a className="nav-link color-txt-orange border-bottom border-warning"
                                    href="/#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#registerModal"
                                    id="registerButton">
                                    {' '}
                                    S'enregistrer
                                </a>
                            </li>
                        </>
                    ) : (
                        // Si le niveau d'accès de l'utilisateur est supérieur ou égal à 1, ne rien afficher
                        ''
                    )}

                    {userData.user.access_lvl > 0 ? (
                        <>
                            <li className="nav-item me-4">
                                <a className="nav-link color-txt-orange border-bottom border-warning "
                                    aria-current="page"
                                    href="/#"
                                    onClick={() => {
                                        props.setPage('Profile');

                                    }}>

                                    Profil
                                </a>
                            </li>

                            <li className="nav-item me-4">
                                <a className="nav-link color-txt-orange border-bottom border-warning "
                                    aria-current="page"
                                    href="/#"
                                    type="button"
                                    onClick={() => {
                                        //reinitialise l'user en tant que visiteur et renvois sur la page d'accueil
                                        userData.setUser(DEFAULT_USER);
                                        props.setPage('Configurateur');
                                    }}>
                                    Deconnexion
                                </a>
                            </li>
                        </>
                    ) : (
                        ''
                    )}
                </ul>
            </div>

        </nav>


    )
}