import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";


export function Navbar() {

    const { user } = useContext(UserContext);


    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">

                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {user.access_lvl < 1 && (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link active"
                                        href="/#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#loginModal"
                                        id="loginButton">
                                        {' '}
                                        Se Connecter
                                    </a>
                                </li>



                                <li className="nav-item">
                                    <a className="nav-link"
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#registerModal"
                                        id="registerButton">
                                        {' '}
                                        S'enregistrer
                                    </a>
                                </li>
                            </>
                        )}

                        {user.access_lvl > 0 && (

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">
                                    {' '}
                                    Profil
                                </a>

                                <a className="nav-link active" aria-current="page" href="/#">
                                    {' '}
                                    Deconnexion
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}