import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { DEFAULT_USER } from "../../constant/TVisitor";


export function Navbar(props: {
    setPage: React.Dispatch<
        React.SetStateAction<'Configurateur'>
    >;
    page: string;
}) {

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

                            <li className="nav-item me-4">
                                <a className="nav-link color-txt-orange border-bottom border-warning"
                                    aria-current="page"
                                    href="/#">
                                    Pre-Build
                                </a>
                            </li>
                        </>
                    ) : (
                        ''
                    )}

                    {userData.user.access_lvl > 0 ? (
                        <>
                            <li className="nav-item me-4">
                                <a className="nav-link color-txt-orange border-bottom border-warning "
                                    aria-current="page"
                                    href="/#">
                                    Profil
                                </a>
                            </li>

                            <li className="nav-item me-4">
                                <a className="nav-link color-txt-orange border-bottom border-warning "
                                    aria-current="page"
                                    href="/#"
                                    type="button"
                                    onClick={() => {
                                        userData.setUser(DEFAULT_USER);
                                        props.setPage('Configurateur');
                                    }}>
                                    Deconnexion
                                </a>
                            </li>

                            <li className="nav-item me-4 ">
                                <a className="nav-link color-txt-orange border-bottom border-warning "
                                    aria-current="page"
                                    href="/#">
                                    Pre-Build
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