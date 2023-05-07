import { useContext, useRef } from "react";
import { UserContext } from "../../context/UserContext";
import { BASE_URL } from "../../constant/url";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function LoginForm() {

    // Créer des références pour les champs email et mot de passe
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    // Utiliser le contexte utilisateur pour accéder aux fonctions setUser et user
    const { setUser, user } = useContext(UserContext);

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


    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Vérifier si les champs email et mot de passe ont des valeurs avant de lancer le fetch
        if (emailRef.current?.value && passwordRef.current?.value) {
            const body = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            };

            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            };


            fetch(`${BASE_URL}/auth/login`, options)
                .then((response) => response.json())
                .then((data) => {


                    if (data.data) {
                        // Réinitialiser les champs email et mot de passe
                        emailRef.current!.value = '';
                        passwordRef.current!.value = '';
                        // Mettre à jour les données utilisateur et fermer le formulaire via un timer
                        setUser(data.data);
                        setTimeout(() => {
                            document.getElementById('close')?.click();
                        }, 1500);
                        notifySuccess(data.message);
                    } else {
                        notifyError("Identifiants incorrects");
                        data.message.forEach((element: string) => {
                            notifyError(element)
                        });
                    }

                });
        } else {
            notifyError('Informations manquantes');
        }
    };


    return (
        <form onSubmit={submitHandler}>
            <div
                className="modal fade"
                aria-labelledby="loginModal"
                id="loginModal"
                tabIndex={-1}
            >
                <div className="modal-dialog modal-dialog-centered  ">
                    <div className=" modal-content bg-color4 ">
                        <div className="modal-header">
                            <h5 className="modal-title">Identifiants de Connexion</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                id="close"
                            ></button>
                        </div>

                        <div className="modal-body bg-color4">
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label"
                                >
                                    Email
                                </label>

                                <input
                                    className="form-control"
                                    ref={emailRef}
                                    type="email"
                                    id="inputEmail"
                                    placeholder="Email"
                                ></input>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="inputPassword"
                                    className="form-label"
                                >
                                    Password
                                </label>

                                <input
                                    className="form-control"
                                    ref={passwordRef}
                                    type="password"
                                    id="inputPassword"
                                    placeholder="password"
                                >
                                </input>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center">
                            {user.access_lvl < 1 ? (
                                <button
                                    type="submit"
                                    className="btn btn-hover fs-5 "
                                >
                                    {' '}
                                    Connexion
                                </button>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ToastContainer />
            </div>
        </form>

    );
}